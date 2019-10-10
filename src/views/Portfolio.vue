<template>
  <div class="row" id="portfolio">
    <Sidebar />
    <h1>Bortfiolio</h1>
  </div>
</template>
<script>
  // @ is an alias to /src

  import Sidebar from '@/components/Sidebar.vue'
  export default {
    name: 'home',
    components: {
      Sidebar,
    }
  }
</script>