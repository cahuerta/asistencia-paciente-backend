import express from 'express';
import cors from 'cors';
import pacienteRoute from './routes/paciente.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/paciente', pacienteRoute);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
