
<template>

  <Header />
  <Sidebar />

    <!-- Main Content Of Page. -->
    <router-view />

    <footer class="mt-auto">
      <Footer/>
    </footer>



</template>


<script lang="ts">

  import Sidebar from "./components/Sidebar.vue";

  export default { components: { Sidebar } };

</script>


<style scoped>

</style>