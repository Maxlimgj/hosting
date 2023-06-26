#!/bin/bash
#search for files that end with *.log.* and is older than 14days under /var/log, removing it from the directory
find /var/log -name "*.log.*" -type f -mtime +14 -exec rm -rf {} \;
find /opt/containers/nginx/data/logs/ -name "*.log" -type f -mtime +14 -exec rm -rf {} \;