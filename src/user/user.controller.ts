import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: "Criar novo Usuário"
  })

  async create(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.create(data);
  }

  @Get()
  @ApiOperation({
    summary: "Listar todos os usuários"
  })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Visualizar usuários por ID"
  })
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Atualizar usuários pelo ID"
  })
  async update(
    @Param('id') id: string,
    @Body() data: CreateUserDto,
  ): Promise<User> {
    return await this.userService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: "Deletar usuários pelo Id"
  })
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}



