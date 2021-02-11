# Rick & Morty Search Engine

## Common TODOs
1. Clean up unneeded variables from code
2. Fix up date formatting (you can use `date-fns`, `luxon` or similar, but please, not `moment` -- it's large and not supported anymore :) )
3. Why is additional `eslint` config missing? Try to solve some common problems in the project by adding eslint rules: rule for correct import order, rule that disallows leaving unused vars in code etc. Eslint will do the job for you :) (with --fix flag it will auto fix some common rules)
4. Include `eslint` script intu pre-commit hook, to disallow committing un cleaned code.
5. Your pre-commit hook currently works a bit improperly, so please fix it: it prettifies the code, but it does not add the prettified code to the commit. Test it before pushing.

## Description

This site is a UI wrapper around the [Rick and Morty API](https://rickandmortyapi.com/).

This website provides a comfortable way to look up information on your favourite **Rick and Morty** characters and episodes in the API's database. You can filter the character list based on characters' names, gender and status(Alive, Dead etc.). Created with [ReactJS](https://reactjs.org/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run prettify`

Refactors the code to make it look more consistent and keep a single coding style in all parts of this project.<br/><br/>
