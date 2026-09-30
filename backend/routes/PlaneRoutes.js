const { PrismaClient } = require('@prisma/client');
const express = require('express');

const routeur = express.Router()
const prisma = new PrismaClient();

/*
=========================================
ROUTE GET
=========================================
*/

routeur.get('/api/planes', async (req,res) => {
    /*
    R1-G : Retourne tous les avions dans la base
    */
    const plane = await prisma.planes.findMany()
    res.json(plane)
})

routeur.post('/api/planes', async (req, res) => {
    const plane = await prisma.planes.create({
        data:{
            immatriculation: "CLE-MENT",
            model:"Turbo bibite"
        }
    });
    res.json(plane)
});


// DELETE 
routeur.delete('/api/planes/:id', async (req, res) => {
    const id_recuperer = parseInt(req.params.id);
    try {
        const plane = await prisma.planes.delete({
        where:{
            id: id_recuperer
        }
    });
    res.status(204).json()
    
    } catch (error) {
        res.status(500).json(error)
    }
});


/*
routeur.get('/api/planes/id', async (req, res) => {
    const plane = await prisma.planes.findMany({
        where:({
            id: 19
        })
    });
    res.json(plane)
});
*/

/*
routeur.get('/api/planes/:id', async (req, res) => {
    const id_recuperer = parseInt(req.params.id);
    const plane = await prisma.planes.findMany({
        where:({
            id: id_recuperer
        })
    });
    res.json(plane) 
});
*/

routeur.patch('/api/planes/:id', async (req, res) => {
    const id_recuperer = parseInt(req.params.id);
    const modification = req.body

    console.log(id_recuperer)
    console.log(modification)
    try {
        const plane = await prisma.planes.update({
            where:({
                id: id_recuperer
            }),
            data: modification
    });

    res.status(200).json(plane)

    } catch (error) {
        
    }


});
 




routeur.post('/api/planes/post', async (req, res) => {
    let DataNewPlane = req.body
    console.log(DataNewPlane)

    /*
    DataNewPlane.immatriculation = DataNewPlane.immatriculation+"XX"
    console.log(DataNewPlane)
    */
    /*
    console.log(DataNewPlane.immatriculation)
    DataImmat = DataNewPlane.immatriculation+"XX"
    console.log(DataImmat)
    DataNewPlane.immatriculation = DataImmat
    console.log(Data)
    */

    try {
    const InsertNewPlane = await prisma.planes.create({
        data: DataNewPlane
    });
    console.log(InsertNewPlane)
    res.json(DataNewPlane)
    }
    catch(error_lama){
        console.log(error_lama)
        res.status(400).json()
    }

});



// ANCIENNE VERSION

/* 
let planes = [
    {id: 1, immatriculation: "F-HTYA", model: "Airbus A350", status: "AVAILABLE"},
    {id: 2, immatriculation: "F-AHBF", model: "Cesna 830", status : "MAINTENANCE"}
];


// Route "TEST" -> si user demande adresse/test, alors on renvoie ça :
routeur.get('/api/planes', (req, res) => {
    console.log(req.query);
    console.log(req.query.id);

    if (req.query.id == '1') {
        console.log("cas if")
        res.json(planes[0]);
    } else {
        res.json(planes);
        console.log("cas else")
    }
    //console.log(planes);
});



routeur.post('/api/planes', (req, res) => {
    console.log("fonction post");
    const NewPlane = req.body;
    console.log(req.body);
    planes.push(NewPlane);
    console.log("plane insert");
    res.json(planes);
    //console.log(req.body);
});


routeur.delete('/api/planes/:id', (req, res) => {
    const id_supprime = parseInt(req.params.id);
    //const ancienne_taile = planes.length;
    try {
        res.status(204).json(planes.filter(avion => avion.id !== id_supprime));       
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Erreur de la suppression de l'avion"})
    }

});


///// DEMO //////
// Route delete by id
routeur.delete('/api/planes/:id', (req, res) => {
    // TOOD -> DELETE ligne de tableau
    id_navigateur = req.params.id;
    console.log("-------TEST : retour de l'id renvoyé par le navigateur---------");
    console.log(id_navigateur);

    // sauvegarde l'ancienne taille pour la comparer à la nouvelle
    const ancienne_taile = planes.length;
    console.log("-------TEST : affiche de la taille d'origine de planes---------");
    console.log(planes.length);

    // On convertit car req.params.id est en VARCHAR, mes id de planes sont en int
    const id_supprime = parseInt(id_navigateur);
    console.log("-------TEST : vérification du correct parseInt de l'id du navigateur---------");
    console.log(id_supprime);

    // planes se reconstruit et inclus tout sauf la ligne de l'avion concerné par id_supprime
    planes = planes.filter(avion => avion.id !== id_supprime);

    console.log("-------TEST : affiche de la nouvelle taille pour comparaison---------");
    console.log(planes.length);

    if (planes.length < ancienne_taile) {
        res.status(204).json(planes);
    } else { // si on a pas supprimé 
        res.status(404).json({message: "Erreur de la suppression de l'avion"})
    }



});


// TODO
// -> creer un get /id
// -> MaJ route POST -> increment auto id (plus d'id dans le body psot)
// -> Creer route UPDATE et comprendre difference entre UPDATE et PATCH
// -> route qui retourne l'heure du serveur


routeur.get('/api/date', (req, res) => {
    const date = new Date();
    console.log(date);
    // Décalage de 2h (en ms)
    const dateUtcPlus2 = new Date(date.getTime() + (2 * 60 * 60 * 1000));

    console.log(dateUtcPlus2)
    // On remplace le Z final par +02:00
    const dateFormatee = dateUtcPlus2.toISOString().replace('Z', '+02:00');
    console.log(dateFormatee); //   
    res.json(dateFormatee);

});

*/

module.exports = routeur;