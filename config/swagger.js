const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FarmFresh Market Hub API',
      version: '1.0.0',
      description: 'API documentation for the FarmFresh Market Hub',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Change to Render URL after deployment
        description: 'Local server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./routes/*.js'], // Adjust if needed
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
