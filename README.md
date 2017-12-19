# HEYSHOP 杂JS Boilerplate

Create browser-ready javascript using vanilla es6. Output multiple scripts for javascript that might fit the miscellaneous dom manipulations needs of a project.


### Config, getting started

After cloning this repo, first thing you need to do is install the dependencies

```
npm install
```

Add your javascript to the `/src` directory and start writing.
For every javascript file you add, you need to add a line to the entries in the `webpack.config.js` file. Like so:

```javascript
  entry: {
    name_of_file: './src/name_of_file.js',
    name_of_another_file: './src/name_of_another_file.js'
  }
```


### Run dev server
```
npm start
```

Your compiled javascript can now be accessed via localhost:8080


### Output a build

```
npm run-script build
```
Transpiled javascript files will be output to `/dist` directory


### Output for production

```
npm run-script production
```
