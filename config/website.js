const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Nadia Botello - Dev Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Nadia Botello', // Alternative Site title for SEO
  siteTitleShort: 'Nadia Botello', // short_name for manifest
  siteHeadline: 'Full-Stack Developer & Public-Interest Technologist', // Headline for schema.org JSONLD
  siteUrl: 'https://nadiabotello.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/favicons/webicon.jpg', // Used for SEO and manifest
  siteDescription: 'Nadia Botello -- Full-Stack Developer & Public-Interest Technologist',
  author: 'Nadia Botello', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
