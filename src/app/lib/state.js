import { combineReducers } from 'redux';

const context = require.context('../', true, /reducers\.js/);
const combinedReducers = {};

context.keys().forEach((key) => {
  const digger = key.split('/');
  const reducer = digger[digger.length - 2];
  const reducerKey = `${reducer[0].toLowerCase()}${reducer.slice(1)}`;

  combinedReducers[reducerKey] = context(key).default;
});

const App = combineReducers(combinedReducers);

export default App;
