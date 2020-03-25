#!/bin/bash

branch=$1
message=$2

git add .
git commit -m "$2"
git push origin $1
