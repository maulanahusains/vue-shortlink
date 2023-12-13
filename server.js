import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `https://urlbae.com${req.path}`,
      headers: {
        'Authorization': req.headers.authorization,
        // Tambahkan header lain yang diperlukan
      },
      data: req.body,
    });

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.send(response.data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});