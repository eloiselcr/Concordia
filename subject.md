# ✈️ Architecture & Développement du SI "FlyManager"

## 📝 Modalités

* **Public :** Bachelor / Master II.
---

## 1. Introduction

Bienvenue chez **FlyManager**, une startup ambitieuse qui souhaite digitaliser le secteur de l'aviation privée. Jusqu'à présent, la réservation de jets et la gestion de la flotte s'effectuaient via des fichiers Excel et des échanges de mails fastidieux.

Votre mission est de concevoir le **Système d'Information (SI)** de demain : une plateforme web multi-services permettant de gérer en temps réel les appareils, les équipages et les réservations clients.

---

## 2. Consignes Générales

* **Séparation des services :** Le Front-end, le Back-end et la Base de données doivent être strictement séparés.

* **Design Patterns :** L'utilisation de patterns (Repository, Service, Factory, etc.) est fortement encouragée pour garantir la maintenabilité.

* **Utilisation de l'IA :** Autorisée comme assistant de développement. Cependant, tout code généré doit être documenté et **maîtrisé**. Une question sur une ligne de code non comprise sera sanctionnée.

* **Git :** Un commit par fonctionnalité. Les messages de commit doivent être explicites.

---

## 3. Étapes du Projet (Progressivité)

### Étape 0 : Rédaction de l'architecture

Création du schéma de l'architecture complète du systeme d'information.

### Étape 1 : Le Cœur du SI (API & Auth)

Développement du socle Backend.

* Initialisation d'un serveur API avec un framework 
* Mise en place de l'authentification **JWT** (Stateless).
* Implémentation du CRUD pour les entités : `Utilisateurs`, `Avions`, `Vols`.
* Gestion des rôles : `ADMIN` (gère la flotte), `PILOTE` (voit ses vols), `CLIENT` (réserve).

### Étape 2 : L'Interface de Contrôle (Frontend)

Développement de l'application cliente (SPA).

* Création des interfaces de connexion et d'inscription.
* Développement d'un dashboard dynamique consommant l'API.
* Mise en place d'un système de gestion d'état (Store) pour le token et les infos utilisateur.

### Étape 3 : L'Infrastructure (Dockerisation)

Passage à une architecture conteneurisée.

* Écriture des `Dockerfiles` (optimisés, multi-stage recommandés).
* Rédaction du `docker-compose.yml` pour orchestrer : l'API, le Front, et la BDD

### Étape 4 : Fiabilité (CI/CD)

Mise en place d'un pipeline automatisé sur GitLab.

* Validation du code (Linting).
* Construction automatique des images Docker à chaque push sur la branche `main`.
* *Bonus :* Intégration de tests unitaires bloquants en cas d'échec.

### Étape 5 : Scalabilité & Micro-services

Ajout de services transverses pour simuler une montée en charge.

* **Logistique :** Service de notification (simulation d'envoi d'emails via un worker ou une librairie dédiée).

* **Observabilité :** Centralisation des logs applicatifs.

### Étape Bonus : Scalabilité & Micro-services
 - Developpement des test unitaires
 - Mise en production sur un GCP ou Coolify
 - Mise en place de Kubernetes pour la clusterisation
 - Mise en place d'un service de gestion de log
---

## 5. Technologies : 

(Express, Spring Boot, NestJS...).
(PostgreSQL ou MySQL ou MongoDB).

Le choix technologique et l'archecture ne sont pas restrients mais le choix de l'archecture doit être justifié. 

Il est minima  attendu : 
- Une architecture bien séparé : FRONT, API, BDD
- Utilisation d'un framwork obligatoire 
  - Back-end : ExpressJS, Springboot, Flask...
  - Ex Front : ReactJS, VueJS, Angular...
  - Ex BDD : SQL, Postgres, MongoDB...
- La contenairaisation doit être faite via DOCKER et docker-compose pour la gestion mutli service.
- Ne pas refaire la poudre, priviligier l'utilisation de librairies utiles (UI/UX, appel API, gestion d'authentification etc..)

- L'authentification doit être faite en JWT.

## 6. Pré-requis à installer

Avant de commencer, assurez-vous d'avoir installé sur vos postes :

* **Runtime :** Node.js (LTS), Java JDK, ou Python selon votre choix de framework.
* **Gestionnaire de version :** Git.
* **Container :** Docker & Docker Desktop (ou Docker Engine).
* **Outils API :** Postman ou Insomnia pour tester vos endpoints.

---

## 📥 Livrables

1. Dépôt Git (Historique propre, README complet).

2. Dossier d'Architecture (PDF) incluant schémas (UML, Infra) et justifications techniques.

4. Démonstration technique lors d'une soutenance.

---

## ⚠️ Attention (Points de vigilance)

* **Zéro Secret :** Aucun fichier `.env` ne doit être poussé sur Git. Utilisez un `.env.example`.

* **Persistence :** N'oubliez pas de déclarer des **volumes Docker** pour votre base de données, sinon vos données disparaîtront à chaque redémarrage.

* **CORS :** Attention à la configuration des CORS pour permettre à votre Front de communiquer avec votre API.

* **Utilisation** d'IA pour le developpement est autorisé mais le code généres doit être maitrisé a 100%

* **Utilisation** * de l'IA pour la conception de l'architecture est autorisé, mais seulement en 2ème étape (faire d'abord un premier jet avec documentation)

---

<img width="720" height="726" alt="image" src="https://github.com/user-attachments/assets/c46e6101-b1b2-4311-a553-120e0a701d83" />

