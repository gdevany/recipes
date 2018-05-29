# recipes

> First project - recipes

Option 1: How to Deploy to Github-Pages with a Master Branch and Docs folder:

1) On your master branch, run the terminal command: `npm run build`.
2) Change the name of your `dist` folder to `docs`
3) In your newly created `docs` folder, go to the index.html and remove the `/` in the beginning of every script and link tag’s `src` attribute.
4) Go to your repository’s settings.
5) Scroll to the Github Pages settings.
6) Change your `Source` in your Github Pages settings from `gh-pages branch` to `master branch/docs folder`.
7) Now, you can push your master branch to github, and it will be hosted by Github Pages.
8) If you want to make a change to your master branch and have it detected by Github Pages, you’ll need to delete your docs folder, and follow the instructions from step 1.




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
