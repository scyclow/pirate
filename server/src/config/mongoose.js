// @flow

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default async (mongodbUri: string) => {
  console.log('Connecting to mongo...', new Date());
  try {
    const connection = await mongoose.createConnection(mongodbUri, {
      useMongoClient: true
    });

    console.log(`Mongo connection established: ${mongodbUri}`);
    return connection;

  } catch (err) {
    throw new Error(`Error connecting to mongo: ${err}`)
  }
};
