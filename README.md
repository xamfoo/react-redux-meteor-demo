# react-redux-meteor-demo
###Demo app using React, Redux, Meteor

To install:
```
npm install
```

To run:
```
meteor
```

The app will run at `http://localhost:3000`


###Inspiration
This app is created to demo how we can use React/Redux with Meteor. The basic idea is to save data in the Minimongo to the redux store and use only the store to render UI.

It uses the modules below:
* `redux` store as the single data source for the UI components
* `react-redux` to `connect` the state tree with components and pass it as context through `Provider`
* `redux-thunk` as the middleware for async calls, Meteor subscriptions, and __dependency injection__
