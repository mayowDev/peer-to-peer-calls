ps aux | grep go | awk '{print $2;}' | xargs kill -9
npm run build:go:linux
npm run start
