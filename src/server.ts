// src/server.ts
import express, { Request, Response } from 'express';
import {colorDominanceRouter} from "./color-dominance/color-dominance.router"

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.use("/api/dominantcolor", colorDominanceRouter);

app.get('/api/health', (req: Request, res: Response) => {
    const data = 'ok';
    res.json(data);
});

app.get('/',function(req,res,next){
    res.render('index',{title:'express'})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}. Access it via http://localhost:${port}/api/health`);
});
