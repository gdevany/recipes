# recipes

> First project - recipes

https://www.npmjs.com/package/vue-gh-pages

------------------------------------------------------------

vue-gh-pages
Since I could not find a clean way of deploying vue-cli apps to github pages, I made this one.

Step 1: Install the module:
npm install --save-dev vue-gh-pages
Alternatively, with yarn:

yarn add vue-gh-pages
Step 2: Add the following to the script section of your package.json:
"deploy": "node ./node_modules/vue-gh-pages/index.js"
Step 2.5: If you are using the 'webpack-simple' template, you will need to do a couple extra things:
First, make sure the build.js is referenced correctly.
You can do this in one of two ways:

1.) Add to your package.json:

"wst": "/dist/"
Making sure the path is the same path from the index.html path to build.js. Though this should be the default, so unless it was modified the above should work.

2.) Change the path from the index.html in the root of your project from

<script src="/dist/build.js"></script>
to

<script src="build.js"></script>
Second, modify your 'webpack.config.js' and change the 'publicPath' for the output to the empty string:
output: {

...

publicPath: '',

...

},
This will make sure your files are referenced correctly after building.

Step 3: Add homepage field to your package.json file:
This will automatically push your builds to github.

"homepage": "https://github.com/myusername/my-app",
If you are using ssh you will need to add the ssh link instead:

"homepage": "git@github.com:myusername/my-app
If this is left off you will have to commit and push the changes manually.

Step 4: Now when you're ready to push to github, run:
npm run deploy
This will create an optimized production build of your project ready for github pages.

Step 5: Finally, if this is your first commit to gh-pages, go to your repository's settings on github, scroll down to the gh-pages section and change the source to:
master branch /docs folder
If you get any errors about filename lengths, run the following command:
(May need administrator privileges)

git config --system core.longpaths true
This may happen as a result of node_modules filenames being overly verbose.

If you would like to change the output directory of the docs folder
You can use the command line argument

--output <path-to-file>

or

-o <path-to-file>
to specify the output directory for the docs folder.

You can use either a relative path or an absolute path.

Examples:

node ./node_modules/vue-gh-pages/index.js -o C:\Users\MyUser\Documents\Folder

node ./node_modules/vue-gh-pages/index.js --output ../DeleteMe
If you would like to preserve the docs folder after pushing to Github:
Use the command line argument

-p
Examples:

node ./node_modules/vue-gh-pages/index.js -p
If you would like to push to the gh-pages branch:
Use the command line argument

--branch <branch>

or

-b <branch>
Examples:

node ./node_modules/vue-gh-pages/index.js -b gh-pages

node ./node_modules/vue-gh-pages/index.js --branch gh-pages

------------------------------------------------------------

PERSONAL NOTE:

How to save changes:

($git pull)
($git add .)
($git commit -m "  ")
($npm run deploy)
($git push)

** NOTE: '$npm run deploy' will cause local repo to be different than github repo **

** NOTE:  Changes may not appear in Github immediately **

-------------------------------------------------------------

Personal note:

Remove the '/dist/' in the script in index.html to view dev live in localhost:8080.  

** NOTE: Don't forget to put it back before $git add **

-------------------------------------------------------------

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
