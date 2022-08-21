
<template>

  <div class="login__container">
    <AuthenticationHeader />

    <div class="login__description">
      <h1 class="login__description-action">Log in to Your Account</h1>
      <p class="login__description-promotion">Choose from 130,000 events with new additions<br>published every day</p>
    </div>
    <div class="login__input-field">
      <input class="input-field" type="text" placeholder="Username / Email"/>
      <input class="input-field" type="text" placeholder="Password"/>
    </div>
    <div class="advanced-option">
      <p class="option">Forgot password?</p>
    </div>
    <div class="login__submit">
      <button>Log in to Your Account</button>
    </div>
  </div>

</template>


<script lang="ts">

  import AuthenticationHeader from "../../components/account/AuthenticationHeader.vue";

  export default { components: { AuthenticationHeader } };

</script>


<style scoped>

  @import "@/assets/css/variables.css";


  .login__container {
    height: 100vh;
    background: var(--primary);
  }

  .login__description {
    display:flex;
    margin: 0 2em 0 2em;
    flex-direction: column;
    text-align: center;
    margin-top: 4.5rem;
    color: var(--secondary);
  }

  .login__description-action {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0.06em;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .login__description-promotion {
    margin-top: 1.7rem;
    font-size: 16px;
    font-weight: 550;
    letter-spacing: 0.04em;
    color: #727272;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .login__input-field {
    display: flex;
    flex-direction: column;
    margin: 1em 2em 0 2em;
  }

  input::placeholder {
    color: #A0A0A0;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding-left: 1.2rem;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .input-field {
    margin-top: 0.7em;
    height: 3.5rem;
    border-radius: 6px;
    border: none;
    background-color: #303030;
  }

  .login__submit {
    margin: 3.1em 2em 0 2em;
  }

  .login__submit > button {
    height: 3.5rem;
    width: 100%;
    border-radius: 6px;
    background: var(--gradient);
    color: var(--secondary);
    padding-left: 1.2rem;
    text-align: left;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 0.04em;
    opacity: 90%;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .advanced-option {
    color: var(--secondary);
    margin: 0.6em 2em 0 2em;
    text-align: right;
    text-decoration: underline;
  }

</style>