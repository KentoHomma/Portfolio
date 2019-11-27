<template>
<!DOCTYPE html>
<html>
  <body>
    <div class="top-wrapper">
      <div class="container">
        <h1>KentoHomma's PortofolioSite</h1>
        <p></p>
        <p></p>
        <div class="btn-wrapper">
          <a href="https://github.com/KentoHomma" class="btn github"><span class="fa fa-github"></span></a>
          <a href="https://www.facebook.com/kento.homma" class="btn facebook"><span class="fa fa-facebook"></span></a>
          <a href="https://www.instagram.com/homma_dpp/" class="btn instagram"><span class="fa fa-instagram"></span></a>
        </div>
      </div>
    </div>
    <div class="lesson-wrapper">
      <div class="container">
        <div class="lessons">
          <router-link to='/Aboutme' class="lesson">
            <p>AboutMe</p>
            <p class="text-contents">自己開示が信頼関係を築くための第一歩と聞いたので赤裸々に書いた自己紹介です。共通項があったり気になったりしたら反応を、あわよくばご飯等のお誘い頂けると嬉しいです。</p>
          </router-link>
          <router-link to='/Skills' class="lesson">
            <p>Skills</p>
            <p class="text-contents">2019年9月19日に初めてHello Worldしてから今まで触れてきたモノのまとめです。方針が全く定まっていないので気の向くままに色々なモノに手を出しまくっています。</p>
          </router-link>
          <router-link to='/Works' class="lesson">
            <p>Works</p>
            <p class="text-contents">学習サイトでの演習課題やチュートリアルに毛を生やしたモノを除いたら真っ白になって驚きました。自戒として掲載します。</p>
          </router-link>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </body>
</html>
</template>

<style>
</style>
