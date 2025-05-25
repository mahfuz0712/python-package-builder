// read package.json and update the version

const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'package.json');
const ppbPath = path.join(process.cwd(), 'src', 'ppb.js');

if (!fs.existsSync(filePath)) {
  console.error('package.json not found in current directory.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

let newVersion;
if (!data.version) {
  newVersion = '1.0.0';
  data.version = newVersion;
} else {
  // Simple semver patch bump: x.y.z -> x.y.(z+1)
  const parts = data.version.split('.').map(Number);
  if (parts.length === 3 && parts.every(n => !isNaN(n))) {
    parts[2] += 1;
    newVersion = parts.join('.');
    data.version = newVersion;
  } else {
    newVersion = '1.0.0';
    data.version = newVersion;
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Version updated to ${data.version}`);

// Update metadata.version in src/ppb.js
if (fs.existsSync(ppbPath)) {
  let ppbContent = fs.readFileSync(ppbPath, 'utf-8');
  ppbContent = ppbContent.replace(
    /(version:\s*['"`])([\d.]+)(['"`])/,
    `$1${newVersion}$3`
  );
  fs.writeFileSync(ppbPath, ppbContent, 'utf-8');
  console.log(`src/ppb.js metadata.version updated to ${newVersion}`);
} else {
  console.warn('src/ppb.js not found, skipping metadata.version update.');
}
