# Fampay Youtube Video App

## Create your .env file 
We can reuse `.env.example`.
1. Copy `.env.example`. as `.env` file.
2. Create your Youtube API KEY credential by following google's [guide](https://developers.google.com/youtube/registering_an_application).
3. Replace your obtained API KEY in place of `<API_KEY>` in the file.

Note: Replace `<NODE_LOCAL_PORT>` with port set by you in .env file.

## Run the System
We can easily run the whole with only a single command:
```bash
docker-compose up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker-compose up -d
```

Open your browser with URL: `http://localhost:<NODE_LOCAL_PORT>`

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:
```bash
docker-compose down --rmi all
```

## Usage
API endpoints to test functionality:
1. GET API that returns the stored video data in a paginated response sorted in descending order of published datetime: [http://localhost:<NODE_LOCAL_PORT>/api/v1/getAllVideos?page=1](http://localhost:<NODE_LOCAL_PORT>/api/v1/getAllVideos?page=1)

2. GET API that searches the stored videos using their title and description and return a paginated response sorted in descending order of published datetime.: [http://localhost:<NODE_LOCAL_PORT>/api/v1/getVideos?pattern=how&page=1](http://localhost:<NODE_LOCAL_PORT>/api/v1/getVideos?pattern=how&page=1)
