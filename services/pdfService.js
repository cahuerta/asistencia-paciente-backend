import PDFDocument from 'pdfkit';
import getStream from 'get-stream';

export async function generarPDF(texto, nombrePaciente) {
    const doc = new PDFDocument();
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {});

    doc.fontSize(14).text('Instituto de Cirugía Articular', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Nombre del paciente: ${nombrePaciente}`);
    doc.moveDown();
    doc.fontSize(12).text(texto, { align: 'left' });
    doc.moveDown();
    doc.moveDown();
    doc.text('Firma: ___________________________', { align: 'left' });
    doc.text('Dr. Cristóbal Huerta', { align: 'left' });
    doc.text('Traumatólogo – Instituto de Cirugía Articular', { align: 'left' });

    doc.end();
    return await getStream.buffer(doc);
}
