const fs = require('fs');
const path = require('path');

const POSTS_DIR = './posts';
const BUILD_DIR = './build';
const SRC_DIR = './src';
const TEMPLATE_PATH = './src/template.html';

// Get slug from filename
function getSlug(filename) {
  return path.basename(filename, '.html');
}

// Extract title from h1 tag
function extractTitle(html) {
  const match = html.match(/<h1>(.+?)<\/h1>/);
  return match ? match[1] : 'Untitled';
}

// Extract date from time tag
function extractDate(html) {
  const match = html.match(/<time>(.+?)<\/time>/);
  return match ? match[1] : null;
}

// Build all posts
function build() {
  // Ensure dist directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }

  // Copy styles.css to dist
  fs.copyFileSync('./src/styles.css', path.join(BUILD_DIR, 'styles.css'));

  // Read template
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  // Get all html post files (exclude index.html)
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.html') && f !== 'index.html');

  // Build post metadata for nav
  const posts = files.map(file => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    return {
      slug: getSlug(file),
      title: extractTitle(content),
      date: extractDate(content),
      content: content
    };
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Read index page content
  const indexContent = fs.readFileSync(path.join(POSTS_DIR, 'index.html'), 'utf-8');
  const indexTitle = extractTitle(indexContent);

  // Generate posts nav HTML
  const postsNav = posts
    .map(p => `        <li><a href="${p.slug}.html">${p.title}</a></li>`)
    .join('\n');

  // Generate each post page
  for (const post of posts) {
    const html = template
      .replace('{{title}}', post.title)
      .replace('{{content}}', post.content)
      .replace('{{posts}}', postsNav);

    fs.writeFileSync(path.join(BUILD_DIR, `${post.slug}.html`), html);
    console.log(`Built: ${post.slug}.html`);
  }

  // Create index.html from posts/index.html
  const indexHtml = template
    .replace('{{title}}', indexTitle)
    .replace('{{content}}', indexContent)
    .replace('{{posts}}', postsNav);

  fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), indexHtml);
  console.log('Built: index.html');

  console.log(`\nDone! ${posts.length} posts built to ./build/`);
}

build();
