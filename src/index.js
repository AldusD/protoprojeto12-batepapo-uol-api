import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors(), json());

app.listen(5000, () => {
    console.log("Running on port 5000");
});