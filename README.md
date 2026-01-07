# Reflex'ô bien-être Corrèze

## 📌 Présentation du projet
**Reflex'ô bien-être Corrèze** est un site vitrine développé pour un cabinet de réflexologie et de médecine traditionnelle chinoise situé au sud de **Brive-la-Gaillarde (Corrèze)**.

Le site met en valeur l'expertise de la praticienne, détaille ses prestations, explique les bénéfices des soins proposés et communique sur les valeurs du cabinet.  
Son objectif principal : **renforcer la visibilité locale** du cabinet et fournir un **support de communication professionnel** dans le cadre d'une création d'entreprise.

---

## 🎯 Objectifs du projet
- Créer un site vitrine **moderne et professionnel** avec une identité visuelle forte
- Optimiser le **référencement naturel (SEO)** pour améliorer la visibilité locale, sans recourir au référencement payant (SEA)
- Garantir d'**excellentes performances** (scores élevés sur PageSpeed Insights)
- Accompagner le **lancement d'une activité** et construire une présence digitale solide
- Offrir à la cliente une **autonomie éditoriale** via un CMS headless intuitif

---

## 🚀 Fonctionnalités principales
- **CMS headless Sanity** pour la gestion autonome des contenus (actualités, blog à venir, recettes)
- **Carrousel d'actualités** dynamique sur la page d'accueil
- Pages détaillées : présentation des services, à propos de la praticienne
- **Formulaire de contact** avec envoi d'emails via EmailJS
- **Prise de rendez-vous** intégrée via Calendly
- **Routing dynamique** avec Vue Router pour une navigation fluide
- **Design responsive** optimisé pour mobile, tablette et desktop
- **Optimisation SEO avancée** :
  - Balises meta dynamiques
  - Structure HTML sémantique
  - Attributs `alt` sur toutes les images
  - Fichiers `robots.txt` et sitemap XML
  - Ciblage de mots-clés locaux et sectoriels
- **Chargement optimisé** des images et des ressources
- **Animations subtiles** pour enrichir l'expérience utilisateur sans nuire aux performances

---

## 🛠️ Stack technique
- **Frontend** : Vue.js 3.5, Vue Router
- **CMS** : Sanity.io (headless CMS)
- **Styling** : SASS (architecture modulaire)
- **Emails** : EmailJS
- **Qualité de code** : TypeScript, ESLint
- **Déploiement** : Vercel
- **Nom de domaine** : Ionos

---

## 🧩 Architecture & bonnes pratiques

### Architecture du projet
- **Architecture modulaire par feature** (ex : dossier `price`)
  - `views/` : pages principales (`Price.vue`)
  - `components/` : composants spécifiques à la feature
  - `routes/` : centralisation des routes (`routesName.ts`, `routesPath.ts`)
- **Composants globaux** réutilisables dans `general/components/`
- **Gestion de la réactivité** via des composables dédiés (`reactives/isMobile.ts`)
- **Préparation à l'internationalisation** avec un système de traductions (`i18n/fr.json`)
- **Variables d'environnement** sécurisées via `.env`

### Gestion des données & CMS
- Récupération des contenus depuis **Sanity** via des requêtes **GROQ**
- **Gestion des états de chargement** et rendu conditionnel dans les composants Vue
- **Schémas Sanity structurés** (actualités, articles de blog, recettes)
- **Mise à jour du contenu sans redéploiement** grâce au CMS headless

### Clean code & conventions
- **Nommage cohérent** : `camelCase` pour les variables/fonctions, `PascalCase` pour les composants
- **Composants courts et responsables** d'une seule fonctionnalité (principe de responsabilité unique)
- **TypeScript** pour un code typé et maintenable
- **Linting strict** avec ESLint pour garantir la qualité du code
- **Centralisation des constantes** (routes, breakpoints, configurations)
- **Palette de couleurs** définie via des variables SASS réutilisables

---

## 🎨 Conception & design
- **Maquettes réalisées sur Figma** avec validation client
- Définition du **branding** : palette de couleurs, typographies, hiérarchie visuelle
- Approche **mobile-first** pour garantir une expérience optimale sur tous les supports
- **Validation de l'ergonomie** et de l'identité visuelle avant le développement

---

## ⚠️ Défis techniques rencontrés
- **Première intégration de Sanity en production** : prise en main du studio et compréhension de l'architecture headless
- **Configuration du déploiement** et des webhooks pour la synchronisation automatique du contenu
- **Réflexion stratégique sur l'architecture du CMS** pour garantir autonomie client, SEO et évolutivité
- **Création d'une roue interactive des saisons** : développement d'un composant graphique complexe avec découpage circulaire en SASS et gestion des interactions utilisateur

---

## 🧠 Apprentissages
- **Mise en production d'un CMS headless** de A à Z
- **Gestion de projet avec un client réel** : communication, recueil des besoins, validation des livrables
- **Déploiement professionnel** d'un site web (configuration DNS, certificat SSL, monitoring)
- **Gestion complète du cycle de vie** : conception → développement → mise en ligne → maintenance
- **Consolidation des compétences Vue.js 3** (Composition API, routing, réactivité)
- **Application concrète des techniques SEO** sur un projet réel avec enjeux commerciaux

---

## 👤 Rôle dans le projet
- **Conception UX/UI** et réalisation des maquettes Figma
- **Développement frontend** complet (Vue.js, SASS, TypeScript)
- **Intégration et configuration du CMS** Sanity
- **Mise en ligne** et configuration du déploiement (Vercel + DNS)
- **Maintenance** et support technique

---

## 🔮 Améliorations futures
- **Ajout d'un blog** pour renforcer le référencement naturel (prévu début 2026)
- **Section dynamique « recettes de cuisine »** en lien avec les conseils en diététique chinoise
- **Optimisation avancée des performances** (lazy loading, compression d'images next-gen)
- **Analytics** pour suivre le trafic et le comportement des visiteurs

---

## 🌍 Démo
🔗 **Lien vers le site** : *[ici](https://reflexo-bien-etre.fr/accueil)*  
📸 **Screenshots** : 

<img width="800" height="400" alt="Capture d’écran 2026-01-07 à 09 47 33" src="https://github.com/user-attachments/assets/6d492d5d-0095-4a95-a22d-7d76f658044d" /> <img width="200" height="400" alt="Capture d’écran 2026-01-07 à 09 49 34" src="https://github.com/user-attachments/assets/7c0c3918-35a0-4f5b-bdb6-a6b15ae91dce" />


<img width="800" height="400" alt="Capture d’écran 2026-01-07 à 09 47 46" src="https://github.com/user-attachments/assets/ea966a43-576f-4880-9d2f-ec208acfc554" />



