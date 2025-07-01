#!/bin/bash

# Test semantic-release configuration for individual packages
set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <package-name>"
    echo "Available packages: core, models, services, utils"
    exit 1
fi

PACKAGE=$1

case $PACKAGE in
    core|models|services|utils)
        echo "Testing semantic-release configuration for @diucsealumni/$PACKAGE..."
        cd projects/diucsealumni/$PACKAGE
        npx semantic-release --dry-run
        ;;
    *)
        echo "Invalid package name. Available packages: core, models, services, utils"
        exit 1
        ;;
esac
