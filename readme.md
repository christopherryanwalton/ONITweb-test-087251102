# ON IT Solutions Website

Professional IT services website built with React and optimized for Coolify deployment.

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run serve
```

## 🐳 Coolify Deployment

### Method 1: Docker (Recommended)

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **In Coolify Dashboard:**
   - Create New Resource → Application
   - Select "Public Repository"
   - Enter your repository URL
   - Build Pack: Docker
   - Port: 3000

3. **Configure Environment Variables:**
   - Go to Environment Variables tab
   - Add your .env variables

4. **Deploy:**
   - Click "Deploy"
   - Domain will be auto-configured (e.g., it.waltontech.work)

### Method 2: Node.js Build Pack

1. **In Coolify:**
   - Build Pack: Node.js
   - Build Command: `npm ci && npm run build`
   - Start Command: `npx serve -s build -l 3000`
   - Port: 3000

## 📁 Project Structure

```
on-it-solutions-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── ContactPage.js
│   │   └── Footer.js
│   ├── config/
│   │   └── index.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env.example
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_SITE_NAME` | Website name | ON IT Solutions |
| `REACT_APP_SITE_TAGLINE` | Site tagline | Managed IT Services |
| `REACT_APP_SITE_URL` | Production URL | https://your-domain.com |
| `REACT_APP_CONTACT_EMAIL` | Contact email | info@example.com |
| `REACT_APP_CONTACT_PHONE` | Phone number | (555) 123-4567 |
| `REACT_APP_ENABLE_CONTACT_FORM` | Enable form | true |
| `REACT_APP_SHOW_TEAM_PROFILES` | Show team section | false |

### Customization

1. **Update Contact Info:** Edit `.env` file
2. **Change Colors:** Modify Tailwind classes in components
3. **Add Logo:** Replace favicon.ico in public folder
4. **Update Content:** Edit text in component files

## 🚀 Features

- ✅ Single Page Application with React Router
- ✅ Responsive design for all devices
- ✅ SEO optimized with meta tags
- ✅ Contact form with validation
- ✅ Environment-based configuration
- ✅ Docker containerization
- ✅ Animated service bubbles
- ✅ Professional business layout

## 📝 To-Do

- [ ] Add email integration (EmailJS/SendGrid)
- [ ] Migrate from Tailwind CDN to build process
- [ ] Add team member profiles
- [ ] Implement blog section
- [ ] Add service detail pages
- [ ] Analytics integration

## 🛠️ Troubleshooting

### Coolify Issues

1. **Build fails:** Check Node version (requires 18+)
2. **Port issues:** Ensure port 3000 is specified
3. **Routing not working:** Check _redirects file exists
4. **Environment variables:** Use Coolify's env var interface

### Local Development

1. **npm install fails:** Delete node_modules and package-lock.json, retry
2. **Port 3000 in use:** Change port in package.json serve script
3. **Blank page:** Check browser console for errors

## 📧 Support

For deployment help or questions, contact your development team.

## 📄 License

© 2025 ON IT Solutions. All rights reserved.
git clone <your-repo-url>
   cd on-it-solutions-website
   ```

2. **Install dependencies**
   ```bash