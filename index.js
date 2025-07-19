import express from 'express';
import cors from 'cors';
import pacienteRoute from './routes/paciente.js';

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.use('/api/paciente', pacienteRoute);

app.get('/', (req, res) => {
  res.send('Servidor backend en http://localhost:' + port);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
