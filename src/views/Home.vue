<template>
  <div class="row" id="home">
    <Sidebar />
    <div class="col offset-1">
      <div class="row">
        <Spacer />
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
  import Spacer from '@/components/Spacer.vue'
  export default {
    name: 'home',
    components: {
      Sidebar,
      AboutMe,
      Skills,
      Spacer
    }
  }
</script>
<style>

</style>