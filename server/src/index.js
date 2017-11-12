import express from 'express';

export const PORT = 3335;

export const app = express();

app.use((req, res) => {
  console.log('bleh>>>>>>>>>>>>>>')
  res.send('w0000_______00tttttt')
})

