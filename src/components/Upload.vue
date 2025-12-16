<script setup>
import { ref } from 'vue';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const fileInput = ref(null);

const isDragging = ref(false)
const file = ref(false)

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

    uploadFile()
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

    uploadFile();
}

function validateFiles(filesTemp) {
    if (filesTemp.length === 0) return;
    if (filesTemp.length > 1) {
        return false
    }

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
        const response = await axios.post('http://127.0.0.1:5000/api/predict', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }, {
            // Optional: Track upload progress
            onUploadProgress: (progressEvent) => {
                const percent = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                console.log(`Upload progress: ${percent}%`);
            },
        });

        if (response.status === 200) {
            toast.add({ severity: 'success', summary: 'Upload Success', detail: `${response.data.label}`, life: 3000 })
        }
    } catch (err) {
        console.error('Upload error:', err);
    } finally {
    }
};

</script>

<template>
    <div id="allUpload">
        <div id="drop-zone" @dragover="dragover" @dragleave="dragleave" @drop="drop"
            :style="isDragging && 'border-color: #EFDAFF; width: 100%; height: 91%; padding: 10.2rem; transition: 0.6s'">
            <h1>Upload your video to know if its Deepfake or not</h1>
            <div class="inputFileButton">
                <button class="theFileButton" @click="getFile()" @change="onchange"
                    :style="!isDragging && 'pointer-events: auto'">Upload video</button>
                <input type="file" accept="video/*" id="getFile" ref="fileInput" style="display: none;"
                    @change="handleFileSelect">
            </div>
            <Toast></Toast>
            <label for="drop-zone" class="file-label">
                <div v-if="isDragging">Release to drop file here.</div>
                <div v-else>or drop file here to upload.</div>
            </label>
            <div class="preview" v-if="file">
                <div class="preview-card">
                    <div>
                        <p>
                            {{ file.name }}
                        </p>
                    </div>
                    <div>
                        <button class="removeButton" type="button" :style="!isDragging && 'pointer-events: auto'"
                            @click="file = null" title="Remove file">
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