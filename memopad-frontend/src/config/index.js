const config = {
    development : {
        backendUrl : 'http://localhost:2000'
    },
    production : {
        backendUrl : 'https://p0qrbllq63.execute-api.us-east-1.amazonaws.com/prod'
    }
}

const env = process.env.NODE_ENV || 'dev';

export default config[env];
