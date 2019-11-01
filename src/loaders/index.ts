const DBConnection = require('./dbConnection');
const expressLoader = require('./express');

export default async ({ expressApp }) => {
  const connection = new DBConnection();
  await expressLoader.default({ app: expressApp });
};
