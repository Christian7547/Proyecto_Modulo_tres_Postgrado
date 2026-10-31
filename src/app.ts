import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));


app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API de Gestor de Gastos activa' });
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}

export default app;