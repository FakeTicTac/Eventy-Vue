
<template>

  <div class="footer-container">
    <div class="menu-items">
      <span>Privacy Policy</span>
      <hr class="delimiter" />
    </div>
    <div class="copyright">
      <span>2022 Evently. All rights reserved</span>
    </div>
  </div>

</template>


<script lang="ts">

  export default {};

</script>


<style scoped>

  @import "@/assets/css/variables.css";

  .footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: var(--background-primary);
    color: var(--text-secondary);
    font-family: var(--base-font-family);
    font-size: var(--base-font-size);
    letter-spacing: var(--base-letter-spacing);
  }

  .delimiter {
    display: none;
  }

  @media (min-width: 768px) {

    .menu-items {
      height: 5.5rem;
      font-weight: normal;
      width: 50%;
      padding-top: 2rem;
      padding-left: 10rem;
    }

    .copyright {
      font-weight: normal;
      width: 50%;
      text-align: right;
      padding-top: 2rem;
      padding-right: 10rem;
    }
  }

  @media (max-width: 767px) {
  
    .footer-container {
      flex-direction: column;
      margin-top: 2rem;
      font-size: 13px;
      text-align: center;
    }

    .menu-items {
      padding-top: 1rem;
      text-decoration: underline;
      text-underline-offset: 0.1rem;
      font-weight: normal;
    }

    .delimiter {
      display: flex;
    }

    .copyright {
      font-weight: normal;
      margin-bottom: 1.3rem;
    }
  }

</style>