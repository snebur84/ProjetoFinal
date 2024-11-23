import express from 'express';
import userRoutes from './routes/userRoutes';
import connectDB from './database/connection';

const app = express();
app.use(express.json());

connectDB();

app.use('/', userRoutes);

export default app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});