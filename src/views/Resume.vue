<template>
  <div class="row" id="resume">
    <Sidebar />
    <div class="col">
      <h3>Connor Kennedy</h3>
      <h5>About</h5>
      <p>Lorem Ipsum</p>

      <h5>Skills</h5>
      <h5>Work Experience</h5>
      <h5>Education</h5>
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