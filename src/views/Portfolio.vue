<template>
  <div class="row" id="portfolio">
    <Sidebar />
    <Projects />
  </div>
</template>
<script>
  // @ is an alias to /src

  import Sidebar from '@/components/Sidebar.vue'
  import Projects from '@/components/Projects.vue'

  export default {
    name: 'home',
    components: {
      Sidebar,
      Projects
    }
  }
</script>