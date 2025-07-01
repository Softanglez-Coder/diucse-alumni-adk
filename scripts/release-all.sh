#!/bin/bash

# Release script for all packages
set -e

echo "Building all packages..."
npm run build:all

echo "Checking for changes and releasing packages..."

# Check for core changes
if git diff --name-only HEAD~1 HEAD | grep -q "projects/diucsealumni/core" || [ "$1" = "--force" ]; then
    echo "Releasing @diucsealumni/core..."
    cd projects/diucsealumni/core
    npx semantic-release --dry-run=false
    cd ../../../
else
    echo "No changes in core package, skipping release."
fi

# Check for models changes
if git diff --name-only HEAD~1 HEAD | grep -q "projects/diucsealumni/models" || [ "$1" = "--force" ]; then
    echo "Releasing @diucsealumni/models..."
    cd projects/diucsealumni/models
    npx semantic-release --dry-run=false
    cd ../../../
else
    echo "No changes in models package, skipping release."
fi

# Check for services changes
if git diff --name-only HEAD~1 HEAD | grep -q "projects/diucsealumni/services" || [ "$1" = "--force" ]; then
    echo "Releasing @diucsealumni/services..."
    cd projects/diucsealumni/services
    npx semantic-release --dry-run=false
    cd ../../../
else
    echo "No changes in services package, skipping release."
fi

# Check for utils changes
if git diff --name-only HEAD~1 HEAD | grep -q "projects/diucsealumni/utils" || [ "$1" = "--force" ]; then
    echo "Releasing @diucsealumni/utils..."
    cd projects/diucsealumni/utils
    npx semantic-release --dry-run=false
    cd ../../../
else
    echo "No changes in utils package, skipping release."
fi

echo "Release process completed!"
echo "To force release all packages, use: ./scripts/release-all.sh --force"
