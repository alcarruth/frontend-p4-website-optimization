#!/bin/bash

echo
cd mobile_portfolio/src
echo "Building mobile_portfolio"
./clean.sh

echo
cd ../../pizza_app/src
echo "Building pizza_app"
./clean.sh
