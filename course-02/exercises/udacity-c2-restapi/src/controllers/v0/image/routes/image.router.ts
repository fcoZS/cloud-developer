import { Router, Request, Response } from 'express';
import { config } from '../../../../config/config';

const router: Router = Router();
const request = require('request');

router.get('/', async (req: Request, res: Response) => {
  const { image_url } = req.query;

  if (!image_url) {
      res.status(400).send('bad request: url is required')
  }
  request({
        url: `${config.dev.image_service}/filteredimage?image_url=${image_url}`,
        encoding: null
      },
      (err: any, resp: any, buffer: any) => {
        if (!err && resp.statusCode === 200){
          res.set('Content-Type', 'image/jpeg');
          res.status(200).send(resp.body);
        }
      });
});

export const ImageRouter: Router = router;
