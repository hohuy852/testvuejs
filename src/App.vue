<template>
  <div id="app" class="font-body overflow-x-hidden">
    <Header />
    <hero />
    <introduction />
    <bes />
    <band-story />
    <happened-issue/>
    <what-happened/>
    <Footer />
    <!-- <aside
      class="
        transform
        top-0
        left-0
        w-64
        bg-white
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
      "
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      ...
    </aside> -->
  </div>
</template>

<script>
import BandStory from "./components/BandStory.vue";
import Bes from "./components/Bes.vue";
import Footer from "./components/Footer.vue";
import HappenedIssue from './components/HappenedIssue.vue';
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Introduction from "./components/Introduction.vue";
import WhatHappened from './components/WhatHappened.vue';

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Introduction,
    Bes,
    BandStory,
    Footer,
    HappenedIssue,
    WhatHappened,
  },
  
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
};
</script>

<style>
</style>
