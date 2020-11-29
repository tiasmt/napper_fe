<template>
  <div id="app">
    <router-view>
    <home></home>
   </router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import home from "@/views/Home.vue";

export default {
  components: {
    home,
  },
};
</script>


<style>
html {
  background: rgba(0, 0, 0, 0.95);
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

body {
  margin: 0px;
}

@media (min-width: 1025px) and (max-width: 1280px) {
}
/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
}
/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}
/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/
@media (min-width: 481px) and (max-width: 767px) {
}
/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
}
</style>
