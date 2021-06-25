declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      DOGS_API_KEY: string;
      DOGS_API_URL: string;
      NODE_ENV: string;
      NX_CLI_SET: string;
      NX_INVOKED_BY_RUNNER: string;
      NX_TASK_HASH: string;
      NX_WORKSPACE_ROOT: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
