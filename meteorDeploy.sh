#!/bin/bash
forever stop /var/nodewww/bundle/main.js || echo "forever not running, ignored"
cd /var/nodewww
rm -rf /var/nodewww/bundle
tar xvfz shipbuilder.tgz
cd /var/nodewww/bundle/server/node_modules/
rm -r fibers
npm install fibers@1.0.0
cd /var/nodewww/bundle
PORT=3000 ROOT_URL=www.fieryvoid.net MONGO_URL=mongodb://localhost:27017/shipbuilder forever start /var/nodewww/bundle/main.js
echo All done, should be running