#!/bin/bash
# -*- mode: shell-script; tab-width: 4; -*- # vim:ts=4

curl -s https://api.douban.com/v2/movie/top250 | json_pp


