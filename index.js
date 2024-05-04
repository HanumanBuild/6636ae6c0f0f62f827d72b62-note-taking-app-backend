const userRoutes = require('./routes/user');
const noteRoutes = require('./routes/note');
app.use('/user', userRoutes);
app.use('/note', noteRoutes);