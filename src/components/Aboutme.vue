<template>
<!DOCTYPE html>
 <div>
    <div class="top-wrapper">
      <div class="container">
        <h1>AboutMe</h1>
        <p>全然プログラミングに関係のない自己紹介です。</p>
        <p></p>
        <div class="btn-wrapper">
        </div>
      </div>
    </div>
    <div class="lesson-wrapper">
      <div class="container">
        <div class="heading">
          <h3>基本</h3>
             <con class="text-contents"><b>名前</b>：本間健斗</con>
             <con class="text-contents"><b>年齢</b>：24歳(1994年世代)</con>
             <con class="text-contents"><b>出身</b>：新潟県新潟市</con>
             <con class="text-contents"><b>大学</b>：獨協大学英語学科</con>
             <con class="text-contents"><b>専攻</b>：認知言語学</con>
             <con class="text-contents"><b>趣味</b>：絵、漫画、音楽、映画、ゲーム、格闘技</con>
             <con class="text-contents"><b>前職</b>：ポーカープレイヤー(新卒)</con>
             <con class="text-contents"><b>座右の銘</b>：なるようになる</con>
        </div>
        <div class="lessons">
          <nobtn-Aboutme class="lesson nobtn">
            <p>漫画・アニメ</p>
            <con class="text-contents"><b>漫画：</b>喧嘩商売(稼業)、キングダム、古谷実作品全部、福本作品全部、有名ジャンプ作品全部(特にジョジョ)、NHKにようこそ!、はじめの一歩、バキシリーズ、ホーリーランド、GTO、天牌、フラジャイル、天上天下、闇金ウシジマくん、ギャングース、ゴールデンカムイ、リアル、サンクチュアリ、惡の華、岳、BLUE GIANT、嘘喰い、ワンナウツ、アオアシ、GIANT KILLING、響-小説家になる方法-、プラテネス、神々の山領、双望亭壊すべし、ザ・ファブル、ブルーピリオド、弱虫ペダル、バチバチ、ビースターズ、ハンザスカイ、こどものおもちゃ、潔く柔く、昨日何食べた?、亜獣譚、地獄楽、左利きのエレン、ヴィジランテ等。<br>好きなヤツ思いついた順です。漫画の話は大体通じるし大好きです。</con>
            <con class="text-contents"><b>アニメ：</b>2006~2009年辺りの深夜アニメはほぼ全部見てました。</con>
          </nobtn-Aboutme>
          <nobtn-Aboutme class="lesson nobtn">
            <p>映画・音楽・ゲーム</p>
            <con class="text-contents"><b>映画</b>：『カッコーの巣の上で』『いまを生きる』『チョコレートドーナツ』『ビューティフルマインド』とかちょっと陰鬱なヒューマンドラマが好きです。あとは『パプリカ』を初めとして今敏監督のアニメ映画が全部好きです。</con>
            <con class="text-contents"><b>音楽</b>：Perfume、Kraftwerk、YMO、P-Model、Zazen Boys、星野源、藍坊主、スネオヘアー、People in the box、King gnu、Tempalay、ドミコ、呂布カルマ、MOROHA、不可思議Wonderboy等。</con>
            <con class="text-contents"><b>ゲーム</b>：DQ3~8, FF4~12、聖剣伝説1~3、ロマサガ1~3、マリオRPG、天地創造、バハムートラグーン、ルドラの秘宝、モンスターファーム2、地球防衛軍2、塊魂、ぷよぷよ、太鼓の達人、テイルズウィーバー等。<br>基本的にスーファミのRPGが大好きで、ちらほらRTAもやってました。</con>
          </nobtn-Aboutme>
          <nobtn-Aboutme class="lesson nobtn">
            <p>特技・妙技</p>
             <con class="text-contents"><b>象</b>：車の免許よりも早く象の免許取りました。</con>
             <con class="text-contents"><b>絵画</b>：初恋の娘の真似から始まり、一生の趣味になってました。<a href="https://www.instagram.com/homma_dpp/">Instagram</a>に気に入ったヤツだけ載せてます。</con>
             <con class="text-contents"><b>空手</b>：愚地独歩の影響で高校からいきなり始めてハマり、高三夏にギリギリ全国行ってボコボコにされました。</con>
             <con class="text-contents"><b>野草</b>：大学時代に野草を調理して食費を浮かしてたら結構詳しくなってました。</con>
             <con class="text-contents"><b>治験入院</b>：計七回参加のベテランモルモットです。誕生日を二度施設で迎えてます。</con>
             <con class="text-contents"><b>バーテン</b>：毎晩のようにバイトで酒作って常連とワイワイ飲んでました。</con>
             <con class="text-contents"><b>ポーカー</b>：新卒捨てて一年半、主にポーカーで生きてました。<a href="https://alcohole.hatenadiary.com/entry/2018/03/15/181642">そのときのブログ</a>はかなり面白いです。</con>

          </nobtn-Aboutme>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
nobtn-Aboutme p {
 margin-bottom:10px;
 border-bottom: 1px solid lightgray;
}

nobtn-Aboutme.lesson{
  height: auto;
  border: none;
  box-shadow: none;
  background-color: #f4f4f5;
  width: 33%;
}

nobtn-Aboutme.lesson:active{
  position: relative;
  top:0px;
}

nobtn-Aboutme.lesson:hover{
  background-color:white;
  transition:0.3s;
}

nobtn-Aboutme.lesson con {
  text-align: left;
}

con.text-contents {
  margin: 4px;
  color: gray;
}

.text-contents a {
  color: #6886a8;
  text-decoration: underline;
}
</style>
