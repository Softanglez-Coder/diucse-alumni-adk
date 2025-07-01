#!/bin/bash

# Release script for all packages
set -e

echo "Building all packages..."
npm run build:all

echo "Releasing @diucsealumni/core..."
cd projects/diucsealumni/core
npx semantic-release
cd ../../../

echo "Releasing @diucsealumni/models..."
cd projects/diucsealumni/models
npx semantic-release
cd ../../../

echo "Releasing @diucsealumni/services..."
cd projects/diucsealumni/services
npx semantic-release
cd ../../../

echo "Releasing @diucsealumni/utils..."
cd projects/diucsealumni/utils
npx semantic-release
cd ../../../

echo "All packages released successfully!"
