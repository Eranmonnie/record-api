import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { token } from 'src/dto/user.dto';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    try {
      const data = request.headers.authorization.split(' ');
      const user: token = {
        id: data[0],
        name: ` ${data[1]} ${data[2]}`,
        imageUrl: data[3],
        emailAddress: data[4],
      };
      if (user) {
        try {
          request.user = user;
          return true;
        } catch (error) {
          throw new UnauthorizedException('Invalid token');
        }
      } else {
        throw new UnauthorizedException('Invalid or missing token');
      }
    } catch (error) {
      console.error('invalid or missing token');
    }
  }
}
