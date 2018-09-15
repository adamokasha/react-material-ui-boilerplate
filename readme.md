## React and Material UI boilerplate with Webpack 4.

##### [Live Deployment on heroku](https://rbp-mui.herokuapp.com/)

### Features
* Material UI
  * Premade component set for rapid prototyping.
* Private and public routing setup.
* Webpack 4 
* Jest and Enzyme for testing.

### Usage in Development
1. Clone repo and install dependencies.
2. Run 'npm run dev' from cli to generate public/dist.
3. Run 'npm run dev-server' for development with live-reloading.

### NPM Scripts
#### **npm run build**
Runs webpack and builds bundle.js and index.html in public folder.

#### **npm run dev-server**
Runs webpack-dev-server. Global test env variables need to be set in env.test and defined in webpack.config.

#### **npm run test**
Runs in test mode. Global test env variables need to be set in env.test and defined in webpack.config.

#### **npm run start**
Starts the server.

#### **heroku-postbuild**
Runs build after deploying to heroku.

#### Known Issues
  * Tree shaking is not complete with material-ui in this repo. A handful of mui components that are never imported get bundled.