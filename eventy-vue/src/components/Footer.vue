
<template>

  <div class="footer__container">
    <div class="footer__menu-items">
      <span>Privacy Policy</span>
      <hr class="footer__menu-delimiter" />
    </div>
    <div class="footer__copyright">
      <span>2022 Evently. All rights reserved</span>
    </div>
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
    background: var(--background-primary);
    color: var(--text-secondary);
    font-family: var(--base-font-family);
    font-size: var(--base-font-size);
    letter-spacing: var(--base-letter-spacing);
  }

  .footer__menu-delimiter {
    display: none;
  }


  @media(min-width: 768px) {
    .footer__copyright {
      font-weight: 550;
      width: 50%;
      text-align: right;
      padding-top: 2rem;
      padding-right: 10rem;
    }

    .footer__menu-items {
      height: 5.5rem;
      font-weight: 550;
      width: 50%;
      padding-top: 2rem;
      padding-left: 10rem;
    }
  }

  @media (max-width: 767px) {
  
    .footer__container {
      flex-direction: column;
      height: 8.5rem;
      text-align: center;
    }

    .footer__menu-items {
      height: 50%;
      padding-top: 1rem;
      text-decoration: underline;
      text-underline-offset: 0.1rem;
      font-weight: 550;
    }

    .footer__menu-delimiter {
      display: flex;
    }

    .footer__copyright {
      height: 100%;
      padding-top: 0.3rem;
      font-weight: 550;
    }
  }


</style>