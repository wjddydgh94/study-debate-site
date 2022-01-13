#!/bin/sh
pm2 list
pm2-runtime start ecosystem.config.js
