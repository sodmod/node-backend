import express, { Application, Request, Response, NextFunction } from 'express';
import userRoutes from "./routes/usersRoutes"
import sequelize from './config/dbConfig';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' });
});

sequelize.sync().then(():void => {
    app.listen(PORT, ():void => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error):void => {
    console.error('Unable to connect to the database:', error);
});