
<template>

  <div class="row home__event-item text-center">
    <div class="col-lg-3 home__event-item-img my-auto">
      <img src="https://i.pinimg.com/originals/b3/2a/4a/b32a4a5fe33a7cc0ccb2efa5abe46357.jpg" alt="poster of the event" />
    </div>
    <div class="col-lg-5 home__event-item-info my-auto">
      <h4>12 July 2022</h4>
      <h3>Electronic Sound</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim dignissim tincidunt. Praesent a leo cursus, ultrices metus non, suscipit ligula.</p>
      <hr/>
    </div>
    <div class="col-lg-4 home__event-item-location my-auto">
      <h4>Raja 4D, Tallinn, Estonia</h4>
    </div>
  </div>

</template>


<script lang="ts">

  export default {};

</script>


<style scoped>

  .home__event-item {
    margin: 2.2rem;
    margin-top: 3.4rem;
    border-radius: 18px;
    background-color: #303030;
  }

  .home__event-item-img {
    height: 11.5rem;
    overflow: hidden;
  }

  .home__event-item-img > img {
    width: 100%;
  }

  .home__event-item-info {
    height: 9.4rem;
    color: #FFFFFF;
    text-align: left;
  }

  .home__event-item-location {
    height: 2.5rem;
    color: #FFFFFF;
    text-align: left;
  }

</style>