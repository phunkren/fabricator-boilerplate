# Fabricator front-end boilerplate
***
 
## Installation Instructions (OS X)

1. Install the [Editorconfig](http://editorconfig.org/#download) text-editor plugin.
2. Ensure you have the latest [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed on your machine.
    * `$ node -v`
    * `$ npm -v`
3. Fork the repository.
4. Run the following command from root to perform the initial setup: `$ bash ./setup.sh`. The browser should open `localhost:3000` if successful.
5. After the initial setup, you can simply run the following command: `$ gulp --dev`.

<br>
<br>

## Points of Interest

1. Gulp will lint your code on each commit, and will abort the commit unless all tests pass. Be sure to commit often to catch any linting errors. You can run each of the lint tasks individually if you wish to lint during development (recommended):
    * `$ gulp styles:lint` // CSS
    * `$ gulp scripts:lint` // JS
    * `$ gulp html:lint` // HTML (dist)
    * `$ gulp lint` // All
2. Each commit must reference a valid Assembla ticket. Please add `re #<ticket number>` to the end of your commit message. You will receive the following warning if this is not followed, and the commit will fail: 
    * `Aborting commit. Your commit message is missing an Assembla ticket reference (e.g. re #38)`
3. If you don't want to use the hook explained in the previous step, omit the following two lines from setup.sh:
    * `cp .git/hooks/commit-msg.sample .git/hooks/commit-msg`
    * `cat ./.githooks > .git/hooks/commit-msg`
4. If you wish to produce Production code (minified assets, etc), run the default `$ gulp` task. 

<br>
<br>


## Deployment

### Staging
1. The initial `$ bash ./setup.sh` command will generate a deploy.json file in root with placeholder text for FTP credentials.
2. Replace the placeholder text with the relevant credentials.
3. To deploy to the staging environment, run the following command `$ gulp deploy:staging`.

<br>
<br>

## Utilised Technology

- [Fabricator](https://fbrctr.github.io/)
- [Foundation](http://foundation.zurb.com/)
- [Bootstrap](http://getbootstrap.com/)
- [Gulp](http://gulpjs.com/)
- [SASS](http://sass-lang.com/)
- [jQuery](https://jquery.com/)
- [Modernizr](https://modernizr.com/)
- [Editorconfig](http://editorconfig.org/)
- [Node](https://nodejs.org/en/) 
- [NPM](https://www.npmjs.com/)
