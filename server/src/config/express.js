import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

export default (app) => {
  app.use(logger('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(cors());
};
