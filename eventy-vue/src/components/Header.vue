
<template>

  <div class="header">

    <div class="header__menu">
      <fa icon="bars" class="header__icons" />
      <h2 style="color: white; margin-left: 20px;">Evently.</h2>
    </div>

    <div class="header__input">
      <input class="hidden-mobile" placeholder="Search for anything" type="text" />
      <fa icon="search" class="header__icons" />
    </div>

    <div class="header__account">
      <button class="header__login-button" >Log In</button>
    </div>

  </div>

</template>


<script lang="ts">

  export default {
    
  };

</script>


<style scoped>

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #161616;
    height: 56px;
    
  }

  .header__menu {
    display: flex;
    align-items: center;
  }

  .header__input {
    display: flex;
    align-items: center;
    width: 40%;

  }

  .header__account {
    display: flex;
    align-items: center;
  }

  .header__icons {
    color: #FFFFFF;
    font-size: 1.5em;
  }

  .header__input > input {
    flex: 1;
  }

  @media (max-width: 767px) {
  .hidden-mobile {
    display: none;
  
      }
  }

  .header__login-button {
    display: inline-block;
    height: 2.1rem;
    width: 7rem;
    border: none;
    outline: none;
    position: relative;
    border-radius: 6px;
    background: linear-gradient(to right, #F9984D 15%, #F32C31, #983C95);
    cursor: pointer;
  }

  .header__login-button::before {
    content: "Log In";
    top: 1px;
    bottom: 1px;
    right: 1px;
    left: 1px;
    position: absolute;
    border-radius: 6px;
    background-color: #161616;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: white;


  }

</style>