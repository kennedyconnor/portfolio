<template>
  <div class="row" id="portfolio">
    <Sidebar />
    <div class="col">
      <div class="row">
        <Spacer />
        <Projects />
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src

  import Sidebar from '@/components/Sidebar.vue'
  import Projects from '@/components/Projects.vue'
  import Spacer from '@/components/Spacer.vue'

  export default {
    name: 'home',
    components: {
      Sidebar,
      Projects,
      Spacer
    }
  }
</script>