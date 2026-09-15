const express = require('express');

const app = express();
const adminRouter = express.Router();


adminRouter.use((req, res, next) => {
  console.log('[Group-level] Admin middleware executed');
  next();
});


adminRouter.get('/', (req, res) => {
  res.send('Welcome to Admin Home');
});


adminRouter.get('/dashboard', (req, res) => {
  res.send('Welcome to Admin Dashboard');
});


adminRouter.get('/settings', (req, res) => {
  res.send('Welcome to Admin Settings');
});


app.use('/admin', adminRouter);


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});


app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
