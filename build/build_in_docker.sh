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

docker run -it --name yukihana_build --rm -v $(pwd):/root/yukihana --entrypoint /root/build.sh ${YUKIHANA_DEVCONTAINER}