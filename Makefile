# Cubefs Makefile
#
threads?=0
RM := $(shell [ -x /bin/rm ] && echo "/bin/rm" || echo "/usr/bin/rm" )
default: all

phony := all
all: build

phony += build framework
build: framework

framework:
	@build/build.sh

phony += devcontainer
devcontainer:
	@build/build_devcontainer.sh

phony += docker
docker:
	@build/build_in_docker.sh

.PHONY: $(phony)