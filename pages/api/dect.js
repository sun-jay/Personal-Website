const { JSDOM } = require("jsdom");

export default async function handler(req, res) {
  try {
    // Extract query parameters from the request
    const { word } = req.query;  // Assuming the query param is named 'word'

    // Base URLs for the dictionary and sentences pages
    const dictionaryBaseUrl = 'https://www.merriam-webster.com/dictionary/';
    const sentencesBaseUrl = 'https://www.merriam-webster.com/sentences/';

    // Construct the full URLs with the query parameter
    const dictionaryUrl = `${dictionaryBaseUrl}${encodeURIComponent(word)}`;
    const sentencesUrl = `${sentencesBaseUrl}${encodeURIComponent(word)}`;

    // Fetch the webpage for the dictionary URL
    const dictionaryResponse = await fetch(dictionaryUrl);
    if (!dictionaryResponse.ok) {
      throw new Error('Failed to fetch dictionary page');
    }
    const dictionaryHtml = await dictionaryResponse.text();

    // Fetch the webpage for the sentences URL
    const sentencesResponse = await fetch(sentencesUrl);
    if (!sentencesResponse.ok) {
      throw new Error('Failed to fetch sentences page');
    }
    const sentencesHtml = await sentencesResponse.text();

    // Extract the text content from both HTMLs
    const dictionaryText = extractText(dictionaryHtml);
    const sentencesText = extractText(sentencesHtml);

    // Combine the outputs
    const output = `
      Dictionary Text: ${dictionaryText}
      
      Sentences Text: ${sentencesText}
      
      Dictionary URL: ${dictionaryUrl}
      
      Sentences URL: ${sentencesUrl}
    `;

    // Send the combined output back
    res.status(200).send(output);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Failed to fetch pages' });
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
