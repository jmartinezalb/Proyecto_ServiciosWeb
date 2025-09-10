// Datos de ejemplo (en producción usarías una base de datos)
let users = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com' },
  { id: 2, name: 'María García', email: 'maria@email.com' }
];

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  
  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  
  res.json(user);
};

const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' });
  
  users.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};