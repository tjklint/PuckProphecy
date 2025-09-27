// Axios/Express server setup
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Example route to fetch data from an external API using Axios
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/data');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}