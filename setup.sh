#!/bin/bash

git fetch

# Installs project-specific Ruby gems (password required).
sudo gem install sass scss_lint foundation

# Grabs all node modules specified in package.json.
npm install

# Creates a git hook, where each commit message must reference an Assembla ticket, e.g. re #23.
cp .git/hooks/commit-msg.sample .git/hooks/commit-msg
cat ./.githooks > .git/hooks/commit-msg

# Generates json file to pass FTP credentials to the gulp deployment task(s).
cp ./.deploy-sample.json ./deploy.json

# Boots the development environment.
gulp --dev
