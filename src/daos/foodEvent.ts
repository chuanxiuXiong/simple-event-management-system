const { eventConnection } = require('../config/dbConnection.ts');

export const getFoodEvents = () => {
  return eventConnection.getFoodEvents();
};
