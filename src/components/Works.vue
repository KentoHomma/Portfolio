<template>
  <!DOCTYPE html>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <h1>Works</h1>
        <p>12月1日時点での記録です。スカスカなのでこれから埋めていきます。</p>
        <div class="btn-wrapper">
        </div>
      </div>
    </div>
    <div class="lesson-wrapper">
      <div class="container">
        <div class="lessons">
          <Modal/>
          <stillmaking class="lesson works">
            <p>Pokerspot Search(作成中)</p>
            <con class="text-contents">近くのポーカースポットの評価を持ってきてピンで色分けして一発で表示できたり、国内/海外トーナメントの情報を全部綺麗にまとめて表示できたりする予定です。</con>
            <p class="text-contents">使用言語等：HTML&CSS, Javascript, Bootstrap, Django, Beautifulsoup</p>
          </stillmaking>
          <stillmaking class="lesson works">
            <p>つくってみたい</p>
             <con class="text-contents">〇働く女とヒモ男のマッチングアプリ</con>
             <con class="text-contents">〇趣味の合いそうなバンドやアーティストのカッコいいサイト制作</con>
             <con class="text-contents">〇相手データや自分の収支などを記録できるライブポーカースマホアプリ</con>
             <con class="text-contents">〇どんどん溶けてく期待値を可視化する色んなギャンブルシミュレータ</con>
          </stillmaking>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'App',
  components: {
    Modal
  }
}
</script>

<style>

.works.lesson {
  height:235px;
}

.works p{
  text-align: center;
}

con.text-contents{
  margin: 0px;
  color: gray;
  text-align: left;
}

stillmaking.lesson {
  border: 1px solid lightgray;
  box-shadow: 0 3px darkred;
  background-color: #f4f4f5;
}

stillmaking.lesson:active {
  position: relative;
  top: 0px;
  box-shadow: 0 3px darkred;
}

stillmaking.lesson:hover {
  background-color: #f4f4f5;
}

</style>
