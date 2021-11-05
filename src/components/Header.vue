<template>
  <header class="bg-black">
    <div class="flex py-7 mx-5 lg:mx-24">
      <a href="" class="flex items-center">
        <img src="@/assets/logo.svg" alt="" />
      </a>
      <nav class="ml-auto inset-0 hidden fixed z-50 bg-white xl:bg-transparent xl:relative px-4 xl:block" ref="navBar" id="main-menu">
        <button class="fixed right-0 top-8 xl:hidden" @click="toggleClose" id="close-btn">
           <img src="@/assets/close.svg" alt="">
        </button>
        <ul class="flex flex-col xl:flex-row gap-x-76 font-normal uppercase text-black gap-y-4 pt-8 xl:pt-0 xl:text-white text-header" ref="nav">
          <li><a href="#">Introduction</a></li>
          <li><a href="#">solution</a></li>
          <li><a href="#">Rate plan</a></li>
          <li><a href="#">|</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Apply for free use</a></li>
        </ul>
      </nav>
      <button class="flex items-center ml-auto xl:hidden" id="open-btn" @click="toggleOpen">
        <img src="@/assets/menu.svg" alt="">
      </button>
    </div>
  </header>
</template>

<script>
export default {

  methods:{
    toggleOpen(){
      let el = document.getElementById('main-menu')
      let closeBtn = document.getElementById('close-btn')
      el.classList.add('inset-0')
      el.classList.add('fixed')
       el.classList.remove('hidden')
       closeBtn.classList.remove('hidden')
      //let btn_el = document.getElementById('open-btn')

    },
    toggleClose(){
      let el = document.getElementById('main-menu')
      let closeBtn = document.getElementById('close-btn')
      el.classList.remove('inset-0')
      el.classList.remove('fixed')
       el.classList.add('hidden')
      closeBtn.classList.toggle('hidden')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
