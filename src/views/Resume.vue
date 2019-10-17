<template>
  <div class="row" id="resume">
    <Sidebar />
    <div class="col">
      <embed src="../assets/ConnorKennedyResume.pdf" type="">
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