module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            // ? 'http://localhost:2000/api' // development api
            // : 'http://localhost:2000/api' // production api
            ? 'martha-bopis-dashboard1.vercel.app/api' // development api
            : 'martha-bopis-dashboard1.vercel.app/api' // production api
    }
}
