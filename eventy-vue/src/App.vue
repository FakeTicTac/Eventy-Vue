
<template>

  <div class="container-fluid d-flex flex-column min-vh-100">
    <header>
      <Header/>
    </header>

    <!-- Main Content Of Page. -->
    <div class="container-fluid flex-fill d-flex align-items-center">
      <router-view />
    </div>

    <footer class="mt-auto">
      <Footer/>
    </footer>
  </div>
</template>


<script lang="ts">

  export default {};

</script>


<style scoped>

</style>