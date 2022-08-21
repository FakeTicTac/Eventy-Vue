
<template>

  <div class="app-container">

  </div>

<router-view />

</template>


<script lang="ts">

  import Header from './components/Header.vue';
  import AuthenticationHeader from './components/account/AuthenticationHeader.vue';

  import Footer from './components/Footer.vue';

  export default { 

    name: "default_layout",

    components: {
      Header,
      AuthenticationHeader,
      Footer,
    },
    
    computed: {

      headerComputation() {

      }
    },

  };

</script>


<style scoped>

</style>