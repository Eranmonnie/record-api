import { $Enums, Prisma } from '@prisma/client'; 

export class Member implements Prisma.MemberCreateInput {
    id?: string;
    role?: $Enums.MemberRole;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    profile: Prisma.ProfileCreateNestedOneWithoutMembersInput;
    server: Prisma.ServerCreateNestedOneWithoutMembersInput;
}