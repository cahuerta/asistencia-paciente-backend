import express from 'express';
import { generarInforme } from '../services/gptService.js';
import { generarPDF } from '../services/pdfService.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const datos = req.body;
        const resultado = await generarInforme(datos);
        const pdfBuffer = await generarPDF(resultado, datos.nombre);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=orden_examenes.pdf');
        res.send(pdfBuffer);
    } catch (err) {
        res.status(500).json({ error: 'Error al procesar solicitud' });
    }
});

export default router;
