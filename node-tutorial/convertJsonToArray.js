const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'top_memes.json');
const OUTPUT_FILE = path.join(__dirname, 'memesArray.js');

try {
  // Step 1: Read the existing JSON file
  const jsonData = fs.readFileSync(INPUT_FILE, 'utf-8');
  const memesArray = JSON.parse(jsonData);

  // Step 2: Convert it to a stringified JS array for export
  const jsContent = `export const memesArray = ${JSON.stringify(memesArray, null, 2)};\n`;

  // Step 3: Write to a new .js file
  fs.writeFileSync(OUTPUT_FILE, jsContent);

  console.log(`✅ Saved memes array to ${OUTPUT_FILE}`);
} catch (error) {
  console.error('❌ Error:', error.message);
}
