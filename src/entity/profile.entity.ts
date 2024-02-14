import { Prisma } from '@prisma/client';

export class Profile implements Prisma.UserCreateInput {
  DOB: string;
  id: string;
  userId :string;
  name:string;
  imgUrl :string;
}
