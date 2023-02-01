exports.parseYTResponse = async (rawYTReponse) => {
    parsedVideos = []
    rawYTReponse.forEach((video) => {
        parsedVideo = {
            _id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            published_date: video.snippet.publishedAt,
            thumbnail: video.snippet.thumbnails.default.url
        }
        parsedVideos.push(parsedVideo);
    })
    return parsedVideos;
};