<template>
  <div class="container-fluid" id="app">

    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Georgia, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    /* background-color: rgb(56, 56, 56) */
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: black;
  }

  #nav a.router-link-exact-active {
    color: #236b4a;
  }
</style>