const http = require("http");

const requestListener = (req, res) => {
    let body;
    let statusCode;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE");

    switch(req.url){
        case '/':
            body = { message: 'Welcome to the server' };
            break;
        case '/cats':
            body = { 
                type: 'cats',
                collection: [
                {name: 'zelda', color: 'black'},
                {name: 'steve', color: 'red'},
                {name: 'mittens', color: 'white'}
                ]
        }
            break;
        case '/dogs':
            body = { 
                type: 'dogs',
                collection: [
                {name: 'patch', color: 'white'},
                {name: 'spot', color: 'black'},
                {name: 'mittens', color: 'orange'}
                ]}
            break;
            case '/unicorns':
                body = { 
                    type: 'unicorns',
                    collection: [
                    {name: 'zeus', color: 'white'},
                    {name: 'uni', color: 'black'},
                    {name: 'corno', color: 'purple'}
                ]}
                break;        
        default:
            statusCode = 404;
            body = { error: `Route ${req.url} does not exist`}
            break;
        }

        res.statusCode = statusCode || 200;
        body = body && JSON.stringify(body)
        res.end(body);

}

const server = http.createServer(requestListener)

const startServer = (port, host) => server.listen(port, host, () => console.log(`Yeah! Visit http://${host}:${port} for the good stuff!`));

module.exports = { startServer }