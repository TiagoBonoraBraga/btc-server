import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    findAll():Promise<User>{
        return this.prisma.user.findMany();
    }

    findOne(id: string) {
        return `This action returns a #${id} user`;
    }

    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return `This action removes a #${id} user`;
    }
}
