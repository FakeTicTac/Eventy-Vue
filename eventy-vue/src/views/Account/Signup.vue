
<template>

  <div class="page-container">

    <AuthenticationHeader />

    <div class="signup-container">

      <div class="description-block">
        <h1 class="action">Sign up For Evently</h1>
        <p class="promotion">Choose from 130,000 events with new additions<br>published every day</p>
      </div>

      <div class="input-block">

        <div class="fields">
          <input class="field" type="text" placeholder="Username / Email" />
          <input class="field" type="text" placeholder="Password" />
          <span class="already-member-sm">Already a Member?</span>
          <button class="field submit">
            <span class="submit-text">Create Your Account</span>
            <fa icon="arrow-right" class="right-arrow" />
          </button>
        </div>

        <div class="strike">
          <span>or continue with</span>
        </div>

        <div class="social">
          <button class="field social-item">
            <fa icon="fa-brands fa-google" class="brand-logo" />
            <span class="description">Sign up with Google</span>
          </button>
          <button class="field social-item">
            <fa icon="fa-brands fa-facebook-f" class="brand-logo" />
            <span class="description">Sign up with Facebook</span>
          </button>
          <button class="field social-item">
            <fa icon="fa-brands fa-apple" class="brand-logo" />
            <span class="description">Sign up with Apple Account</span>
          </button>
        </div>
  
      </div>

      <span class="already-member-lg">Already a Member?</span>

    </div>

    <Footer />

  </div>

</template>


<script lang="ts">
  
  import AuthenticationHeader from "../../components/account/AuthenticationHeader.vue";

  export default { components: { AuthenticationHeader } };

</script>


<style scoped>

  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--background-primary);
    color: var(--text-primary);
    font-family: var(--base-font-family);
    letter-spacing: var(--base-letter-spacing);
  }

  .signup-container {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
  }

  .signup-container > .description-block {
    display:flex;
    flex-direction: column;
    text-align: center;
  }

  .description-block > .action {
    font-size: 36px;
    letter-spacing: 0.11rem;
  }

  .description-block > .promotion {
    margin-top: 0.6rem;
    font-size: 19px;
    color: var(--text-tertiary);
  }

  .signup-container > .input-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .input-block > .fields {
    display: flex;
    flex-direction: column;
    align-items:center;
  }

  .fields > .field {
    width: 20rem;
    height: 4.3rem;
    margin-bottom: 0.8rem;
    background: var(--background-secondary);
    border-radius: 0.4rem;
    border: none;
    outline: none;
  }

  .field::placeholder {
    padding-left: 1.5rem;
    font-size: 17px;
    letter-spacing: 0.04rem;
    color: var(--text-placeholder);
  }

  .fields > .already-member-sm {
    display: none;
  }

  .fields > .submit {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--base-gradient);
    color: var(--text-primary);
    text-align: start;
    font-size: 18px;
    letter-spacing: var(--base-letter-spacing);
    outline: none;
  }

  .submit > .submit-text {
    flex-grow: 1;
  }

  .input-block > .social {
    display: flex;
    flex-direction: column;
    margin-left: 8rem;
  }

  .social > .social-item {
    margin: 0 1.2rem 0 1.2rem;
    background: none;
    color: var(--text-primary);
    border: 1px solid;
    border-image: linear-gradient(45deg, purple, orange) 1;
  }

  .already-member-lg {
    display: block;
  }

  .input-block > .strike {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    
    .signup-container {
      align-items: unset;
      justify-content: unset;
    }

    .description-block > .action {
      margin-top: 4rem;
      font-size: 28px;
      letter-spacing: 0.11rem;
    }

    .description-block > .promotion {
      margin-top: 1.9rem;
      color: var(--text-tertiary);
      font-size: 13px;
      font-weight: nor;
      letter-spacing: 0.04em;
    }

    .signup-container > .input-block {
      flex-direction: column;
      width: 100%;
    }

    .input-block > .fields {
      margin: 2.4rem 2.2rem 0 2.2rem;
    }

    .fields > .field {
      width: 100%;
      height: 3.4rem;
    }

    .field::placeholder {
      padding-left: 1.3rem;
      color: var(--text-placeholder);
      font-size: 13px;
      letter-spacing: 0.04rem;
    }

    .fields > .already-member-sm {
      display: block;
      width: 100%;
      text-align: end;
      color: var(--text-helpers);
      font-family: var(--base-font-family);
      font-size: 13px;
      font-weight: lighter;
      letter-spacing: 0.05rem;
      text-decoration: underline;
    }

    .fields > .submit {
      width: 100%;
      margin-top: 2.7rem;
    }

    .submit > .submit-text {
      margin-left: 1.3rem;
      font-size: 14px;
      font-weight: lighter;
      letter-spacing: 0.06rem;
    }

    .submit > .right-arrow {
      margin-right: 1.3rem;
    }

    .input-block > .strike {
      display: block;
      margin: 2rem 2.8rem 0 2.8rem;
      text-align: center;
      overflow: hidden;
      white-space: nowrap; 
    }

    .strike > span {
      position: relative;
      display: inline-block;
      font-size: 13px;
      font-weight: lighter;
      color: var(--text-helpers);
    }

    .strike > span:before,
    .strike > span:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 9999px;
        height: 1px;
        background: var(--text-helpers);
    }

    .strike > span:before {
        right: 100%;
        margin-right: 1.2rem;
    }

    .strike > span:after {
      left: 100%;
      margin-left: 1.2rem;
    }

    .input-block > .social {
      display: flex;
      flex-direction: row;
      margin: 2.2rem 0 0 0; 
      justify-content: center;
    }

    .social-item > .description {
      display: none;
    }

    .social-item > .brand-logo {
      padding: 0.6rem;
      font-size: 25px;
    }

    .already-member-lg {
      display: none;
    }
  }

</style>