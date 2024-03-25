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

echo "Using image: ${YUKIHANA_DEVCONTAINER}"
echo "Current directory $(pwd)"

command="$1"

if [ "${command}" == "stop" ]
then
    docker stop yuikohana_devcontainer
    exit 0
fi

if [ "${command}" == "bash" ]
then
    docker exec -it yuikohana_devcontainer bash
    exit 0
fi

docker run -d --rm --name yuikohana_devcontainer --net host -v $(pwd):/root/yukihana ${YUKIHANA_DEVCONTAINER}