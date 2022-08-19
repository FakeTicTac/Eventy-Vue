
<template>

    <div class="sidebar">
        <ul class="nav-container">
            <li class="nav-item">
                <fa icon="home" />
                <span class="link-text">Home</span>
            </li>
            <li class="nav-item">
                <fa icon="random" />
                <span class="link-text">Random</span>
            </li>
            <li class="nav-item">
                <fa icon="atlas" />
                <span class="link-text">My Events</span>
            </li>
        </ul>
    </div>

</template>


<script lang="ts">

    export default {

    }

</script>


<style scoped>

    .sidebar {
        width: 3.8rem;
        height: 100vh;
        position: fixed;
        background-color: #161616;
        border-right: 1px solid #525252;
        transition: width 200ms ease;
    }

    .nav-container {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-item {
        color: #FFFFFF;
        font-size: 25px;
        margin-top: 0.9rem;
        display: flex;
        align-items: center;
        height: 5rem;
        text-decoration: none;
    }

    .link-text {
        display: none;
        color: #FFFFFF;
        font-size: 16px;
    }

    .sidebar:hover {
        width: 15rem;

    }

    .sidebar:hover .link-text {
        display: flex;
        color: #FFFFFF;
        margin-left: 10px;
    }

</style>