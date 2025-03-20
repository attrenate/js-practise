
const axios = require('axios');

async function decodeTokenIDs(tokenIDs) {
  try {
   
    const apiUrl = 'https://api.openai.com/v1/completions';

    
    const headers = {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    };

    
    const response = await axios.post(apiUrl, {
      model: 'gpt-3.5-turbo',
      prompt: tokenIDs.join(' '), 
      max_tokens: 50,
    }, { headers });

    
    console.log('Decoded message:', response.data.choices[0].text.trim());
  } catch (error) {
    console.error('Error decoding token IDs:', error);
  }
}


const tokenIDs = [1182, 37, 90, 56, 19657, 39, 964, 54, 1950, 38, 2898, 19, 92];


decodeTokenIDs(tokenIDs);

  
