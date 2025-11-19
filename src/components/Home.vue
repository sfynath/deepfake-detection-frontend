<script setup>
  function getFile(){
    document.getElementById("getFile").click();
  }
</script>

<template>
  <div class="home">
    <div class="homeVideo">
      <div class="centerHomeVideo">
        <video class="theHomeVideo" autoplay muted controls loop>
          <source src="../vid/01_15__outside_talking_still_laughing__02HILKYO.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div id="homeRightSide">
      <div class="centerRightSide">
        <h1>Deepfake Video Detector Tool</h1>
  
        <div class="inputFileButton">
          <button class="theFileButton" @click="getFile()">Upload your video here!</button>
          <input type="file" accept="video/*" id="getFile" style="display: none;">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 45px;
  /*position: absolute;*/
  /* top: -10px; */
  color: #ffffff;
  text-align: center;
}

.home {
  /* padding-top: 10rem; */
  padding: 14rem 5rem 0 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.centerHomeVideo {
    align-items: center;
    display: flex;
    justify-content: center;
}

.theFileButton {
  color: rgb(0, 0, 0);
  padding: 15px;
  top: 10px;
  font-weight: 500;
  border-radius: 50px;
  background-color: #6b75ff;
  transition: 0.7s;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 16px;
}

.theFileButton:hover {
  background-color: #3a44c9;
  color: rgb(255, 255, 255);
}

.homeVideo {
  width: 50vw;
  display: inline-block;
}

.theHomeVideo {
    width: 40vw; 
    border-radius: 60px;
  }
  
#homeRightSide {
    width: 50vw;
    display: inline-block;
    align-items: center;
}

.centerRightSide{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
