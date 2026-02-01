# 🚀 AVARIO - Site Vitrine

**La stratégie digitale au service de votre croissance**

Site officiel d'AVARIO - Conseil en marketing digital pour TPE, PME et entrepreneurs.

---

## 📋 À propos

AVARIO accompagne les entreprises de Seine-Maritime et d'Île-de-France dans leur transformation digitale :
- 🔍 **SEO/SEA** : Référencement naturel et payant
- 📱 **Réseaux sociaux** : Community management et création de contenus
- 📊 **Data & Automatisation** : Analytics et workflows marketing
- 🎨 **Création de contenus** : Photo, vidéo, design graphique

---

## 🌐 Déploiement sur GitHub Pages

### Étape 1 : Créer un compte GitHub

1. Rendez-vous sur [github.com](https://github.com)
2. Cliquez sur **Sign up**
3. Créez votre compte avec l'email : `bolatoglu.iann.pro@gmail.com`
4. Choisissez un nom d'utilisateur (exemple : `avario-marketing` ou `iannbolatoglu`)

---

### Étape 2 : Créer un nouveau repository

1. Une fois connecté, cliquez sur le bouton **+** en haut à droite
2. Sélectionnez **New repository**
3. Configurez le repository :
   - **Repository name** : `avario-marketing.github.io` ⚠️ **IMPORTANT : respectez exactement ce format**
   - **Description** : "Site officiel AVARIO - Marketing Digital"
   - **Public** (laissez coché)
   - **NE PAS** initialiser avec un README
4. Cliquez sur **Create repository**

---

### Étape 3 : Uploader les fichiers du site

**Tous les fichiers sont dans ce dossier. Vous devez uploader :**

```
avario-site/
├── index.html          (page principale)
├── css/
│   └── style.css       (styles)
├── js/
│   └── script.js       (interactions)
└── README.md           (ce fichier)
```

**Méthode : Upload via l'interface web GitHub**

1. Sur la page de votre repository vide, cliquez sur **uploading an existing file**
2. Ouvrez le dossier `avario-site` sur votre ordinateur
3. **Sélectionnez TOUS les fichiers** :
   - `index.html`
   - Le dossier `css/` (avec `style.css` dedans)
   - Le dossier `js/` (avec `script.js` dedans)
   - `README.md`
4. **Drag & drop** tous ces fichiers dans la zone GitHub
5. Attendez que l'upload se termine (barre de progression)
6. En bas de la page, section "Commit changes" :
   - Message : `Initial commit - Site AVARIO`
7. Cliquez sur **Commit changes**

---

### Étape 4 : Activer GitHub Pages

1. Dans votre repository, cliquez sur l'onglet **Settings** (en haut)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Section **Source** :
   - **Branch** : sélectionnez `main` (ou `master`)
   - **Folder** : sélectionnez `/ (root)`
4. Cliquez sur **Save**

**GitHub va builder votre site (attendre 1-2 minutes)**

---

### Étape 5 : Vérifier que le site est en ligne

1. Attendez 2 minutes (GitHub construit le site)
2. Retournez dans **Settings > Pages**
3. Vous verrez un message vert : 
   ```
   ✅ Your site is live at https://avario-marketing.github.io
   ```
4. **Cliquez sur ce lien** → Votre site est en ligne ! 🎉

---

## 🎨 Personnalisation

### Changer les couleurs

Ouvrez le fichier `css/style.css` et modifiez les variables CSS (lignes 14-19) :

```css
:root {
    --primary-blue: #0066FF;      /* Bleu principal */
    --primary-violet: #6B4FBB;     /* Violet secondaire */
    --accent-orange: #FF6B35;      /* Orange accent */
    --dark-gray: #2C3E50;          /* Textes */
    --light-gray: #F8F9FA;         /* Fonds clairs */
    --white: #FFFFFF;
}
```

### Ajouter des images

1. Créez un dossier `images/` à la racine
2. Ajoutez vos photos :
   - `hero.jpg` (image de fond hero, 1920x1080px)
   - `seo.jpg`, `social.jpg`, `data.jpg`, `content.jpg` (images services, 800x600px)
3. Dans `index.html`, remplacez les placeholders par vos images :

```html
<!-- Exemple section hero -->
<div class="hero" style="background-image: url('images/hero.jpg');">
```

### Modifier les textes

Tous les textes sont dans `index.html`. Ouvrez le fichier et modifiez directement les contenus.

---

## 🌐 Ajouter un nom de domaine personnalisé (optionnel)

### Objectif : Passer de `avario-marketing.github.io` à `avario.fr`

1. **Acheter le domaine** (9€/an)
   - Rendez-vous sur [OVH.com](https://www.ovh.com) ou [Namecheap.com](https://www.namecheap.com)
   - Recherchez `avario.fr`
   - Achetez-le

2. **Configurer les DNS**
   - Dans votre compte OVH/Namecheap, allez dans la **Zone DNS**
   - Ajoutez ces enregistrements :

   ```
   Type: A
   Nom: @
   Valeur: 185.199.108.153

   Type: A
   Nom: @
   Valeur: 185.199.109.153

   Type: A
   Nom: @
   Valeur: 185.199.110.153

   Type: A
   Nom: @
   Valeur: 185.199.111.153

   Type: CNAME
   Nom: www
   Valeur: avario-marketing.github.io.
   ```

3. **Configurer GitHub Pages**
   - Dans votre repository, allez dans **Settings > Pages**
   - Section **Custom domain** : entrez `avario.fr`
   - Cochez **Enforce HTTPS**
   - Sauvegardez

4. **Attendre 24-48h** (propagation DNS)

✅ Votre site sera accessible sur **avario.fr** !

---

## 📱 SEO & Réseaux Sociaux

### Optimiser pour Google

Le site est déjà optimisé avec :
- ✅ Balises meta (titre, description, keywords)
- ✅ Structure HTML sémantique (H1, H2, H3...)
- ✅ Liens internes
- ✅ Vitesse de chargement optimisée
- ✅ Responsive design (mobile-friendly)

### Partager sur les réseaux

**LinkedIn :**
```
🚀 Mon site AVARIO est en ligne !

Découvrez mes services en marketing digital pour TPE/PME :
✅ SEO/SEA
✅ Réseaux sociaux
✅ Data & automatisation
✅ Création de contenus

→ https://avario-marketing.github.io

#MarketingDigital #Entrepreneuriat #SEO
```

**Instagram bio :**
```
🚀 AVARIO | Marketing Digital
📍 Seine-Maritime & Île-de-France
✨ SEO • Réseaux Sociaux • Google Ads
👇 Découvrez mes services
```

Lien dans la bio → `https://avario-marketing.github.io`

---

## 🔧 Maintenance

### Modifier le site

1. Allez sur votre repository GitHub
2. Cliquez sur le fichier à modifier (ex: `index.html`)
3. Cliquez sur l'icône **crayon** (Edit this file)
4. Faites vos modifications
5. En bas, cliquez sur **Commit changes**
6. Attendez 1-2 min → les modifications sont en ligne !

### Ajouter une nouvelle page

1. Créez un nouveau fichier `services.html`, `blog.html`, etc.
2. Uploadez-le sur GitHub
3. Ajoutez un lien dans le menu de navigation (`index.html`)

---

## 📊 Analytics (optionnel)

Pour suivre vos visiteurs, ajoutez Google Analytics :

1. Créez un compte sur [analytics.google.com](https://analytics.google.com)
2. Obtenez votre ID de suivi (ex: `G-XXXXXXXXXX`)
3. Ajoutez ce code juste avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Dépannage

### Le site ne s'affiche pas

- Vérifiez que le repository s'appelle bien `[votre-username].github.io`
- Vérifiez que GitHub Pages est activé dans **Settings > Pages**
- Attendez 2-5 minutes après l'activation

### Les styles ne s'appliquent pas

- Vérifiez que le dossier `css/` et le fichier `style.css` sont bien uploadés
- Vérifiez le chemin dans `index.html` : `<link rel="stylesheet" href="css/style.css">`

### Le menu mobile ne fonctionne pas

- Vérifiez que le fichier `js/script.js` est bien uploadé
- Vérifiez le chemin dans `index.html` : `<script src="js/script.js"></script>`

---

## 📞 Support

**Besoin d'aide ?**

📧 Email : bolatoglu.iann.pro@gmail.com  
📱 Téléphone : 07 67 72 59 80  
💼 LinkedIn : [Iann Bolatoglu](https://www.linkedin.com/in/iann-bolatoglu/)

---

## 📄 Licence

© 2026 AVARIO - Tous droits réservés

Site développé par Iann Bolatoglu | BTS Communication | Alternance Épicerie Sabah

---

## 🚀 Prochaines étapes

Après la mise en ligne :

1. ✅ Ajouter des vraies photos (remplacer les placeholders)
2. ✅ Créer un logo sur Canva
3. ✅ Acheter un nom de domaine `avario.fr`
4. ✅ Configurer Google Analytics
5. ✅ Partager sur LinkedIn et Instagram
6. ✅ Ajouter des témoignages clients réels
7. ✅ Créer un portfolio avec études de cas

---

**Fait avec 💙 par Iann Bolatoglu**

🚀 **Votre site AVARIO est prêt à décoller !**
