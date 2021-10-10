#!/bin/bash

set -e

export OPTIMIZE="-O3"
export LDFLAGS="${OPTIMIZE}"
export CFLAGS="${OPTIMIZE}"
export CPPFLAGS="${OPTIMIZE}"

(
  time emcc \
    --bind \
    ${OPTIMIZE} \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s MODULARIZE=1 \
    -s 'EXPORT_NAME="wasm_exif"' \
    --std=c++11 \
    -o ./wasm_exif.js \
    -x c++ \
    main.cpp \
    node_modules/easyexif/exif.cpp
)