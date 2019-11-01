const { Router } = require('express');
const foodEvent = require('./routes/foodEvent');

export default () => {
  const app = Router();
  foodEvent(app);
  return app;
};
