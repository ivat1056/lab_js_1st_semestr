const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => 
{
    let filePath = path.join(__dirname, 'index.html');
    if (req.url === '/home') filePath = path.join(__dirname, 'home.html');
    if (req.url === '/about') filePath = path.join(__dirname, 'about.html');
    if (req.url === '/contact') filePath = path.join(__dirname, 'contact.html');
    fs.readFile(filePath, (err, content) => 
    {
        if (err) 
        {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Ошибка сервера');
        } 
        else 
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
        }
    });
});
server.listen(3000, () => 
{
    console.log('Сервер запущен на http://localhost:3000/');
});
