import express, {
  type Request,
  type Response,
} from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { endpoints } from './endpoints';

/**
 * api
 */

const app = express();

const dir = path.dirname(fileURLToPath(import.meta.url));

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use('/images', express.static(path.resolve(dir, 'images')));

endpoints.forEach((endpoint) => {
  app[endpoint.method || 'get'](endpoint.path, (req: Request, res: Response) => {
    setTimeout(() => {
      res.send(endpoint.controller
        ? endpoint.controller(req)
        : {});
    }, 1500);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Dev server listening at http://localhost:3000/');
});
