import express from 'express';
import catalogRouter from './routes/catalog.js';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200);
    res.json({ message: "hello" });
})

app.get('/catalog', (req, res) => {
    res.status(200);
    res.json({ message: "test" });
})

export default app;
