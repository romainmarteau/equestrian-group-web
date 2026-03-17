import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, address, affiliation, role, message } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [new Date().toISOString(), name, email, phone, address, affiliation, role, message],
        ],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return res.status(500).json({ message: 'Failed to add to sheet' });
  }
}
