const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>DevOps CI/CD Project</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .card {
      text-align: center;
      background: rgba(255,255,255,0.1);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2rem;
      color: #ddd;
    }
    .badge {
      margin-top: 20px;
      display: inline-block;
      padding: 10px 20px;
      background: #00c6ff;
      border-radius: 20px;
      color: black;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 DevOps CI/CD Pipeline</h1>
    <p>Successfully deployed using Jenkins, Docker & AWS EC2</p>
    <div class="badge">Live Deployment</div>
  </div>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
