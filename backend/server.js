// const express=require('express');
// const cors=require('cors');
// const app=express();
// app.use(cors());
// app.use(express.json());

// app.get('/api/message', (req, res) => {
//   res.json({
//     message: 'Hello from Backend huu huuu ki',
//     greet: 'hii'
//   });
// });
// app.listen(5000, ()=> console.log('Backend running on http://localhost:5000'));

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hurrah! You connected the frontend and backend 🎉' });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));

