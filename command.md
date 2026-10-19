# --- Commandes principales ---

## Lancer serveur 
npm run serv

## Réinstaller tous les packages
1. supprimer le dossier node_modules
2. npm install


# --- PRISMA ---

## Premier push de la bdd
npx prisma db push

## Nouvelle migration (version de bdd)
npx prisma migrate [env] -- name [commentaire]
--> npx prisma migrate dev --name init
--> npx prisma migrate dev --name add_table_macaron

## Interface graphique 
npx prisma studio

## Envoyer le jeu de données d'exemple
npx prisma db seed

