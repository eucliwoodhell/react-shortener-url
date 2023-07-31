import { Dev } from "./environment.dev";
import { Local } from "./environment.local";
import { Prod } from "./environment.prod";

export enum Environment {
  Development = "dev",
  Production = "prod",
}

let config;
const ENVIRONMENT = process.env.REACT_APP_ENV;
switch (ENVIRONMENT) {
  case Environment.Development:
    config = Dev;
    break;
  case Environment.Production:
    config = Prod;
    break;
  default:
    config = Local;
}

const environment = config;

export default environment;
