const fs = require('fs');
const path = require('path');

// Site configuration
const SITE_URL = 'https://ehmi.se';
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'port-sitemap.xml');

// Pages to include in sitemap (excluding 404, _app, api routes)
const PAGES = [
  '/',
  '/about',
  '/contact',
  '/projects',
  '/social',
  '/work',
  '/discord',
  '/github',
  '/instagram',
  '/line',
  '/linkedin',
  '/telegram',
  '/trustme',
  '/twitch',
  '/x',
];

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// Generate sitemap with separate sections
function generateSitemap() {
  const currentDate = getCurrentDate();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  

  
  // Add all pages
  xml += '  <!-- Pages -->\n';
  PAGES.forEach((page) => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${page === '/' ? '' : page}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += `    <priority>${page === '/' ? '1.0' : '0.7'}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  
  return xml;
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate and write sitemap
const sitemap = generateSitemap();
fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');

console.log(`✅ Sitemap generated successfully at ${SITEMAP_PATH}`);
console.log(`   Included ${PAGES.length} pages`);