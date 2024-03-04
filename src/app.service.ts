import { Injectable, Request } from '@nestjs/common';
import { PrismaService } from './prisma.servisces';
import { error } from 'console';
import { token } from './dto/user.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(user:token) {
    if(!user){
      return error('user token not found or invalid', 401)
    }
    const profile = await this.prisma.profile.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (profile) {
      console.log(profile)
      return profile;
    } else {
      return await this.prisma.profile.create({
        data: {
          userId: user.id,
          name: user.name,
          imgUrl: user.imageUrl,
          email: user.emailAddress
        },
      });
    }
  }
}
