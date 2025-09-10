const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sequalize =require('./src/config/databases')
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

sequalize.sync()
.then(()=> console.log("DB is ready"))
.catch(err => console.error(err));

app.listen(this.prototype, () => {
  console.log(`Server is running ${PORT}`)
});

app.use(routes.unprotectedRoutes);
/* Routes
app.use('/api/users', userRoutes);*/

/*Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Servicio funcionando' });
});

module.exports = app;*/