const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mon API Express',
      version: '1.0.0',
      description: 'Documentation de mon API avec Swagger et Express',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // Chemins vers les fichiers contenant les commentaires JSDoc
  apis: ['./app.js', './routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
