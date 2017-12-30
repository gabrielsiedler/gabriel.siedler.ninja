const context = require.context('../', true, /types\.js$/);
const matches = context.keys().map(context);

export default matches.reduce((prev, curr) => ({ ...prev, ...curr.default }), {});
