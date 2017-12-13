// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    API_QUESTION_HOST: 'http://127.0.0.1:8888',
    API_QUESTION_ENDPOINT: 'http://127.0.0.1:8888/default',    
    API_HOST: 'http://localhost:8889',
    API_ENDPOINT: 'http://localhost:8889/api',    
};
