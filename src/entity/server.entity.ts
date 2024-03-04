import { Prisma } from '@prisma/client';
import { Profile } from './profile.entity';

export class Server implements Prisma.ServerCreateInput {
  id?: string;
  name: string;
  imgurl: string;
  inviteCode: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  members?: Prisma.MemberCreateNestedManyWithoutServerInput;
  channels?: Prisma.ChannelCreateNestedManyWithoutServerInput;
  profile: Prisma.ProfileCreateNestedOneWithoutServersInput;
}
