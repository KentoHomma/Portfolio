<template>
<!DOCTYPE html>
<header id='header'>
 <div class="container">
  <div class="dropdown menu-icon">
   <button class="dropdown-toggle"
    type="button" id="dropdownMenu1" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
   </button>
    <div class="dropdown-menu " aria-labelledby="dropdownMenu1">
     <router-link to='/' class="dropdown-item">Top</router-link>
     <router-link to='/Aboutme' class="dropdown-item">AboutMe</router-link>
     <router-link to='/Skills' class="dropdown-item">Skills</router-link>
     <router-link to='/Works' class="dropdown-item">Works</router-link>
    </div>
 </div>
 <!--シンプル追及により思い切って全部ボタンに変更
  <div class="header-links">
    <router-link to="/">Top</router-link>
    <router-link to="/Aboutme">About-me</router-link>
    <router-link to="/Skills">Skills</router-link>
    <router-link to="/Works">Works</router-link>
  </div>
  -->
 </div>
</header>
</template>

<style>
</style>
