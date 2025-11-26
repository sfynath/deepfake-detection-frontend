<template>
    <div class="allFeedback">
        <div class="feedbackSection">
            <h1>Have feedback?</h1>
            <h2>Let us know!</h2>
    
            <form action="">
                <input type="text" placeholder="Your name" id="name">
                <textarea name="" id="feedback" placeholder="Your feedback"></textarea>
                <button type="submit"></button>
            </form>
        </div>
        <div class="connectSection">
            <h1>Connect With Us</h1>
            <div>
                <p>For questions, support, or further information, please contact us through the details below.</p>
                <a href="">dummy@dummy.co.id</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.allFeedback {
    background-color: #ffffff;
    width: 100%;
    padding: 3rem 5rem 5rem 5rem;
    margin-top: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* margin-top: 2rem; */
}

h1 {
    font-weight: bold;
    font-size: 45px;
    color: #000000;
    /* text-align: center; */
}

h2 {
    font-weight: 700;
    font-size: 35px;
    color: #000000;    
}


</style>