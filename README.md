# Portfolio Maminomena Halinirina Sergio
## Développeur Junior - L3 Informatique de Gestion, Génie Logiciel et Intelligence Artificielle

---

## 📁 Structure du Projet

```
portfolio/
│
├── index.html                 # Page d'accueil
├── apropos.html              # Page À propos
├── competences.html          # Page Compétences
├── projets.html              # Page Projets
├── experience.html           # Page Expérience
├── contact.html              # Page Contact
│
├── css/
│   └── style.css             # Feuille de styles principale
│
├── js/
│   └── script.js             # Scripts JavaScript
│
├── images/
│   ├── profile.jpg           # Photo de profil
│   ├── projet1.jpg           # Screenshot projet 1
│   └── projet2.jpg           # Screenshot projet 2
│
├── Cv.pdf                    # Curriculum Vitae (à ajouter)
│
└── README.md                 # Ce fichier
```

---

## 🚀 Comment Utiliser

### 1. Installation
1. Télécharger/cloner le dossier `portfolio`
2. Placer le CV au format PDF dans le dossier racine avec le nom `Cv.pdf`
3. Ajouter les images dans le dossier `images/`

### 2. Ajouter les Images

#### Photo de profil (`images/profile.jpg`)
- Dimension recommandée: 300x300px minimum
- Format: JPG ou PNG
- Utilisation: Photo de profil circulaire sur toutes les pages

#### Screenshots des projets
- `images/projet1.jpg` : Heytens Boutique
- `images/projet2.jpg` : Whisky Shop
- Dimension recommandée: 600x400px ou 800x600px

### 3. Ajouter le CV
- Placer un fichier `Cv.pdf` à la racine du dossier `portfolio`
- Il sera téléchargeable via le bouton "Voir mon CV" sur la page d'accueil

---

## 🔗 Personnaliser les Liens

### Réseaux Sociaux
Dans le code HTML, cherchez les sections avec les icônes et remplacez les placeholders :

**Accueil (index.html) :**
```html
<a href="https://github.com/" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
<a href="https://www.messenger.com/" target="_blank">Messenger</a>
```

**Contact (contact.html) :**
Mêmes liens à mettre à jour

**À remplacer par :**
```html
<a href="https://github.com/votreProfil" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/in/votreProfil/" target="_blank">LinkedIn</a>
<a href="https://m.me/votreID" target="_blank">Messenger</a>
```

### Projets
Dans `projets.html`, mettez à jour les liens des projets :

```html
<!-- Remplacer # par le vrai lien -->
<a href="https://votrelien.com" class="project-link">Voir le projet</a>
<a href="https://github.com/votreProfil/repo" target="_blank" class="project-link">Voir le code</a>
```

---

## 🎨 Personnaliser le Design

### Couleurs
Les couleurs sont définies en variables CSS dans `css/style.css` :

```css
:root {
    --color-yellow: #F4E4A6;           /* Jaune principal */
    --color-yellow-dark: #E8D500;      /* Jaune boutons */
    --color-white: #FFFFFF;            /* Blanc */
    --color-brown: #6B6B47;            /* Marron header */
    --color-orange: #D4A76A;           /* Orange barres */
    /* ... autres couleurs */
}
```

Vous pouvez modifier ces valeurs hexadécimales pour changer la palette.

### Typographie
Les polices et tailles sont définies en variables :

```css
--font-family: 'Arial', 'Helvetica', sans-serif;
--font-size-base: 16px;
--font-size-xl: 28px;
/* ... autres tailles */
```

### Espacements
Modifiez les espacements via les variables `--spacing-*`.

---

## 🔧 Modifier le Contenu

### Informations Personnelles
Recherchez et mettez à jour :
- Nom : MAMINOMENA
- Prénom : Halinirina Sergio
- Date de naissance
- Adresse
- Email
- Téléphone

### Compétences
Modifiez les barres de progression dans `competences.html` :

```html
<div class="skill-item">
    <div class="skill-name">HTML5</div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%;"></div>
    </div>
</div>
```

Changez le pourcentage `width: 90%` selon votre niveau.

### Projets
Modifiez les informations des projets dans `projets.html` :
- Titres
- Technologies utilisées
- Descriptions
- Liens

---

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à :
- **Ordinateur** : 1200px+
- **Tablette** : 768px - 1199px
- **Téléphone** : moins de 768px

Les breakpoints sont définis en bas du fichier `css/style.css`.

---

## 🔐 Sécurité et Accessibilité

✅ **Sécurité**
- Liens externes avec `rel="noopener noreferrer"`
- Pas de données sensibles stockées localement
- Validation côté client du formulaire

✅ **Accessibilité**
- Structure HTML sémantique
- Alt text pour toutes les images
- Labels pour les champs de formulaire
- Navigation au clavier
- Contraste suffisant entre texte et fond

---

## 📧 Formulaire de Contact

Le formulaire de contact valide les champs côté client avec JavaScript.

**Important :** Pour un vrai envoi d'emails, vous devez :

### Option 1 : EmailJS (recommandé)
```javascript
// Ajouter EmailJS dans script.js
// https://www.emailjs.com/
```

### Option 2 : Backend personnalisé
Créer un serveur (Node.js, PHP, Python, etc.) qui traite les formulaires.

### Option 3 : Service tiers
- Formspree (https://formspree.io/)
- Basin (https://basingrid.com/)
- Netlify Forms

Pour l'instant, le formulaire affiche juste un message de confirmation.

---

## 🚀 Deployer le Portfolio

### Déploiement Gratuit

#### 1. GitHub Pages
1. Créer un repo `username.github.io`
2. Pusher le dossier portfolio
3. Le site sera disponible à `https://username.github.io`

#### 2. Netlify
1. Connecter votre repo GitHub
2. Déployer en 1 clic
3. URL automatique générée

#### 3. Vercel
1. Importer le repo
2. Déployer automatiquement
3. Domaine fourni

#### 4. Heroku
1. Créer une app
2. Pusher le code
3. Site en ligne

---

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles, flexbox, grid
- **JavaScript Vanilla** : Interactivité sans framework
- **SVG** : Icônes et vagues décoratives

---

## ✨ Améliorations Futures

- [ ] Formulaire d'envoi d'emails fonctionnel
- [ ] Mode sombre
- [ ] Animations supplémentaires
- [ ] Blog ou article
- [ ] Galerie des projets avec filtres
- [ ] Téléchargement du CV en deux formats (PDF, DOCX)
- [ ] Intégration de statistiques
- [ ] Chat en direct

---

## 📝 Notes Importantes

### Placeholders à Remplacer

Avant de publier, cherchez et remplacez les placeholders suivants :

1. **Réseaux sociaux** : `https://github.com/`, `https://www.linkedin.com/`, etc.
2. **Projets** : Les liens `#` dans la page projets
3. **Images** : `images/profile.jpg`, `images/projet1.jpg`, `images/projet2.jpg`
4. **PDF** : Ajouter `Cv.pdf` dans le dossier racine

### Fichiers à Ajouter

- `Cv.pdf` (votre curriculum vitae)
- `images/profile.jpg` (votre photo de profil)
- `images/projet1.jpg` (screenshot ou image du projet 1)
- `images/projet2.jpg` (screenshot ou image du projet 2)

---

## 📞 Support

Si vous avez des questions sur le code ou besoin de modifications supplémentaires, consultez les commentaires dans chaque fichier.

---

## 📄 License

Ce portfolio a été créé pour Maminomena Halinirina Sergio.

---

**Bonne chance avec votre recherche de stage ! 🎓**
