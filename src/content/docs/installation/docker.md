---
title: Docker
---

DraftSmith can be installed and configured entirely through Docker,
this will include the API, database and Web App:

```bash
git clone https://github.com/RyanGreenup/draftsmith_rs
cd draftsmith_rs/containers/main
docker compose up
```

## Details

This will build a container with some dependencies and:

- A clone of:
    - [draftsmith_rs_py_client](https://github.com/RyanGreenup/draftsmith_rs_py_client)
    - [draftsmith_flask](https://github.com/RyanGreenup/draftsmith_flask)
    - [drafsmith_render](https://github.com/RyanGreenup/draftsmith_render)
    - [drafsmith_rs_api](https://github.com/RyanGreenup/draftsmith_rs_api)
- Compiled version of
    - CLI for [draftsmith_rs_api](https://github.com/RyanGreenup/draftsmith_rs_api)
- Virtual Environment for [draftsmith_flask](https://github.com/RyanGreenup/draftsmith_flask)

The `docker-compose.yml` will create 3 services:

- `postgres`
    -  The database storing all the data
- `app`
    - This is the REST API that communicates with the database
    - `scripts/entrypoint.sh` will check for a marker file and if it's not found:
        1. Create a database
        2. Initialize that database with tables etc. (using Diesel migrations)
    - `web-app`
        - The web application communicating with the REST API
            - `scripts/web_entrypoint.sh` will source the virtual environment (created in the image) and run the web app

## Interactions

Users can jump inside the container to interact directly with the REST API or database if they wish:

```bash
docker compose exec -it app /bin/sh
# Or
docker compose exec -it app /bin/fish
docker compose exec -it app /usr/sbin/nu
```

Or call the client without forwarding the REST API to the system:

```bash
# change this according to the docker-compose
API_PORT=37242
docker compose exec -it app draftsmith client --url 'http://localhost:'$API_PORT notes tree | jq
```

