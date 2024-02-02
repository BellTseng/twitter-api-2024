const express = require('express')
const helpers = require('./_helpers');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const cors = require('cors');

const app =express()
const apiPort =5000

// Configure CORS
const corsOptions = {
//   origin: ['http://35.72.223.230','http://35.72.223.230:5000'],
  origin: ['http://localhost','http://localhost:5000'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// use helpers.getUser(req) to replace req.user
function authenticated(req, res, next){
  // passport.authenticate('jwt', { ses...
};

//app.get('/', (req, res) => res.send('Hello World!'))

/**
 * @swagger
 * /health:
 *   get:
 *     description: 返回一條問候消息
 *     responses:
 *       200:
 *         description: 成功的回應，帶有一條問候消息
 */

let isSystemHealthy = true; // Set the initial health status

// Custom middleware to handle health check
app.get('/health', (req, res, next) => {
  if (isSystemHealthy) {
    // If the system is healthy, respond with 200 OK
    //res.status(200).json({ status: 'OK' });
    res.status(200).json('OK');
  }
});

// 生成 Swagger 規範
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '我的API',
      version: '1.0.0',
      description: '我的API描述',
    },
    // servers:[{url:'http://35.72.223.230'},],
    servers:[{url:'http://localhost'},],
  },
  apis: ['app.js'], // 替換為你的API路由文件的路徑
};

const swaggerSpec = swaggerJSDoc(options);

// 提供 Swagger UI，這會使用原有的 API 規範
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// 提供 Swagger UI，這會使用原有的 API 規範
app.listen(apiPort, () => {
  console.log(`服務器運行在端口 ${apiPort}`);
});

module.exports = app
