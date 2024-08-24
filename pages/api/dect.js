const { JSDOM } = require("jsdom");

export default async function handler(req, res) {
  try {
    // Extract query parameters from the request
    const { word } = req.query;  // Assuming the query param is named 'word'

    // Base URL for the dictionary page
    const dictionaryBaseUrl = 'https://www.merriam-webster.com/dictionary/';

    // Construct the full URL with the query parameter
    const dictionaryUrl = `${dictionaryBaseUrl}${encodeURIComponent(word)}`;

    // Fetch the webpage for the dictionary URL
    const dictionaryResponse = await fetch(dictionaryUrl);
    if (!dictionaryResponse.ok) {
      throw new Error('Failed to fetch dictionary page');
    }
    const dictionaryHtml = await dictionaryResponse.text();

    // Extract the text content from the HTML
    const dictionaryText = extractText(dictionaryHtml);

    // Combine the output
    const output = `
      Dictionary Text: ${dictionaryText}
      
      Dictionary URL: ${dictionaryUrl}

      For more examples visit https://www.merriam-webster.com/sentences/${word}
    `;

    // Send the output back
    res.status(200).send(output);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
}

// Function to extract text from HTML using JSDOM
function extractText(html) {
  // Create a new JSDOM instance with the provided HTML
  const dom = new JSDOM(html);

  // Get the document from the JSDOM instance
  const { document } = dom.window;

  // Extract text content from the document's body and replace multiple spaces with a single space
  let txt = document.body.textContent || "";
  txt = txt.replace(/\s+/g, ' ');

  return txt;
}
