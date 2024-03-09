#!/bin/bash

if [ -z "${YUKIHANA_DEVCONTAINER_TAG}" ]
then
    YUKIHANA_DEVCONTAINER_TAG="msojocs/yukihana-devcontainer"
fi

if [ -z "${YUKIHANA_VERSION}" ]
then
    YUKIHANA_VERSION="v3.2.5-21453"
fi

YUKIHANA_DEVCONTAINER="${YUKIHANA_DEVCONTAINER_TAG}:${YUKIHANA_VERSION}"

docker build -t ${YUKIHANA_DEVCONTAINER} docker/devcontainer