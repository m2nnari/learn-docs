#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# liigu dist folderisse
cd gh-pages

# Initsieeri git ja lisa kommid
git init
git add .
git commit -m 'deploy'

# pushi reposse
git push -f git@github.com:m2nnari/learn-docs.git master:gh-pages

cd -