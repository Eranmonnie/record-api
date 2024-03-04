import { Prisma } from '@prisma/client'; 

export class Profile implements Prisma.ProfileCreateInput {
  id?: string;
  userId: string;
  name: string;
  imgUrl: string;
  email: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  servers?: Prisma.ServerCreateNestedManyWithoutProfileInput;
  members?: Prisma.MemberCreateNestedManyWithoutProfileInput;
  channels?: Prisma.ChannelCreateNestedManyWithoutProfileInput;
  firstName: string;
  lastName: string ;
  emailAddress: any;
  
}
