const { YouTubeVideo } = require('youtube-video-parser');

window.parseYoutube = async function (videoUrl) {
    const videoId = YouTubeVideo.getVideoId(videoUrl);

    return await YouTubeVideo.fetch(videoId);
}