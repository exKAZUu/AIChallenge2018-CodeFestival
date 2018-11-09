package net.exkazuu.battle2048;

import com.google.common.collect.Lists;
import net.exkazuu.battle2048.controller.*;
import net.exkazuu.battle2048.game.Game;
import net.exkazuu.battle2048.game.GameManager;
import net.exkazuu.battle2048.game.GameResult;
import net.exkazuu.battle2048.util.Logger;
import net.exkazuu.gameaiarena.player.ExternalComputerPlayer;
import org.apache.commons.cli.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
  private static final String HELP = "h";
  private static final String LOGGING = "l";
  private static final String LOGGING_DETAILED = "ll";
  private static final String EXTERNAL_AI_PROGRAM = "a";
  private static final String WORKING_DIR = "w";
  private static final String REPLAY_OUTPUT_NAME = "o";
  private static final String DEFAULT_COMMAND = "java SampleAI";
  private static final String DEFAULT_WORK_DIR = "./defaultai";
  private static final String DEFAULT_RECORD_FILENAME = "game.log";

  public static void main(String[] args) {
    Options options = buildOptions();
    try {
      CommandLineParser parser = new DefaultParser();
      CommandLine cl = parser.parse(options, args);
      if (cl.hasOption(HELP)) {
        printHelp(options);
      } else {
        start(new Game(), cl);
      }
    } catch (ParseException | IOException e) {
      System.err.println("Error: " + e.getMessage());
      printHelp(options);
      System.exit(-1);
    }
  }

  private static void start(Game game, CommandLine cl) throws ParseException, IOException {
    List<String> externalCmds = getOptionsValuesOrEmptyList(cl, EXTERNAL_AI_PROGRAM);
    List<String> workingDirs = getOptionsValuesOrEmptyList(cl, WORKING_DIR);
    if (workingDirs.isEmpty()) {
      workingDirs = externalCmds.stream().map(s -> ".").collect(Collectors.toList());
    }
    if (externalCmds.size() != workingDirs.size()) {
      throw new ParseException("The numbers of -w arguments must be 0 or equal to the number of -a arguments.");
    }

    List<AIController> initCtrls = new ArrayList<>();
    List<AIController> mainCtrls = new ArrayList<>();

    for (int i = 0; i < externalCmds.size(); i++) {
      try {
        ExternalComputerPlayer com = new ExternalComputerPlayer(externalCmds.get(i).split(" "), workingDirs.get(i));
        initCtrls.add(new AIInitialController(com, i));
        mainCtrls.add(new AIMainController(com, i));
      } catch (IOException e) {
        System.exit(-1);
      }
    }
    for (int i = externalCmds.size(); i < 2; i++) {
      initCtrls.add(new RandomAIInitialController(i));
      mainCtrls.add(new RandomAIMainController(i));
    }

    int logLevel = Logger.LOG_LEVEL_RESULT;
    if (cl.hasOption(LOGGING)) logLevel = Logger.LOG_LEVEL_STATUS;
    if (cl.hasOption(LOGGING_DETAILED)) logLevel = Logger.LOG_LEVEL_DETAILS;
    Logger.getInstance().initialize(logLevel, false);

    GameManager gameManager = new GameManager(initCtrls, mainCtrls);
    GameResult result = gameManager.start();
    System.out.println(result);

    Logger.getInstance().finalize();

    gameManager.recorder.writeReplayLog(cl.getOptionValue("o", DEFAULT_RECORD_FILENAME));

    for (int i = 0; i < 2; i++) {
      initCtrls.get(i).release();
      mainCtrls.get(i).release();
    }
  }

  private static Options buildOptions() {
    return new Options()
      .addOption(HELP, false, "Print this help.")
      .addOption(LOGGING, false, "Enable writing logs to stdout and file.")
      .addOption(LOGGING_DETAILED, false, "Enable writing detailed logs to stdout and file.")
      .addOption(EXTERNAL_AI_PROGRAM, true, "Set 0-2 external AI programs.")
      .addOption(WORKING_DIR, true, "Set working directories for external AI programs.")
      .addOption(REPLAY_OUTPUT_NAME, true, "Set output file name for a replay.");
  }

  private static void printHelp(Options options) {
    HelpFormatter help = new HelpFormatter();
    help.printHelp("java -jar Battle2048.jar [OPTIONS]\n" + "[OPTIONS]: ", "", options, "", true);
  }

  private static List<String> getOptionsValuesOrEmptyList(CommandLine cl, String option) {
    return cl.hasOption(option) ? Lists.newArrayList(cl.getOptionValues(option)) : Lists.newArrayList();
  }
}