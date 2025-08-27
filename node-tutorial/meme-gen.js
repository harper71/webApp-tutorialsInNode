#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const MEME_API_URL = 'https://meme-api.com/gimme/100';
const OUTPUT_FILE = path.join(__dirname, 'top_memes.json');

async function fetchTopMemes() {
  try {
    const response = await axios.get(MEME_API_URL);

    console.log(response.status);
    
    if (response.status !== 200 || !response.data || !response.data.memes) {
      throw new Error('Invalid API response structure');
    }

    const memes = response.data.memes;

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(memes, null, 2));
    console.log(`✅ Successfully saved ${memes.length} memes to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('❌ Error fetching memes:', error.message);
  }
}

fetchTopMemes();