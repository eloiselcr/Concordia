const express = require('express');
const PlaneRoutes = require('./routes/PlaneRoutes');
const { swaggerUi, specs } = require('./config/swagger');

const mon_serveur = express();

mon_serveur.use(express.json());
mon_serveur.use("/", PlaneRoutes);

// Swagger
mon_serveur.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/* 
// ex : 
mon_serveur.use("/v1/", PlaneRoutes);
--> http://localhost:3000/v1/api/planes/
*/

mon_serveur.listen(3000, () => {
    console.log("Serveur allumé sur le port 3000");
});
