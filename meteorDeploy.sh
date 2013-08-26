#!/bin/bash
forever stop /var/nodewww/bundle/main.js || echo "forever not running, ignored"
cd /var/nodewww
rm -rf /var/nodewww/bundle
tar xfz shipbuilder.tgz
cd /var/nodewww/bundle/programs/server/node_modules
npm uninstall fibers || echo "fibers not found, not deleting"
npm install fibers
cd /var/nodewww/bundle
PORT=3000 ROOT_URL="http://www.fieryvoid.net/" MONGO_URL=mongodb://localhost:27017/shipbuilder forever start /var/nodewww/bundle/main.js
echo All done, should be running
