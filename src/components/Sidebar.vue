<template>
  <div class="col" id="sidebar">
    <div class="col-12" id="spacer"></div>
    <button type="button" @click="routeHome()" class="btn btn-secondary btn-lg btn-block">Home</button>

    <button type="button" @click="routePortfolio()" class="btn btn-secondary btn-lg btn-block">Portfolio</button>
    <button type="button" @click="routeResume()" class="btn btn-secondary btn-lg btn-block">Resume</button>
    <br />
    <h6>Contact Info:</h6>
    <p class="contact-info">kennedyconnor02@gmail.com</p>
    <p class="contact-info">https://github.com/kennedyconnor</p>
    <p class="contact-info">https://www.linkedin.com/in/connor-kennedy-89130b145/</p>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'sidebar',
    components: {

    },
    methods: {
      routeHome() {
        this.$router.push({ name: "home" })
      },
      routePortfolio() {
        this.$router.push({ name: "portfolio" })
      },
      routeResume() {
        this.$router.push({ name: "resume" })
      }
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

  .contact-info {
    font-size: 10pt;
  }

  #spacer {
    height: 8vh;
  }
</style>