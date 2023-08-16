// src/server.ts
import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/api/health', (req: Request, res: Response) => {
    const data = 'ok';
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}. Access it via http://localhost:${port}/api/health`);
});
