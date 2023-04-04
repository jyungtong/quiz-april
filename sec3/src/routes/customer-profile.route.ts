import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';

export class CustomerProfileRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.patch('/customers', AuthMiddleware, (_, res) => res.send('Success'));
    this.router.get('/customers', AuthMiddleware, (_, res) => res.send('Success'));
  }
}
