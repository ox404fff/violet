#!/usr/bin/env /bin/bash

npm --version \
    && npm install --no-progress \
    && npm run build
