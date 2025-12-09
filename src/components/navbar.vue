<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="allnavbar">
        <div class="logoPosition">
            <img class="logo" src="../assets/logo.svg" alt="">
        </div>
        <div id="blockNavbar">
            <nav id="navigationBar">
                <div class="navigationPosition">
                    <RouterLink v-if="$route.fullPath !== '/'" to="/" class="navLink">Home</RouterLink>
                    <a class="navLink" v-else href="#home">Home</a>
                    <RouterLink to="/Upload" class="navLink">Upload</RouterLink>
                    <RouterLink v-if="$route.fullPath !== '/'" to="/#allStudies" class="navLink">About</RouterLink>
                    <a class="navLink" v-else href="#allStudies">About</a>
                    <RouterLink v-if="$route.fullPath !== '/'" to="/#Contact" class="navLink">Contact Us</RouterLink>
                    <a class="navLink" v-else href="#Contact">Contact Us</a>    
                </div>
            </nav>
            <div class="signin">
                <nav>
                    <RouterLink to="/Login" class="navLink" style="color: #ffffff;">Login</RouterLink>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
#allnavbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* background-color: #2f3556; */
}

.logo {
    width: 2vw;
    position: absolute;
    left: 3rem;
    top: 2em;
}

#navigationBar{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.navigationPosition {
    max-width: 100%;
    background-color: #D9D9D9;
    padding: 0.8rem 3.5rem 0.8rem 3.5rem;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    gap: 38px;
    box-shadow: 0em 0em 6em rgb(226, 153, 255);
}

.navLink {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    gap: 10px;
    font-size: 15px;
}

/* #blockNavbar {
    width: 30%;
    background-color: #6c427a;
    padding: 0.8rem 0 0.8rem 2rem;
    border-radius: 60px;
    display: flex;
    justify-content: center;
} */

.signin {
    width: 2vw;
    position: absolute;
    right: 3rem;
    top: 2em;
    color: #ffffff;
}

</style>