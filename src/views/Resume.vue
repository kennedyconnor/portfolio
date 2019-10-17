<template>
  <div class="row" id="resume">
    <Sidebar />
    <div class="col">
      <!-- <iframe width='1000' height='800' src="/public/favicon.ico" frameborder='0' allowfullscreen></iframe> -->
      <object width="400" height="400" data="../assets/ConnorKennedyResume.pdf" type="application/pdf"></object>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Sidebar from '@/components/Sidebar.vue'
  export default {
    name: 'resume',
    components: {
      Sidebar
    }
  }
</script>