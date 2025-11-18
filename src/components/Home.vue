<script setup>
  function getFile(){
    document.getElementById("getFile").click();
  }

  
</script>

<template>
  <div class="home">
    <div id="homeRightSide">
      <h1>Deepfake Video Detector Tool</h1>

      <div class="inputFileButton">
        <button class="theFileButton" @click="getFile()">Upload your video here!</button>
        <input type="file" accept="video/*" id="getFile" style="display: none;">
      </div>
    </div>
    <div class="homeVideo">
      <video class="theHomeVideo" autoplay controls loop>
        <source src="../vid/01_15__outside_talking_still_laughing__02HILKYO.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 2.6rem;
  position: absolute;
  /* top: -10px; */
  color: #ffffff;
}

.theFileButton {
  color: rgb(0, 0, 0);
  padding: 15px;
  top: 10px;
  border-radius: 50px;
  background-color: #6b75ff;
  transition: 0.7s;
  cursor: pointer;
}

.theFileButton:hover {
  background-color: #3a44c9;
  color: rgb(255, 255, 255);
}

.homeVideo .theHomeVideo {
    position: absolute;
    /* z-index:-1; */
    top: 10;
    left: 5;
    width: 40vw; 
    /* height: 100vh; */
    border-radius: 60px;
}

#homeRightSide {
  position: fixed;
  right: 10vw;
}

</style>
