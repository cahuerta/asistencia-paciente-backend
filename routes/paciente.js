import express from 'express';
import { generarInforme } from '../services/gptService.js';
import { generarPDF } from '../services/pdfService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    const informe = await generarInforme(datos);
    const pdfBuffer = await generarPDF(informe, datos.nombre);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=orden_examenes.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error en /api/paciente:', error);
    res.status(500).json({ error: 'Error al generar informe' });
  }
});

export default router;
