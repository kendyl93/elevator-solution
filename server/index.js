import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/api', (req, res) => {
  res.send({ body: 'Data from server' });


});

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
});
