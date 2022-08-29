
<template>
    
  <div class="header">

    <div class="header_back">
      <fa icon="arrow-left" class="header_icon back-icon" />
    </div>

  </div>

</template>


<script lang="ts">

    export default {

    }

</script>


<style scoped>

@import "@/assets/css/variables.css";


.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 25px;
    font-family: Open Sans;
    background-color: var(--background-primary);
}

.header_back {
    display: none;
}

.header_icon {
    font-size: 2em;
    color: var(--text-primary);
    cursor: pointer;
}

@media (max-width: 767px) {
    .header_back {
        display: flex;
        align-items: center;
    }
}

</style>