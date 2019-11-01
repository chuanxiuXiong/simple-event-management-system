import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/foodEvents', route);
  route.get('/all', (req: Request, res: Response) => {
    return res.json({ events: req.body }).status(200);
  });
};
