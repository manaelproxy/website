#!/bin/sh

set -ex

export PATH=$(pwd)/local/go/bin:${PATH}

mkdir -p local
curl -L https://dl.google.com/go/go1.13.linux-amd64.tar.gz | tar xzf - -C local

export PATH=$(go env GOPATH)/bin:${PATH}

mkdir -p local/src
curl -L https://github.com/gohugoio/hugo/archive/v0.58.1.tar.gz | tar xzf - -C local/src

cd local/src/hugo-0.58.1
go install --tags extended

cd -

git clone --recursive https://github.com/google/docsy.git themes/docsy

yarn install --frozen-lockfile
yarn build
