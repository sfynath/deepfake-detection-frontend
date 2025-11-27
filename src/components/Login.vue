<template>
    <div id="allLogin">
        <div>
            <h1>Login Page</h1>
            <div>
                <div>
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
}

#loginForm {
    display: flex;
    flex-direction: column;
}

</style>