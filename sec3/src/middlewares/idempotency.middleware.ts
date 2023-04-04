import { NextFunction, Request, Response } from 'express';
import { logger } from '@utils/logger';

export const IdempotencyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('===idempotency check');

  return next();
};
