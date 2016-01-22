#!/bin/bash

echo
cd mobile_portfolio
echo "Building mobile_portfolio"
./build.sh

echo
cd ../pizza_app
echo "Building pizza_app"
./build.sh
