import express from 'express';
import catalogRouter from './routes/catalog.js';
const app = express();

app.use(express.json());

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
