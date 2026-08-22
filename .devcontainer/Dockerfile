FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update \
    && apt-get install --yes --no-install-recommends python3-yaml \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
