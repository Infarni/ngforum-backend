export interface IServerConfig {
  host: string;
  port: number;
}

export const serverConfig = (): IServerConfig => ({
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT || '3000', 10),
});
