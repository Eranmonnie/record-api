import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
  // Add any other properties from your token payload
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1]; // Assuming JWT is sent in Authorization header
      console.log(token)
      const secretKey = process.env.JWT_SECRET || ''; // Use a specific name for environment variable

      if (token && secretKey) {
        const decodedToken = jwt.verify(token, secretKey) as DecodedToken;
        console.log(decodedToken)
        req["user"] = decodedToken; 
      } else {
        throw new UnauthorizedException('Invalid or missing token');
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    next();
  }
}
