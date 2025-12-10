<script setup>
    import GoogleSignIn from './GoogleSignin.vue';
</script>

<template>
    <div id="allLogin">
        <div class="login">
            <h1>Login Page</h1>
            <div>
                <div>
                    <GoogleSignIn/>
                    <form id="loginForm">
                        <div>
                            <label for="Username">Username: </label>
                            <input type="text">
                        </div>
                        <div>
                            <label for="Password">Password: </label>
                            <input type="password">
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#allLogin {
    padding: 7rem 5rem 0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login {
    border-style: outset;
    border-top: #d9d9d95b;
    border-left: #d9d9d95b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 60px;
    width: 50%;
    padding: 2rem;
}

#loginForm {
    display: flex;
    flex-direction: column;
}

h1{
    font-weight: bold;
    font-size: 40px;
    /*position: absolute;*/
    /* top: -10px; */
    color: #EFDAFF;
    text-align: center;
}

</style>