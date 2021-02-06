const   http = require('http');
const   url = require('url');
if (process.argv.length == 3)
{
    port = parseInt(process.argv[2]);
    try {
var server = http.createServer((req, res) => {
const URL = url.parse(req.url);
user = url.parse(req.url, true).query.user;
var json;
json =
'{"path":' + URL.pathname +
',"user":' + user + '}\n';
res.end(json);
});
server.listen(port).on('error', (err) => {
console.log(err.message);
});
    } catch(err) {
console.log(err.message);
    };
}