<template>
  <div class="row" id="home">
    <Sidebar />
    <div class="col-8 offset-1">
      <div class="row">
        <AboutMe />
      </div>
      <div class="row">
        <Skills />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Sidebar from '@/components/Sidebar.vue'
  import AboutMe from '@/components/AboutMe.vue'
  import Skills from '@/components/Skills.vue'
  export default {
    name: 'home',
    components: {
      Sidebar,
      AboutMe,
      Skills
    }
  }
</script>
<style>

</style>