# Fampay Youtube Video App

## Create your .env file 
We can reuse `.env.example`.
1. Copy `.env.example`. as `.env` file.
2. Create your Youtube API KEY credential by following google's [guide](https://developers.google.com/youtube/registering_an_application).
3. Replace your obtained API KEY in place of `<API_KEY>` in the file.

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