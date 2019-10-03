<template>
  <div class="row" id="home">
    <div class="col-3">
      <Sidebar />
    </div>
    <div class="col-9">
      <AboutMe />
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