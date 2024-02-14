import express from 'express';
import catalogRouter from './routes/catalog.js';
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());

app.use('/catalog', catalogRouter);

app.get('/', (req, res) => {
    res.status(200);
    res.json({ message: "system operational" });
})

app.use((err, req, res, next) => {
    // console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});





export default app;
