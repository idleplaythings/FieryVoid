#!/bin/bash
rm shipbuilder.tgz
mtr bundle --debug shipbuilder.tgz
rsync shipbuilder.tgz aatu@chracian-dev.net:/var/nodewww
ssh aatu@chracian-dev.net 'bash -s' < meteorDeploy.sh