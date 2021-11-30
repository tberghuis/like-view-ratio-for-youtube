#!/bin/bash

rm release/*
cp like-view-ratio-for-youtube-unpacked-dev/* release/

# todo, manual for now
  # diff manifest.prod to manifest.dev
  # cp manifest.prod release
  # increment version
  # zip
