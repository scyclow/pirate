import _ from 'lodash';
import prodVars from './production'
import devVars from './development'

const environment = process.env.NODE_ENV || 'development';

const defaults = {
  SECRET: 'dreamWEALTH!1FAST8z1poz',
  ENV: environment
};

console.log(`Getting config vars for ${environment}`)

const production = _.defaults(prodVars, defaults);
const development = _.defaults(devVars, defaults);
// const test = _.defaults(require('./test'), defaults);

const config = {
  development,
  production,
  // test,
}[environment];

const envVars = _.pick(process.env, ['MONGODB_URI', 'PORT', 'SECRET']);

export default _.defaults(envVars, config);
