export default function stringifyVideoPlaybackQuality(quality: VideoPlaybackQuality | undefined): string {
    return JSON.stringify({
        creationTime: quality?.creationTime,
        droppedVideoFrames: quality?.droppedVideoFrames,
        totalVideoFrames: quality?.totalVideoFrames
    })
}