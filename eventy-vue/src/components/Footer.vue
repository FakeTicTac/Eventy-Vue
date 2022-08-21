
<template>

  <div class="footer__container">
    <div class="footer__menu-items">
      <h6>Privacy Policy</h6>
    </div>
    <span class="footer__copyright">2022 Evently. All rights reserved</span>
  </div>

</template>


<script lang="ts">

  export default {};

</script>


<style scoped>

  @import "@/assets/css/variables.css";

  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: var(--primary);
    color: var(--secondary);
  }

  @media (max-width: 767px) {
  
    .footer__container {
      flex-direction: column;
    }
  }


</style>