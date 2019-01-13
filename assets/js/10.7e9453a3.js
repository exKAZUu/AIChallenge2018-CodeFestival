(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{163:function(_,v,a){"use strict";a.r(v);var r=a(19),e=Object(r.a)({},function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"ゲームルール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ゲームルール","aria-hidden":"true"}},[_._v("#")]),_._v(" ゲームルール")]),_._v(" "),a("p",[_._v("パズルゲーム "),a("a",{attrs:{href:"https://ja.wikipedia.org/wiki/2048_(%E3%82%B2%E3%83%BC%E3%83%A0)",target:"_blank",rel:"noopener noreferrer"}},[_._v("2048"),a("OutboundLink")],1),_._v(" が対戦ゲームになった！")]),_._v(" "),a("p",[_._v("本概要版を 2018/11/03 (土)に、ベータ版を 2018/11/07 (水)に公開しました。正式版を 2018/11/10 (土)に公開しました。\nベータ版からの更新内容は GitHub の"),a("a",{attrs:{href:"https://github.com/exKAZUu/AIChallenge2018AtCodeFestival/compare/7d601f23273478bb87a5eca2da4affd4dfd4d120...master?expand=1",target:"_blank",rel:"noopener noreferrer"}},[_._v("差分表示機能"),a("OutboundLink")],1),_._v("でご確認いただけます。\n"),a("strong",[_._v("誤りや改善すべき箇所がございましたら、"),a("a",{attrs:{href:"https://github.com/exKAZUu/AIChallenge2018AtCodeFestival",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub"),a("OutboundLink")],1),_._v(" 上でご連絡いただければ幸いです！")])]),_._v(" "),a("h2",{attrs:{id:"基本ルール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本ルール","aria-hidden":"true"}},[_._v("#")]),_._v(" 基本ルール")]),_._v(" "),a("p",[_._v("2 人のプレイヤーはそれぞれ 5 x 5 のサイズのボードと初期値が 0 のスコアを持っています。\nボードの各マスには高々 1 個の正整数が入ります。\nゲーム開始時、お互いのボードには相手プレイヤーが指定した 1 つのマスに 2 が置いてあります。\nゲームでは 2 人のプレイヤーに交互にターン（手番）が回り、自分のとる行動を選択します。\nターンは次の 2 個のフェーズからなります。\nなお、対戦相手や先攻・後攻は、オンライン対戦システムによって自動的に決定されます。")]),_._v(" "),a("p",[_._v("どちらかのプレイヤーが勝利条件を満たす、もしくは、\n2 人のプレイヤーがそれぞれ 1000 ターン行動するとゲーム終了となり、勝敗が決まります。\n勝利条件および勝敗の決め方については、後述の勝利条件をご覧ください。")]),_._v(" "),a("h3",{attrs:{id:"メインフェーズ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#メインフェーズ","aria-hidden":"true"}},[_._v("#")]),_._v(" メインフェーズ")]),_._v(" "),a("p",[_._v("ターンプレイヤーは上下左右のいずれかの向きを 1 個選択します。\nターンプレイヤーのボード上の数たちは、選択された向きに、ボードの端か他の数にぶつかるまで移動します。\nこのとき 2 個の等しい数がぶつかると、それらがマージ（加算）されて 1 個の数になります。\nマージが発生するたび、マージによってできた数に等しい値がターンプレイヤーのスコアに加算されます。")]),_._v(" "),a("h4",{attrs:{id:"例-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例-1","aria-hidden":"true"}},[_._v("#")]),_._v(" 例 1")]),_._v(" "),a("p",[_._v("次のような状態のボードについて「右」を選択した場合を考えます。\n（"),a("code",[_._v(".")]),_._v("は空マスを表します。以下の図示は"),a("strong",[_._v("ゲームソフトウェアが与える実際の入力形式とは異なります")]),_._v("。）")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v(". 4 . 4 .\n4 2 . . .\n2 2 2 . .\n4 2 . 2 .\n2 2 2 2 2\n")])])]),a("p",[_._v("1 行目の 4 と 4 はマージされて 8 になります。\n2 行目の 4 と 2 は順序を保ったまま右に移動します。\n3 行目の 3 個の 2 は移動の先頭（右端）から順にマージが発生し 4 と 2 になります。\n4 行目の 2 と 2 はマージされて 4 になります。続けて 4 とマージはされません。\n5 行目の 2 と 2 の各ペアはマージされて、それぞれ 4 になります。 8 にはなりません。\nその結果、ボードは次のように変化しました。")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v(". . . . 8\n. . . 4 2\n. . . 2 4\n. . . 4 4\n. . 2 4 4\n")])])]),a("h3",{attrs:{id:"アタックフェーズ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アタックフェーズ","aria-hidden":"true"}},[_._v("#")]),_._v(" アタックフェーズ")]),_._v(" "),a("p",[_._v("相手のボードの任意の空マスを選び、正整数を置くことができます。\n直前のメインフェーズでマージが発生した回数が X のとき、1 個以上で、かつ、すべて同じ正整数で、かつ、総和が 2"),a("sup",[_._v("X+1")]),_._v(" の正整数を置きます。\n例えば、メインフェーズで 2 回マージした場合、 1 個の "),a("code",[_._v("8")]),_._v("、2 個の "),a("code",[_._v("4")]),_._v("、4 個の "),a("code",[_._v("2")]),_._v(" のいずれかのパターンで正整数を置かなければなりません。\nただし、存在しないマス、および、既に正整数が置かれたマスは選べません。")]),_._v(" "),a("h2",{attrs:{id:"入出力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入出力","aria-hidden":"true"}},[_._v("#")]),_._v(" 入出力")]),_._v(" "),a("p",[_._v("以下に入出力の形式を記します。各出力の末尾は改行コードであり、かつ、出力後に標準出力を flush しなければなりません。")]),_._v(" "),a("h3",{attrs:{id:"ゲーム開始前の入力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ゲーム開始前の入力","aria-hidden":"true"}},[_._v("#")]),_._v(" ゲーム開始前の入力")]),_._v(" "),a("pre",[_._v("Player\n")]),_._v(" "),a("ul",[a("li",[_._v("Player: プレイヤー番号\n"),a("ul",[a("li",[a("code",[_._v("0")]),_._v(": 先攻プレイヤー")]),_._v(" "),a("li",[a("code",[_._v("1")]),_._v(": 後攻プレイヤー")])])])]),_._v(" "),a("h3",{attrs:{id:"ゲーム開始前の出力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ゲーム開始前の出力","aria-hidden":"true"}},[_._v("#")]),_._v(" ゲーム開始前の出力")]),_._v(" "),a("pre",[_._v("r c\n")]),_._v(" "),a("ul",[a("li",[_._v("r: ゲーム開始時に相手のボードに 2 を置く行 (1 ≦ r ≦ 5)")]),_._v(" "),a("li",[_._v("c: ゲーム開始時に相手のボードに 2 を置く列 (1 ≦ c ≦ 5)")])]),_._v(" "),a("h3",{attrs:{id:"各ターンの入力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各ターンの入力","aria-hidden":"true"}},[_._v("#")]),_._v(" 各ターンの入力")]),_._v(" "),a("pre",[_._v("Turn TimeLeft ScoreOfTurnPlayer ScoreOfOtherPlayer\nA"),a("sub",[_._v("1,1")]),_._v(" A"),a("sub",[_._v("1,2")]),_._v(" ... A"),a("sub",[_._v("1,5")]),_._v("\nA"),a("sub",[_._v("2,1")]),_._v(" A"),a("sub",[_._v("2,2")]),_._v(" ... A"),a("sub",[_._v("2,5")]),_._v("\n:\nA"),a("sub",[_._v("5,1")]),_._v(" A"),a("sub",[_._v("5,2")]),_._v(" ... A"),a("sub",[_._v("5,5")]),_._v("\nB"),a("sub",[_._v("1,1")]),_._v(" B"),a("sub",[_._v("1,2")]),_._v(" ... B"),a("sub",[_._v("1,5")]),_._v("\nB"),a("sub",[_._v("2,1")]),_._v(" B"),a("sub",[_._v("2,2")]),_._v(" ... B"),a("sub",[_._v("2,5")]),_._v("\n:\nB"),a("sub",[_._v("5,1")]),_._v(" B"),a("sub",[_._v("5,2")]),_._v(" ... B"),a("sub",[_._v("5,5")]),_._v("\n")]),_._v(" "),a("ul",[a("li",[_._v("Turn: ターン数\n"),a("ul",[a("li",[_._v("初期値は 1 で、各プレイヤーがそれぞれ 1 回行動すると、ターン数が 1 増える。")])])]),_._v(" "),a("li",[_._v("TimeLeft: ターンプレイヤーの残り実行時間（ミリ秒）\n"),a("ul",[a("li",[_._v("100 秒 から、既に消費した実行時間を引いたもの。")])])]),_._v(" "),a("li",[_._v("ScoreOfTurnPlayer: ターンプレイヤーのスコア")]),_._v(" "),a("li",[_._v("ScoreOfOtherPlayer: ターンプレイヤーではないプレイヤーのスコア")]),_._v(" "),a("li",[_._v("A"),a("sub",[_._v("i,j")]),_._v(": 自分のボードの i 行目 j 列目のマスの状態")]),_._v(" "),a("li",[_._v("B"),a("sub",[_._v("i,j")]),_._v(": 相手のボードの i 行目 j 列目のマスの状態\n"),a("ul",[a("li",[a("code",[_._v("0")]),_._v(" のとき、そのマスは空である。")]),_._v(" "),a("li",[_._v("正整数 a のとき、そのマスの数は 2"),a("sup",[_._v("a")]),_._v(" である。")])])])]),_._v(" "),a("h3",{attrs:{id:"各ターンの出力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各ターンの出力","aria-hidden":"true"}},[_._v("#")]),_._v(" 各ターンの出力")]),_._v(" "),a("pre",[_._v("Command M V r"),a("sub",[_._v("1")]),_._v(" c"),a("sub",[_._v("1")]),_._v(" r"),a("sub",[_._v("2")]),_._v(" c"),a("sub",[_._v("2")]),_._v(" ... r"),a("sub",[_._v("M")]),_._v(" c"),a("sub",[_._v("M")]),_._v("\n")]),_._v(" "),a("ul",[a("li",[_._v("Command: ボードをスライドする向き\n"),a("ul",[a("li",[a("code",[_._v("U")]),_._v(": 上")]),_._v(" "),a("li",[a("code",[_._v("R")]),_._v(": 右")]),_._v(" "),a("li",[a("code",[_._v("D")]),_._v(": 下")]),_._v(" "),a("li",[a("code",[_._v("L")]),_._v(": 左")])])]),_._v(" "),a("li",[_._v("M: 相手のボードに置く数の個数")]),_._v(" "),a("li",[_._v("V: ボードに置く数 2"),a("sup",[_._v("V")]),_._v("を表す整数値 (1 ≦ V)")]),_._v(" "),a("li",[_._v("r"),a("sub",[_._v("i")]),_._v(": i 個目の数を置く行 (1 ≦ r"),a("sub",[_._v("i")]),_._v(" ≦ 5)")]),_._v(" "),a("li",[_._v("c"),a("sub",[_._v("i")]),_._v(": i 個目の数を置く列 (1 ≦ c"),a("sub",[_._v("i")]),_._v(" ≦ 5)")])]),_._v(" "),a("p",[_._v("出力の途中に改行を挿入しないように注意してください。")]),_._v(" "),a("h2",{attrs:{id:"実行時間"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#実行時間","aria-hidden":"true"}},[_._v("#")]),_._v(" 実行時間")]),_._v(" "),a("p",[_._v("各プレイヤーは実行時間に制限があります。\nゲーム開始前の入出力は 1 秒以内に終了しなければなりません。\n各ターンは 1 秒以内に終了して、かつ、全ターンの合計が 100 秒以内でなければなりません。\n超過した場合、ゲームに敗北します。\nプログラムのコンパイル時間・ゲーム開始前の入出力の時間は、この 100 秒には含まれません。")]),_._v(" "),a("h2",{attrs:{id:"勝利条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#勝利条件","aria-hidden":"true"}},[_._v("#")]),_._v(" 勝利条件")]),_._v(" "),a("p",[_._v("以下の条件のどちらかを満たすことで、ゲームに勝利できます。")]),_._v(" "),a("ol",[a("li",[_._v("対戦相手のプレイヤーのターンに、以下の条件のいずれかを満たした場合\n"),a("ul",[a("li",[_._v("対戦相手のターン開始時において、対戦相手がどんな行動を取ってもボードの状態を変化させられない場合")]),_._v(" "),a("li",[_._v("対戦相手のメインフェーズにおいて、対戦相手が行動してもボードの状態が変化しなかった場合")]),_._v(" "),a("li",[_._v("対戦相手の AI プログラムが、ゲームからの入力を受け取らなかった場合")]),_._v(" "),a("li",[_._v("対戦相手の AI プログラムの出力が、定められたフォーマットもしくは制約を満たさなかった場合\n"),a("ul",[a("li",[_._v("例えば、アタックフェーズで既に正整数が置かれているマスを選んだ場合や、異なる総和の正整数を置こうとした場合も該当します。")])])]),_._v(" "),a("li",[_._v("対戦相手の AI プログラムが、実行時間の制約を満たさなかった場合")])])]),_._v(" "),a("li",[_._v("2 人のプレイヤーがそれぞれ 1000 ターンで行動した後、自分のスコアが対戦相手のスコアより高かった場合")]),_._v(" "),a("li",[_._v("2 人のプレイヤーがそれぞれ 1000 ターンで行動した後、自分のスコアと対戦相手のスコアが等しく、かつ、自分が後攻であった場合")])])])},[],!1,null,null,null);e.options.__file="index.md";v.default=e.exports}}]);