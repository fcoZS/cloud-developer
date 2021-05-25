import { Router, Request, Response } from 'express';
import axios from 'axios';
import { config } from '../../../../config/config';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const { image_url } = req.query;
  const filteredPath = await axios.get(`${config.dev.image_service}/filteredimage?image_url=${image_url}`);

  return res.status(200).send(filteredPath);
});

export const ImageRouter: Router = router;