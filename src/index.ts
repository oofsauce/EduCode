import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const {
  PORT = 3000
} = process.env;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world!',
  })
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
  });
}

export default app;