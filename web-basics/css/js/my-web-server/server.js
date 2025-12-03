import { createServer } from 'http';

const server = createServer((req, res) => {
  const now = new Date().toLocaleString();
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Node.js Dynamic Response</title>
    <style>
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 0; padding: 2rem; }
      .card { max-width: 720px; margin: 4rem auto; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
      h1 { margin: 0 0 0.75rem; font-size: 1.75rem; }
      .time { font-weight: 700; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Simple HTTP Server (Node.js)</h1>
      <p>This page is rendered dynamically from a Node.js server.</p>
      <p>Current date & time: <span class="time">${now}</span></p>
    </div>
  </body>
</html>`;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
