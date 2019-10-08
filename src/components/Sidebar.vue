<template>
  <div class="col" id="sidebar">
    <br>
    <div class="alert alert-light" role="alert">
      Home
    </div>

    <div class="alert alert-light" role="alert">
      Portfolio
    </div>

    <div class="alert alert-light" role="alert">
      Resume
    </div>
    <h6>Contact Info:</h6>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'sidebar',
    components: {

    }
  }
</script>
<style>
  #sidebar {
    height: 100vh;
    max-width: 18rem;
    min-width: 18rem;
    background-color: rgb(18, 110, 75);
    color: white;
  }
</style>