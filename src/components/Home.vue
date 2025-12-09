<script setup>
  import Studies from './Studies.vue';
  import Feedback from './Feedback.vue';
  import { ref } from 'vue';

  const isDragging = ref(false)
  const files = ref([])

  function dragover(e) {
    e.preventDefault()
    isDragging.value = true
  }

  function dragleave(e) {
    e.preventDefault()
    isDragging.value = false
  }

  function drop(e) {
    e.preventDefault()
    isDragging.value = false

    const dropped = Array.from(e.dataTransfer.files)
    files.value = dropped
  }

  function onchange(e) {
    files.value = Array.from(e.target.files)
  }

  function getFile(){
    document.getElementById("getFile").click();
  }

</script>

<template>
  <div class="home" id="home">
    <div class="homeVideo">
      <div class="centerHomeVideo">
        <video class="theHomeVideo" autoplay muted loop>
          <source src="../vid/01_15__outside_talking_still_laughing__02HILKYO.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div id="homeRightSide">
      <div class="centerRightSide">
        <h1>Deepfake Video Detector Tool</h1>

        <div id="drop-zone" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <div class="inputFileButton">
            <button class="theFileButton" @click="getFile()" @change="onchange">Upload your video here!</button>
            <input type="file" accept="video/*" id="getFile" ref="file" style="display: none;">
          </div>
          
          <label for="drop-zone" class="file-label">
            <div v-if="isDragging">Release to drop files here.</div>
            <div v-else>or drop files here to upload.</div>
          </label>
          <!-- <ul id="preview"></ul> -->
          <!-- <button id="clear-btn">Clear</button> -->
        </div>
        
      </div>
    </div>
  </div>
  <Studies></Studies>
  <Feedback></Feedback>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 45px;
  /*position: absolute;*/
  /* top: -10px; */
  color: #EFDAFF;
  text-align: center;
}

.home {
  /* padding-top: 10rem; */
  padding: 14rem 5rem 13rem 5rem;
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
  padding: 18px;
  top: 10px;
  font-weight: 500;
  border-radius: 50px;
  background-color: #933ace;
  transition: 0.7s;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 16px;
  border: none;
}

.theFileButton:hover {
  background-color: #9714bf;
  box-shadow: 0em 0em 3em rgba(233, 114, 251, 0.84);
  color: rgb(255, 255, 255);
}

.homeVideo {
  width: 50vw;
  display: inline-block;
}

.inputFileButton {
  line-height: normal;
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

.centerRightSide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#drop-zone {
  width: 100%;
  height: 100%;
  margin: 20px auto;
  text-align: center;
  line-height: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column; 
}

#preview {
  text-align: center;
}

</style>
