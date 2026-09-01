# 📂 Cahier des Charges : Système d'Information "FlyManager"

**Version :** 1.0

**Statut :** Expression de Besoin Client (Métier)

**Destinataire :** Équipe de réalisation

---

## 1. Introduction & Vision

La société **FlyManager** opère dans le secteur de l'aviation privée de luxe. Notre activité croît rapidement et nos outils actuels (tableurs partagés et e-mails) ne permettent plus de garantir la sécurité et la fluidité de nos opérations.

Nous souhaitons faire développer un **Système d'Information Web centralisé**. Ce système doit être capable de gérer nos actifs (avions), nos ressources humaines (pilotes) et notre flux de vente (réservations clients).

---

## 2. Modalités de réalisation

* **Indépendance technique :** En tant que client, nous ne vous imposons pas de langage de programmation. Cependant, nous exigeons une solution **moderne, modulaire et conteneurisée** pour faciliter nos futurs déploiements.
* **Évolutivité :** Le projet doit être livré par étapes incrémentales, de la gestion de base jusqu'à l'optimisation des services.
* **Justification :** Chaque choix technique (type de base de données, framework, structure du code) devra être justifié dans un dossier d'architecture annexé au code.

---

## 3. Description des Besoins Métiers (Fonctionnalités)

### Étape 1 : Accès sécurisés et rôles

Le système doit être privé. Nous avons besoin de distinguer trois types de profils :

* **Le Client :** Peut créer son compte, consulter les offres et suivre ses réservations.
* **Le Pilote :** Doit pouvoir consulter son planning de vol personnel.
* **L'Administrateur :** Possède une vue d'ensemble et gère les ressources de l'entreprise.

> **Besoin clé :** Une connexion sécurisée où chaque utilisateur ne voit que ce qui le concerne.

### Étape 2 : Gestion de la flotte d'avions

Nous devons répertorier nos appareils. Chaque avion est défini par :

* Un nom de modèle et une immatriculation unique.
* Une capacité de passagers.
* Une autonomie (en km) et une vitesse.
* Un coût d'exploitation à l'heure.

> **Besoin clé :** L'administrateur doit pouvoir mettre à jour ce catalogue en temps réel.

### Étape 3 : Workflow de Réservation

C'est le moteur de notre revenu. Le processus doit être le suivant :

1. Un **Client** soumet une demande de vol (Départ, Arrivée, Date, Nombre de passagers).
2. Le système doit permettre à l'**Administrateur** de valider cette demande et d'y affecter un **Pilote** et un **Avion** disponible.
3. Le statut du vol doit être traçable : *En attente, Confirmé, Annulé, Terminé*.

### Étape 4 : Automatisation et Robustesse

Nous ne voulons plus d'erreurs humaines lors des mises à jour du site.

* Le déploiement doit être automatisé (si vous modifiez le code, le système doit se tester et se préparer tout seul).
* L'ensemble du système doit pouvoir démarrer sur n'importe quel serveur avec une seule commande technique.

### Étape 5 : Services à Haute Valeur Ajoutée

Pour nous démarquer, le SI doit proposer :

* **Performance :** Les recherches de vols ne doivent pas ralentir le système, même avec beaucoup d'utilisateurs.
* **Notifications :** Le client doit être informé (simulation) dès que son vol est confirmé par l'administrateur.
* **Traçabilité :** Toutes les actions critiques (une suppression d'avion, une validation de vol) doivent être enregistrées dans un journal de bord (logs).

---

## 4. Consignes & Contraintes de livraison

### Pré-requis techniques imposés

Bien que vous soyez libre de l'implémentation, le client impose ces standards de livraison :

* **Docker & Docker-compose :** Pour garantir que nous puissions lancer votre solution sans installer de dépendances complexes.
* **Git :** L'historique de votre travail doit être visible (pas d'envoi de fichier .zip).
* **Sécurité :** Aucune donnée sensible (mots de passe, clés secrètes) ne doit apparaître en clair dans le code source.

### Livrables attendus

1. **Dossier d'Architecture :** Un document expliquant votre schéma de base de données, vos choix de frameworks et comment vos services communiquent entre eux.
2. **Code Source :** Propre, commenté et organisé.
3. **Guide d'installation :** Un fichier simple expliquant comment démarrer votre application de A à Z.

---

## ⚠️ Points d'attention du Client

* **La cohérence :** Un avion ne peut pas être à deux endroits différents à la même heure.
* **La maîtrise :** En cas d'utilisation d'Intelligence Artificielle pour vous aider à coder, vous devez être capable d'expliquer chaque fonction développée.
* **L'ergonomie :** Le système doit être simple d'utilisation pour un client non-informaticien.

---


Pour encadrer le développement sans imposer de technologie, voici les **Règles de Gestion (RG)** que les étudiants devront traduire en algorithmes. Ces règles constituent le "moteur métier" de FlyManager.

---

## 📐 Annexe : Règles de Gestion Métier

Le client (FlyManager) exige que les règles suivantes soient respectées scrupuleusement dans la logique du système.

### RG 1 : Calcul de la distance et du prix

Le prix d'un vol n'est pas fixe. Il doit être calculé dynamiquement par le système.

* **Distance :** Le système doit calculer la distance entre la ville de départ et d'arrivée (vous pouvez utiliser une formule simplifiée ou une API de géolocalisation).
* **Prix Final :** Le prix est déterminé par la formule suivante :

```
Prix = (Distance / Vitesse Moyenne Avion) x Coût Horaire Avion x 1.20
```

*(Le coefficient 1.20 correspond à la marge de 20% de FlyManager).*

### RG 2 : Disponibilité et Conflits

Un avion ou un pilote ne peut pas avoir le don d'ubiquité.

* **Conflit Avion :** Un avion ne peut pas être assigné à un vol si l'heure de départ de celui-ci se situe entre l'heure de départ et l'heure d'arrivée d'un autre vol déjà **Confirmé**.

* **Conflit Pilote :** La même règle s'applique aux pilotes. Le système doit bloquer ou alerter l'administrateur en cas de chevauchement.

### RG 3 : Capacité et Sécurité

* **Surcharge :** Une demande de réservation doit être refusée si le nombre de passagers saisis par le client est supérieur à la capacité maximale de l'avion choisi.
* **Autonomie :** Le système doit empêcher l'affectation d'un avion à un trajet dont la distance dépasse son rayon d'action (autonomie).

### RG 4 : Cycle de Vie d'un Vol

Le statut d'un vol est strictement réglementé. Voici le diagramme d'état que le métier impose :

* **Annulation :** Un client peut annuler un vol tant qu'il est "En attente". Une fois "Confirmé", seul l'administrateur peut l'annuler.
* **Clôture :** Seul le pilote peut passer un vol en "Terminé".

---

## 📋 Grille d'Évaluation (Barème suggéré)

| Critère | Description | Points |
| --- | --- | --- |
| **Analyse & Conception** | Qualité du dossier d'architecture, schéma de BDD cohérent et choix techniques justifiés. | /4 |
| **Respect du Métier** | Implémentation correcte des RG (Calcul prix, gestion des conflits, statuts). | /5 |
| **Sécurité & Auth** | Robustesse du JWT, gestion des rôles (RBAC) et protection des données. | /3 |
| **Infrastructure** | Dockerisation propre, volumes pour la BDD, orchestration fonctionnelle. | /3 |
| **DevOps & Qualité** | Pipeline CI/CD fonctionnel sur GitLab, propreté du code, absence de secrets sur Git. | /3 |
| **Services Avancés** | Implémentation réussie de Redis (Cache) et du système de Logs/Notifications. | /2 |

---

### Prochaine étape pour vous :

Ce dossier est maintenant complet. Souhaitez-vous que je vous génère un **modèle de fichier `README.md**` ou un **exemple de fichier `.env.example**` pour aider vos étudiants à démarrer sur de bonnes bases de documentation ?