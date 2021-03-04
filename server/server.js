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
            body = { cats: [
                {catName: 'zelda', color: 'black'},
                {catName: 'steve', color: 'red'},
                {catName: 'mittens', color: 'white'}
            ]}
            break;
        case '/dogs':
            body = { dogs: [
                {dogName: 'patch', color: 'white'},
                {dogName: 'spot', color: 'black'},
                {dogName: 'mittens', color: 'orange'}
            ]}
            break;
            case '/unicorns':
                body = { unicorns: [
                    {unicornName: 'zeus', color: 'white'},
                    {unicornName: 'uni', color: 'black'},
                    {unicornName: 'corno', color: 'purple'}
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