---
title: Manual Installation
---

These steps are all handled by Docker through `scripts/entrypoint.sh` and `scripts/web_entrypoint.sh`. Users are encouraged to refer to these as a source of truth.

Manual installation is ideal for users who already have a database they wish to sue or who wish to modify the source code.

## Installation Instructions
Users will need a postgres database accessible (A `docker-compose.yml` is included in this repo), the port and host can be set as arguments to the DraftSmith CLI.

```bash
# Create a Database
PGPASSWORD=postgres createdb --host=postgres-db --port=5432 --username=postgres draftsmith2 || true

# Clone the repositories (This is handled in Dockerfile)
git clone --recurse-submodules https://github.com/RyanGreenup/draftsmith_rs $HOME/draftsmith_rs

# Run Diesel migrations
cd $HOME/draftsmith_rs/draftsmith_rs_api
diesel migration run --migration-dir migrations --database-url "$DATABASE_URL"
# There is a =.env= in draftsmith_rs_api with the correct details

# Build the project (The binary is is $HOME/draftsmith_rs/target/cli)
cargo build --release
# Install the project
cargo install --path .
```

### Serve API

```bash
# Rename binary for local installations
mv ~/.cargo/bin/cli ~/.cargo/bin/draftsmith
# Serve
draftsmith -a '0.0.0.0:37240'
```

### Test the API

```bash
# Curl
curl http://localhost:37240/notes/flat | jq

# Rust Client / CLI
draftsmith client notes flat list | jq
```

### Web App

```bash
git clone
poetry install deps
poetry run gunicorn -w 4 -b 0.0.0.0:5000 server:app
```
