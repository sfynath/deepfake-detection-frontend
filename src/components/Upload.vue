<script setup>
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
        //if dropped > 1 munculin toast
        files.value = dropped.splice(1)
        console.log(files.value)
    }
    
    function onchange(e) {
        files.value = Array.from(e.target.files)[0]
        console.log(e.target.files)
    }

    function getFile(){
        document.getElementById("getFile").click();
    }

    function remove(i) {
        this.files.splice(i, 1);
    }

</script>

<template>
    <div>
        <div>
        </div>
    </div>
    <div id="allUpload">
        <div id="drop-zone" @dragover="dragover" @dragleave="dragleave" @drop="drop"
        :style="isDragging && 'border-color: #EFDAFF; width: 100%; height: 91%; padding: 10.2rem; transition: 0.6s'">
            <h1>Upload your video to know if its Deepfake or not</h1>
            <div class="inputFileButton">
                <button class="theFileButton" @click="getFile()" @change="onchange">Upload video</button>
                <input type="file" accept="video/*" id="getFile" ref="file" style="display: none;">
            </div>
            
            <label for="drop-zone" class="file-label">
                <div v-if="isDragging">Release to drop file here.</div>
                <div v-else>or drop file here to upload.</div>
            </label>
            <!-- <ul id="preview"></ul> -->
            <!-- <button id="clear-btn">Clear</button> -->
            <div class="preview" v-if="files.length">
                <div v-for="file in files" :key="file.name" class="preview-card">
                    <div>
                        <p>
                            {{ file.name }}
                        </p>
                    </div>
                <div>
                    <button
                    class="removeButton"
                    type="button"
                    @click="remove(files.indexOf(file))"
                    title="Remove file"
                    >
                    <b>×</b>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
#allUpload {
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
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
  box-shadow: 0em 0em 2em rgba(233, 114, 251, 0.665);
  color: rgb(255, 255, 255);
}

.inputFileButton {
  line-height: normal;
}

#drop-zone {
    border-style: dashed;
    border-color: #4b2866;
    border-radius: 60px;
  width: 90%;
  height: 100%;
  padding: 10rem;
  margin: 20px auto;
  text-align: center;
  line-height: 50px;
  /* cursor: pointer; */
  display: flex;
  flex-direction: column;
}

#dropzoneDragging {
    width: 100%;
    height: 100%;
    padding: 15rem;
    border-color: #EFDAFF;
}

#preview {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}

.removeButton {
    margin-left: 2rem;
}
</style>