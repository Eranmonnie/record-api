import { $Enums, Prisma } from '@prisma/client'; 

export class Channel implements Prisma.ChannelCreateInput {
    id?: string;
    name: string;
    channelType?: $Enums.channelType;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    profile: Prisma.ProfileCreateNestedOneWithoutChannelsInput;
    server: Prisma.ServerCreateNestedOneWithoutChannelsInput;
}