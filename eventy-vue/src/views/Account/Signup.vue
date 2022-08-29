
<template>

  <div class="page__container">

    <AuthenticationHeader />

    <div class="signup__container">

      <div class="signup__description-block">
        <h1 class="description-block__action">Sign up For Evently</h1>
        <p class="description-block__promotion">Choose from 130,000 events with new additions<br>published every day</p>
      </div>

      <div class="input__container">
        <div class="input__fields">
          <input class="field" type="text" />
          <input class="field" type="text" />
          <button>Create Your Account</button>
        </div>
        <div class="social__signup">
          <button>Sign up with Google</button>
          <button>Sign up with Facebook</button>
          <button>Sign up with Apple Account</button>
        </div>
      </div>

    </div>

    <Footer />

  </div>

</template>


<script lang="ts">
  import AuthenticationHeader from "../../components/account/AuthenticationHeader.vue";

  export default { components: { AuthenticationHeader } };

</script>


<style scoped>

  .page__container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--background-primary);
    color: var(--text-primary);
    font-family: var(--base-font-family);
  }

  .signup__container {
    flex: 1 1 auto;
  }

  .signup__description-block {
    display:flex;
    flex-direction: column;
    margin-top: 4.5rem;
    text-align: center;
    color: var(--text-primary);
  }

  .description-block__action {
    margin-top: 1.1rem;
    font-size: 36px;
    letter-spacing: 0.11rem;
  }

  .description-block__promotion {
    margin-top: 0.6rem;
    font-size: 19px;
    color: var(--text-tertiary);
  }

  .input__container {
    display: flex;
    flex-direction: row;
  }

  .input__fields {
    display: flex;
    flex-direction: column;
  }

  .social__signup {
      display: flex;
      flex-direction: column;
    }

  @media only screen and (max-width: 768px) {
    
    .signup__description-block {
      margin-top: 5.2rem;
      color: var(--text-primary);
    }

    .description-block__promotion {
      margin-top: 2.7rem;
      letter-spacing: 0.04em;
      color: var(--text-tertiary);
      font-size: 17px;
      font-weight: 500;
    }

    .input__container {
      flex-direction: column;
    }

    .social__signup {
      display: flex;
      flex-direction: row;
    }
  }

</style>