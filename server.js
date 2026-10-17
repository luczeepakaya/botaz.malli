const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf'
};

const server = http.createServer(async (req, res) => {
    // Parse URL and strip query strings/hash
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let reqPath = decodeURIComponent(parsedUrl.pathname);

    // Local handler for Netlify Serverless Function: notify-order
    if (reqPath === '/.netlify/functions/notify-order' || reqPath === '/api/notify-order') {
        if (req.method === 'OPTIONS') {
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            });
            res.end();
            return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
            try {
                const notifyOrder = require('./netlify/functions/notify-order.js');
                const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
                const headers = Object.assign({}, req.headers, { 'client-ip': clientIp });
                const result = await notifyOrder.handler({
                    httpMethod: req.method,
                    headers: headers,
                    body: body
                });
                res.writeHead(result.statusCode || 200, {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(result.body);
                console.log(`[NETLIFY FUNCTION] notify-order -> Status ${result.statusCode}`);
            } catch (err) {
                console.error('[NETLIFY FUNCTION ERROR]', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    if (reqPath === '/') {
        reqPath = '/index.html';
    }

    const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '');
    const filePath = path.join(ROOT_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`<h1>404 Not Found</h1><p>The requested file <code>${reqPath}</code> was not found.</p>`);
            console.log(`[404] ${req.method} ${reqPath}`);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Access-Control-Allow-Origin': '*'
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
        console.log(`[200] ${req.method} ${reqPath} (${contentType})`);
    });
});

server.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🔥 LUKZI CHEATS LOCAL WEB SERVER RUNNING!`);
    console.log(`🌐 Storefront:        http://localhost:${PORT}`);
    console.log(`💬 Official WhatsApp: https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36`);
    console.log(`📁 Serving from:      ${ROOT_DIR}`);
    console.log(`======================================================\n`);
});
