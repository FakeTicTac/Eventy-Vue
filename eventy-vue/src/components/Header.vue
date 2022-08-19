
<template>

  <div class="header">

    <div class="header_left">
      <fa v-on:click="showMenu()" icon="bars" class="header_icon expand-menu-icon" />
      <span class="logo">Evently.</span>
    </div>

    <div class="header_input">
      <input placeholder="Search for events" type="text" />
      <fa v-on:click="pressed()" icon="search" class="header_icon search-icon" />
    </div>

    <div class="header_right">
      <fa v-on:click="pressed()" icon="search" class="header_icon search-icon search-icon-sm" />
      <button v-on:click="$router.push({ name: 'login' })" data-attr="Log In" class="log-in-button" ></button>
    </div>

  </div>

</template>


<script lang="ts">

  export default {
    
      data() {
        return {
          item: false,
        }

      },

      methods : {

        showMenu() {
          
        }
      }
  };
 
</script>


<style scoped>

  @import "@/assets/css/variables.css";

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 25px;
    background-color: #161616;
    color: var(--gradient);
    border-bottom: 1px solid #525252;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header_left {
    display: flex;
    align-items: center;
  }

  .header_icon  {
    font-size: 1.5em;
    color: #FFFFFF;
    cursor: pointer;
  }

  .logo {
    user-select: none;
    font-size: 1.3em;
    font-weight: 440;
    margin-left: 1.3em;
    letter-spacing: 0.09em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .header_input {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.1em;
    width: 40%;
  }

  .header_input > input {
    flex: 1;
    height: 2.1em;
    border: 1.5px solid  transparent;
    border-radius: 8px;
    background-image: linear-gradient(#161616, #161616), linear-gradient(to right, #F9984D 15%, #F32C31, #983C95);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    color: #FFFFFF;
  }

  .header_input > input::placeholder {
    color: #FFFFFF;
    padding-left: 10px;
  }

  .header_input > input::before {
    flex: 1;
    content: "";
    height: 2.1em;
    position: absolute;
    top: 1.5px;
    bottom: 1.5px;
    right: 1.5px;
    left: 1.5px;
    border-radius: 6px;
    background-color: #161616;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media (max-width: 767px) {
    .header_input {
      display: none;
    }
  }

  .search-icon {
    height: 1.1em;
    margin-left: 20px;
  }

  @media (max-width: 767px) {
    .search-icon-sm {
      height: 1.1em;
      margin-right: 20px;
    }
  }

  @media (min-width: 767px) {
    .search-icon-sm {
      display: none;
    }
  }

  .header_right {
    display: flex;
    align-items: center;
  }

  .log-in-button {
    position: relative;
    height: 2.1rem;
    width: 7rem;
    border: none;
    outline: none;
    border-radius: 6px;
    background: linear-gradient(to right, #F9984D 15%, #F32C31, #983C95);
    cursor: pointer;
  }

  
  .log-in-button:hover {
    position: relative;
    height: 2.1rem;
    width: 7rem;
    border: none;
    outline: none;
    border-radius: 6px;
    background: linear-gradient(to right, #F9984D 15%, #F32C31, #983C95);
    cursor: pointer;
  }

  .log-in-button::before {
    position: absolute;
    top: 1.5px;
    bottom: 1.5px;
    right: 1.5px;
    left: 1.5px;
    border-radius: 6px;
    background-color: #161616;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 600;
    content: "";
  }

  .log-in-button:hover::before {
    position: absolute;
    top: 1.5px;
    bottom: 1.5px;
    right: 1.5px;
    left: 1.5px;
    border-radius: 6px;
    background: linear-gradient(to right, #F9984D 15%, #F32C31, #983C95);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 600;
    content: "";
  }

  .log-in-button::after {
    position: absolute;
    height: 2.1rem;
    width: 7rem;
    font-size: 1.2em;
    font-weight: 700;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-image: linear-gradient(to right, #F9984D 15%, #F32C31, #983C95);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    content: attr(data-attr);
  }

  .log-in-button:hover::after {
    position: absolute;
    height: 2.1rem;
    width: 7rem;
    font-size: 1.2em;
    font-weight: 700;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    color: #161616;
    content: attr(data-attr);
  }

</style>