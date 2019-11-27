<template>
<div>
<!-- Button trigger modal -->
<div class="lesson works" data-toggle="modal" data-target="#exampleModalCentered">
 <p>Portfolio Site</p>
 <con class="text-contents">「スマートに自己紹介して皆さんと打ち解けたい」と思い超急速で本当に形だけ作ったver.1です。内容・技術共に定期的に更新していきます。</con>
 <p class="text-contents">使用言語等：HTML&CSS, Bootstrap, Vue.js</p>
</div>

<!-- Modal -->
<div class="modal" id="exampleModalCentered" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenteredLabel">Portfolio Site</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src="https://kentohomma-first-bucket.s3-ap-northeast-1.amazonaws.com/portfolio.jpg">
        <con class="text-contents">VueRouter以外vueの強みを全く活かせていないtemplate直接書き込み静的ゴリ押しポートフォリオサイト。javascriptの練習がてらこれから基本機能を少しずつ覚えて実装していこうと思います。</con>
   　　  <p class="text-contents">使用言語等：HTML&CSS, Bootstrap, Vue.js</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style>
.modal-content{
   max-width: 1000vw;
    max-height: 1000vh;
}
.modal-body img {
    height: 50%;
    width: 100%;
    margin-bottom:20px;
}
</style>
