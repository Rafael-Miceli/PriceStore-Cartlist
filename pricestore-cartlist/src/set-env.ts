import { writeFile } from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = process.env.ENVNAME;
const isProd = environment === 'prod';

const targetPath = `./src/assets/env-config.json`;
const envConfigFile = `
{
  production: ${isProd},
  envName: '${process.env.ENVNAME}'
};
`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
