import express from 'express';
import configExpress from 'config/express'
import connectMongo from 'config/mongoose'
import config from 'config/env'

const app = express();
configExpress(app)

app.use((req, res) => {
  console.log('bleh>>>>>>>>>>>>>>')
  res.send('w0000_______00tttttt')
})

const connection = connectMongo(config.MONGODB_URI)
export const onConnect = (err) => {
  if (err) throw new Error(`Something went wrong with express: ${err}`);

  console.log('Server started', new Date());
  console.log(`App listening on port ${config.PORT}`);
  console.log(`Running NODE_ENV: ${config.ENV}`);
}

export const connectedServer = connection.then(() => app)
