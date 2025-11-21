<template>
    <div id="allStudies">
        <h1>The Study That Powers Our Detection System</h1>
        <div class="positionELA">
            <div class="studiesVisualAssets">
                <div class="videoStudiesELA">
                    <video class="ELAvideo" autoplay loop muted>
                        <source src="../vid/ELAwebasset.mp4">
                    </video>
                </div>
                <div class="ELARightSide">
                    <h2 class="subTitle2">Error Level Analysis</h2>
                    <h3>A Digital Forensics Technique for Revealing Visual Manipulation</h3>
                    <p>Before applying ELA, the uploaded video is first converted into individual frames. This step is important because ELA works at the image level, each frame must be analyzed separately to detect subtle manipulation patterns that appear across the video.</p>
                    <p>Error Level Analysis (ELA) is a digital forensics method used to identify signs of manipulation by examining inconsistencies in JPEG compression. Original images typically have uniform compression, while edited regions produce different error levels that can reveal traces of tampering.</p>
                    <h3>How ELA Works</h3>
                    <ul>
                        <li>The image or video frame is resaved with a fixed compression quality.</li>
                        <li>The system calculates pixel-by-pixel differences between the original frame and the recompressed version.</li>
                        <li>Unaltered areas typically appear darker, indicating consistent compression.</li>
                        <li>Manipulated areas appear brighter, showing significant compression differences.</li>
                        <li>The results are visualized as a heatmap, highlighting suspicious regions.</li>
                    </ul>
                    <h3>Why We Use ELA</h3>
                    <p>ELA enhances subtle manipulation cues that are often invisible to the human eye.</p>
                    <p>By processing every video frame through ELA, the system produces clearer patterns of compression inconsistency, making it easier for the deep learning model to recognize signs of deepfake manipulation and achieve more accurate predictions.</p>
                </div>
        </div>
            <div>
                <img src="" alt="">
            </div>
            <div>
                <h2>XceptionNet</h2>
                <h3>A Deep Learning Model for High-Accuracy Deepfake Detection</h3>
                <p>XceptionNet is a deep learning architecture designed to extract complex visual patterns efficiently. The model uses depthwise separable convolutions, allowing it to learn detailed features from images or video frames while keeping computation lightweight. This makes XceptionNet highly effective for detecting subtle manipulation artifacts commonly found in deepfake content.</p>
                <h3>How XceptionNet Works</h3>
                <ul>
                    <li>Heatmaps from the ELA preprocessing step are resized and normalized to fit XceptionNet's input format.</li>
                    <li>The model processes these images through stacked convolutional layers to extract spatial features.</li>
                    <li>Extracted features are passed to fully connected layers to classify each frame as real or fake.</li>
                    <li>Pretrained ImageNet weights are used to provide strong initial feature-learning ability, followed by fine-tuning for deepfake-specific patterns.</li>
                </ul>
                <h3>Why We Use XceptionNet</h3>
                <p>XceptionNet is known for its high accuracy in visual classification tasks and has shown strong performance in detecting deepfake manipulations, even in heavily compressed videos. Its architecture allows the system to identify subtle inconsistencies that traditional CNNs often miss, making it a reliable backbone for deepfake detection.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#allStudies {
    padding: 20rem 5rem 0 5rem;
    width: 100%;
}

h1 {
    font-weight: bold;
    font-size: 45px;
    /*position: absolute;*/
    /* top: -10px; */
    color: #ffffff;
    text-align: center;
}

.studiesVisualAssets {
}

.positionELA {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
}

.ELAvideo {
    width: 40vw;
    border-radius: 20px;
}

.videoStudiesELA {
  width: 50vw;
  display: inline-block;
}

h2 {
    font-weight: 700;
    font-size: 35px;
    color: #ffffff;    
}

.ELARightSide {
    width: 50vw;
    display: inline-block;
    align-items: center;
}

p, li, h3 {
    color: #ffffff;

}

</style>