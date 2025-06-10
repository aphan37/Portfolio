import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const IMAGES = [
  {
    name: 'profile.jpg',
    url: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=800&auto=format&fit=crop',
    alt: 'Professional headshot profile image'
  },
  {
    name: 'cnn-brain.jpg',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop',
    alt: 'Neural network visualization'
  },
  {
    name: 'bsu-tech.jpg',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    alt: 'Computer science education'
  },
  {
    name: 'wifi-security.jpg',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cybersecurity visualization'
  }
];

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  await fs.writeFile(filepath, buffer);
}

async function main() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  
  try {
    await fs.access(imagesDir);
  } catch {
    await fs.mkdir(imagesDir, { recursive: true });
  }

  for (const image of IMAGES) {
    const filepath = path.join(imagesDir, image.name);
    console.log(`Downloading ${image.name}...`);
    await downloadImage(image.url, filepath);
    console.log(`Downloaded ${image.name}`);
  }
}

main().catch(console.error); 