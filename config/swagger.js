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
        url: 'https://farmfresh-api.onrender.com',
        description: 'Production server (Render)',
      },
      {
        url: 'http://localhost:3000',
        description: 'Local development server',
      }
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
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
