<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="allnavbar">
        <div class="logoPosition">
            <img class="logo" src="../assets/logo.svg" alt="">
        </div>
        <div>
            <nav id="navigationBar">
                <div class="navigationPosition">
                    <RouterLink to="/" class="navLink">Home</RouterLink>
                    <RouterLink to="/Register" class="navLink">Register</RouterLink>
                    <RouterLink to="/Login" class="navLink">Login</RouterLink>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
#allnavbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #2f3556;
}

.logo {
    width: 2vw;
}

#navigationBar{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.navigationPosition {
    display: flex;
    align-items: center;
}

.navLink {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    margin-right: 2rem;
    font-size: 15px;
}

</style>