
<template>

  <div class="page__container">

    <AuthenticationHeader />

    <div class="signup__container">

      <div class="signup__description-block">
        <h1 class="description-block__action">Log in to Your Account</h1>
        <p class="description-block__promotion">Choose from 130,000 events with new additions<br>published every day</p>
      </div>

      <div class="input__container">
        <div class="input__fields">
          <input class="field" type="text" placeholder="Username / Email" />
          <input class="field" type="text" placeholder="Password" />
          <span class="already-member-sm">Already a Member?</span>
          <button class="field input__submit">
            <span class="text">Create Your Account</span>
          </button>
        </div>
        <div class="social__signup">
          <button class="field social__signup-item">Sign up with Google</button>
          <button class="field social__signup-item">Sign up with Facebook</button>
          <button class="field social__signup-item">Sign up with Apple Account</button>
        </div>
      </div>

      <span style="margin-top: 4rem">Already a Member?</span>

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
    letter-spacing: var(--base-letter-spacing);
  }

  .signup__container {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
  }

  .signup__description-block {
    display:flex;
    flex-direction: column;
    text-align: center;
  }

  .description-block__action {
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
    justify-content: center;
  }

  .input__fields {
    display: flex;
    flex-direction: column;
    align-items:center;
  }

  .social__signup {
    display: flex;
    flex-direction: column;
    margin-left: 8rem;
  }

  .field {
    width: 20rem;
    height: 4.3rem;
    margin-bottom: 0.8rem;
    background: var(--background-secondary);
    border-radius: 0.4rem;
    border: none;
    outline: none;
  }

  ::placeholder {
    padding-left: 1.5rem;
    font-size: 17px;
    letter-spacing: 0.04rem;
    color: var(--text-placeholder);
  }

  .already-member-sm {
    display: none;
  }
  
  .input__submit {
    background: var(--base-gradient);
    color: var(--text-primary);
    text-align: start;
    font-size: 18px;
    letter-spacing: var(--base-letter-spacing);
    outline: none;
  }

  .input__submit > .text {
    padding-left: 1.8rem;
  }

  .social__signup-item {
    background: none;
    color: var(--text-primary);
    border: 5px solid;
    border-image: linear-gradient(45deg, purple, orange) 1;
  }


  @media only screen and (max-width: 768px) {
    
    .signup__description-block {
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
      margin-top: 2.7rem;
      margin-left: 2.2rem;
      margin-right: 2.2rem;
    }

    .social__signup {
      display: flex;
      flex-direction: row;
      margin-left: 0;
    }

    .field {
      width: 100%;
    }

    .already-member-sm {
      display: block;
      width: 100%;
      text-align: end;
      font-family: var(--base-font-family);
      letter-spacing: 0.05rem;
      font-size: 17px;
      color: var(--text-helpers);
      font-weight: 400;
      text-decoration: underline;
      text-underline-offset: 0.1rem;
    }

    .input__submit {
      width: 100%;
      margin-top: 3rem;
    }
  }

</style>