import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config(); // carga .env

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('🎸 Nica The Waves API funcionando correctamente');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));
