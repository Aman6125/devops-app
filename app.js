const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>DevOps CI/CD Project</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', sans-serif;
    }

    body {
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: white;
      overflow: hidden;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      animation: fadeIn 1.5s ease-in-out;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      animation: slideDown 1s ease;
    }

    p {
      font-size: 1.2rem;
      color: #ddd;
      margin-bottom: 20px;
      animation: fadeIn 2s ease;
    }

    .badge {
      background: #00c6ff;
      color: black;
      padding: 10px 25px;
      border-radius: 25px;
      font-weight: bold;
      margin-top: 10px;
      animation: pop 1.5s ease;
    }

    .tech {
      margin-top: 20px;
      font-size: 1rem;
      color: #bbb;
    }

    .btn {
      margin-top: 30px;
      padding: 12px 30px;
      border: none;
      border-radius: 30px;
      background: #ff7e5f;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s;
    }

    .btn:hover {
      background: #feb47b;
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }

    @keyframes slideDown {
      from {transform: translateY(-50px); opacity: 0;}
      to {transform: translateY(0); opacity: 1;}
    }

    @keyframes pop {
      0% {transform: scale(0);}
      100% {transform: scale(1);}
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 DevOps CI/CD Pipeline</h1>
    <p>Automated deployment using Jenkins, Docker & AWS EC2</p>

    <div class="badge">Live Deployment Successful</div>

    <div class="tech">
      Tech Stack: Jenkins • Docker • AWS • Node.js
    </div>

    <button class="btn" onclick="window.open('https://github.com/Aman6125')">
      View GitHub
    </button>
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
