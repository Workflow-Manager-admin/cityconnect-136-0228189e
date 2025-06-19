#!/bin/bash
cd /home/kavia/workspace/code-generation/cityconnect-136-0228189e/cityconnect_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

