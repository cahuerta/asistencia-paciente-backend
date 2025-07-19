import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generarInforme(datos) {
  const prompt = `Paciente: ${datos.nombre}, ${datos.edad} años.
Enfermedades previas: ${datos.enfermedades}.
Cirugías previas: ${datos.cirugias}.
Alergias: ${datos.alergias}.
Descripción de los síntomas: ${datos.descripcion}.

Indica los exámenes imagenológicos sugeridos y la especialidad médica adecuada para consulta.`;

  const respuesta = await openai.chat.completions.create({
model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return respuesta.choices[0].message.content;
}
