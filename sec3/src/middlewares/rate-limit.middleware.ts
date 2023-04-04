import { NextFunction, Request, Response } from 'express';
import { logger } from '@utils/logger';

export const RateLimitMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('===rate limit check');

  return next();
};
