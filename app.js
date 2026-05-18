const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mi App Docker</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 500px;
          }

          h1 {
            color: #2563eb;
          }

          p {
            font-size: 18px;
          }

          .badge {
            display: inline-block;
            margin-top: 15px;
            padding: 8px 14px;
            background: #dcfce7;
            color: #166534;
            border-radius: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Aplicación Dockerizada</h1>
          <p>Esta es una app sencilla hecha con JavaScript, Node.js y Express.</p>
          <p>Ideal para practicar Docker, ECR, Kubernetes o despliegues en la nube.</p>
          <div class="badge">App funcionando correctamente</div>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "La aplicación está funcionando correctamente",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});