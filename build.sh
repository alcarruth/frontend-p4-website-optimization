#!/bin/bash

printf '\nBuilding Pizza App\n';
gulp --gulpfile pizza_app/gulpfile.js;

printf '\nBuilding Mobile Portfolio\n';
gulp --gulpfile mobile_portfolio/gulpfile.js;

