const express = require('express');
const PlaneRoutes = require('./routes/PlaneRoutes');

const mon_serveur = express();

mon_serveur.use(express.json());
mon_serveur.use("/", PlaneRoutes);

/* 
// ex : 
mon_serveur.use("/v1/", PlaneRoutes);
--> http://localhost:3000/v1/api/planes/
*/

mon_serveur.listen(3000, () => {
    console.log("Serveur allumé sur le port 3000");
});
