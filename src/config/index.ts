import { IServerConfig, serverConfig } from './server';

export interface IConfig {
  server: IServerConfig;
}

export const config = (): IConfig => ({
  server: serverConfig(),
});
