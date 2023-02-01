exports.parseYTResponse = async (rawYTReponse) => {
    parsedVideos = []
    rawYTReponse.forEach((video) => {
        parsedVideo = {
            _id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            publishedData: video.snippet.publishedAt,
            thumbnailUrl: video.snippet.thumbnails.default.url
        }
        parsedVideos.push(parsedVideo);
    })
    return parsedVideos;
};