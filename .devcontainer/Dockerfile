FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update \
    && apt-get install --yes --no-install-recommends python3-venv python3-yaml \
    && python3 -m venv /opt/pre-commit \
    && /opt/pre-commit/bin/pip install --no-cache-dir pre-commit==4.3.0 \
    && ln --symbolic /opt/pre-commit/bin/pre-commit /usr/local/bin/pre-commit \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
