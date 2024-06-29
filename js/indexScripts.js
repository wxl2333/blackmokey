var video = document.getElementById("bgVideo");
var imageContainer = document.querySelector(".custom-image");
var imageContainer2 = document.querySelector(".custom-image2");

video.addEventListener('ended', function() {
    // 当前视频播放完毕时，切换到新的视频源
    video.src = "https://www.heishenhua.com/video/b1/video_WebTitle_batch.mp4";
    video.loop = true; // 设置新视频循环播放
    video.play(); // 播放新视频
    imageContainer.style.display = "block";
    imageContainer2.style.display = "block";
    setTimeout(function() {
        imageContainer.style.opacity = 1;
        imageContainer2.style.opacity = 1;
    }, 100); // Delay added for smoother transition
});