#!/bin/bash

set -e

echo "Starting backend..."
cd backend
node app.js &
BACKEND_PID=$!

cd ../

echo "Installing frontend dependencies..."
cd frontend
npm install

echo "Starting frontend..."
npm run dev

kill $BACKEND_PID