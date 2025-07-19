import PDFDocument from 'pdfkit';
import getStream from 'get-stream';

export async function generarPDF(texto, nombre) {
  const doc = new PDFDocument();
  doc.fontSize(16).text('Instituto de Cirugía Articular', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(texto);
  doc.moveDown(2);
  doc.text('Firma médica:', { align: 'left' });
  doc.text('Dr. Cristóbal Huerta\nTraumatólogo', { align: 'left' });
  doc.end();
  return await getStream.buffer(doc);
}
