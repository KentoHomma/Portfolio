<template>
<!DOCTYPE html>
 <div>
  <div class="top-wrapper">
      <div class="container">
        <h1>Skills</h1>
        <p>12月1日時点での記録です。インフラ&バックエンド側に向かうつもりでしたが、ここ最近はフロントエンドにも興味が沸いちゃって大変です。</p>
        <p></p>
        <div class="btn-wrapper">
        </div>
      </div>
    </div>
    <div class="lesson-wrapper">
      <div class="container">
        <div class="lessons">
          <nobtn-Skills class="lesson">
            <p>Python</p>
             <con class="text-contents">初めてHello Worldした言語です。PyQの未経験コース、webアプリコース、スクレイピングコースを一通りすべてやりました。あとは気が向いたときにAtcoder Begginer Contestの過去問を簡単なほうから順に解いてます。</con>
             <con class="text-contents2">since 2019 9/19~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>Django</p>
             <con class="text-contents">PyQでCRUD操作、API作成、セッションなどの基礎ついて学び、その後ネット上のチュートリアル3つに毛を生やしました。今はスクレイピングと絡めてもっと色々できるアプリを作ろうとしてます。</con>
             <con class="text-contents2">since 2019 10/09~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>HTML5&CSS3</p>
             <con class="text-contents">このポートフォリオの作成にあたって勉強しました。Progateを一通りやってBootstrap4もCheetSheetのサンプルを引っ張って使ったりしました。</con>
             <con class="text-contents2">since 2019 11/22~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>Javascript(ES6)</p>
             <con class="text-contents">このポートフォリオの作成にあたって勉強しました。Progateを一通りやりましたが、まだ全然アウトプットが出来ていませんが興味はあります。</con>
             <con class="text-contents2">since 2019 11/23~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>Vue.js</p>
             <con class="text-contents">このポートフォリオの作成にあたって使いました。カッコつけてVueRouterでSPAを実装しましたが、いまのところ基本機能は全くと言っていいほど使いこなせていないです。</con>
             <con class="text-contents2">since 2019 11/24~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>AWS</p>
             <con class="text-contents">色々記事を読み、VPC, EC2, RDS, S3, Route53, CloudFrontをDjangoのチュートリアルに毛を生やしつつ組み込みました。研修期間中にSolution Architect Associateの取得を考えてます。</con>
             <con class="text-contents2">since 2019 10/24~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>Docker</p>
             <con class="text-contents">入門サイトのチュートリアルを参考に基礎の基礎をなぞりました。そのあとEC2+Django+Nginx+Gunicorn+MySQLの環境をdocker-composeで作ってみましたがまだ実用はしてないです。</con>
             <con class="text-contents2">since 2019 11/6~</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>Git&Github</p>
             <con class="text-contents">status, add, commit, push, pull, cloneなどの基本機能は使えます。複数人での共同開発経験はありません。</con>
             <con class="text-contents2">since 2019 10/18~</con>
          </nobtn-Skills>
           <nobtn-Skills class="lesson">
            <p>English</p>
             <con class="text-contents">大学入学から三年間でTOEIC490⇒955まで伸ばしました。休学中に海外インターン&バイトも経験しましたが洋楽は字幕無しだと雰囲気でしか聞き取れません。</con>
             <con class="text-contents2">since Middleschool</con>
          </nobtn-Skills>
          <nobtn-Skills class="lesson">
            <p>Computer Sience</p>
             <con class="text-contents">『プログラムは何故動くのか』『ネットワークは何故繋がるのか』『Webを支える技術』『出るとこだけ！基本情報技術者テキスト&問題集』読了</con>
             <con class="text-contents2">since Middleschool</con>
          </nobtn-Skills>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
nobtn-Skills p {
 margin-bottom:12px;
 border-bottom: 1px solid lightgray;
}

nobtn-Skills.lesson{
  height: 220px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: none;
  box-shadow: none;
  background-color: #f4f4f5;
}

nobtn-Skills.lesson:active{
  position: relative;
  top:0px;
}

nobtn-Skills.lesson:hover{
  background-color:white;
  transition:0.3s;
}

.text-contents {
  margin: 10px;
  color: gray;
  text-align: left;
}

.text-contents2 {
  color: lightgray;
  position: bottom;
}

</style>
