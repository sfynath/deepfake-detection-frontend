<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { usefileStore } from '@/store/fileStore';
import ProgressBar from 'primevue/progressbar';

const toast = useToast();
const fileInput = ref(null);
const store = usefileStore()
const isDragging = ref(false)
const file = ref('')
console.log(file.value)
const result = ref(false)
const value1 = ref(0)
const interval = ref()
const loading = ref(false)

onMounted (() => {
    if(store.file) {
        file.value = store.file
        previewVideo()
    }
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};

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
    if (validateFiles(dropped)) {
        file.value = dropped[0]
    }
    previewVideo();
}

function onchange(e) {
    file.value = Array.from(e.target.files)[0];
}

function getFile() {
    document.getElementById("getFile").click();

}

function remove(i) {
    // this.files.splice(i, 1);
}

const handleFileSelect = () => {
    // Access selected files from the input's files property
    const input = fileInput.value.files;
    if (validateFiles(input)) {
        file.value = input[0]
    }
    previewVideo();
}

function validateFiles(filesTemp) {
    if (filesTemp.length === 0) return;
    if (filesTemp.length > 1) {
        return false
    }7

    const fileTemp = filesTemp[0];
    const allowedType = ['video/mp4', 'video/wmv', 'video/mov', 'video/avi', 'video/mkv', 'video/flv', 'video/webm'];
    // const maxSize = 5 * 1024 * 1024; //5 MB 
    if (!allowedType.includes(fileTemp.type)) {
        toast.add({ severity: 'danger', summary: 'Upload Failed', detail: 'Only video files are allowed.', life: 3000 })
        return false
    }

    // if(fileTemp.size > maxSize) {
    //     toast.add({severity: 'danger', summary: 'Upload Failed', detail: 'File size must be less than 5MB.', life: 3000})
    //     return false
    // }

    // Validation passed
    file.value = fileTemp;
    return true
}

import axios from 'axios'; // Import Axios

const uploadFile = async () => {
    if (!file.value) {
        return;
    }

    try {
        const formData = new FormData();
        formData.append('file', file.value);
        // Replace with your backend URL
        loading.value = true
        const response = await axios.post('http://127.0.0.1:5000/api/predict', formData, {
            // Optional: Track upload progress
            onUploadProgress: (progressEvent) => {
                const percent = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                console.log(`Upload progress: ${percent}%`);
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            toast.add({ severity: 'success', summary: 'Upload Success', detail: `${response.data.label}`, life: 3000 })
            result.value = response.data
            console.log(file.value)
        }
    } catch (err) {
        console.error('Upload error:', err);
    } finally {
        loading.value = false
    }
};

const vidSrc = ref() // template buat hubungin sama html, mirip getElementBy...., buat bisa pake di html

function previewVideo(){
    // let video = document.getElementById('video-preview');
    // console.log(videoPreview.value)
    vidSrc.value = URL.createObjectURL(file.value); // buat bikin dari object file jadi URL, soalnya video sourcenya harus URL 
}

</script>

<template>
    <div id="allUpload">
        <div id="drop-zone" v-if="result == '' && !loading" @dragover="dragover" @dragleave="dragleave" @drop="drop"
            :style="(isDragging && 'border-color: #EFDAFF; width: 100%; height: 91%; padding: 10.2rem; transition: 0.6s; background-color: #933ace52;') || (file != '' && 'padding: 3.44rem')">
            <h1 class="text" v-if="file == ''">Upload your video to know if its Deepfake or not</h1>
            <div class="inputFileButton" v-if="file == ''">
                <button class="theFileButton" @click="getFile()" @change="onchange"
                    :style="!isDragging && 'pointer-events: auto'">Upload video</button>
                <input type="file" accept="video/*" id="getFile" ref="fileInput" style="display: none;"
                    @change="handleFileSelect">
            </div>
            <Toast></Toast>
            <label for="drop-zone" class="file-label" v-if="file == ''">
                <div v-if="isDragging">Release to drop file here.</div>
                <div v-else>or drop file here to upload.</div>
            </label>
            <div class="preview" v-if="file && !loading">
                <div class="preview-card">
                    <div class="fileName">
                    <video id="video-preview" controls :src="vidSrc" :style="!isDragging && 'pointer-events: auto'" height="300" width="500"></video>
                    <!-- pake : sebelum src biar dinamis, jadi bisa ganti2 sesuai isi dari si vidSrc (input user) atau dari yang di refnya -->
                        <p>
                            {{ file.name }}
                        </p>
                    </div>
                    <div>
                        <button class="removeButton" type="button" :style="!isDragging && 'pointer-events: auto'"
                            @click="file = ''" title="Remove file">
                            <b>×</b>
                        </button>
                    </div>
                    <div class="after-upload">
                        <h2 class="text">Want to upload another video?</h2>
                        <button class="theFileButton" @click="getFile()" @change="onchange"
                            :style="!isDragging && 'pointer-events: auto'">Re-Upload</button>
                        <input type="file" accept="video/*" id="getFile" ref="fileInput" style="display: none;"
                            @change="handleFileSelect">
                        <h3 class="text">or</h3>
                        <button class="analyzeButton rainbow" @click="uploadFile();" style="color: #ffffff; pointer-events: auto;">Analyze Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" v-if="loading">
            <ProgressBar :value="value1"></ProgressBar>
        </div>
        <div id="Result" v-if="result">
            <div class="label">{{result.label}}</div>
            <div>{{result.response}}</div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width:100%;
        height:100%;
    }
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
    transition: all 0.6s;
}

#drop-zone * {
    pointer-events: none;
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
    /* border: 1px solid #a2a2a2; */
    padding: 5px;
    margin-left: 5px;
    flex-direction: row; 
}

.after-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.fileName {
    overflow: hidden;
}

.removeButton {
    margin-left: 2rem;
    border-radius: 60px;
    cursor: pointer;
    background-color: #202020;
    border-color: #933ace;
}

.removeButton:hover {
    background-color: #000000;
}

.text {
    color: #ffffff;
}

h1 {
    font-weight: 700;
}

h2 {
    font-weight: 600;
}

:root {
  --angle: 45deg;
  --opacity: 0.5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.rainbow {
    color: #ffffff;
    background-color: #202020;
    border-radius: 40px;
    padding: 18px 24px 18px 24px;
    border: 1px solid #933ace;
    border-top: #933ace;
    border-left: #933ace;
    transition: border 1s ease;
    cursor: pointer;

    --border-size: 0.1rem;
    border: var(--border-size) dotted transparent;
    background-image: linear-gradient(
        to right,
        #202020,
        #202020                                                       
    ),
    conic-gradient(
        from var(--angle),
        transparent 0deg 54deg,
        #933ace 70deg 180deg,
        #933ace 180deg 216deg,
        transparent 235deg 360deg
    );
    background-origin: border-box;
    background-clip: padding-box, border-box;
}

@property --opacity {
  syntax: "<number>";
  initial-value: 0.5;
  inherits: false;
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

.rainbow:hover {
  animation: rotate 2s linear infinite;
   background-image: linear-gradient(
        to right,
        #000000,
        #000000 
   ),
    conic-gradient(
        from var(--angle),
        transparent 0deg 54deg,
        #933ace 70deg 180deg,
        #933ace 180deg 216deg,
        transparent 235deg 360deg
    );
    background-origin: border-box;
    background-clip: padding-box, border-box;

    transition: background-image 1s;
}

.analyzeButton {
    text-decoration: none;
    color: #EFDAFF;
    font-weight: 600;
    gap: 10px;
    font-size: 15px;
}

.progress {
    position: fixed;
    width: 100%;
    /* height: 100vh; */
    /* top: 0; */
    /* left: 0; */
    /* padding: 10rem; */
    /* margin: 20px auto; */
    text-align: center;
    /* line-height: 50px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    background-color: #933acead;
    /* transition: all 0.6s; */
}

</style>