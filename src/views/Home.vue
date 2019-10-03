<template>
  <div class="row" id="home">
    <div class="col-3">
      <Sidebar />
    </div>

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
<style>

</style>