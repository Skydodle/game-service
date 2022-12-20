import { Injectable } from '@nestjs/common';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prismaService: PrismaService) {}

  // we first need to call initPlayer()
  // const playerOne = initPlayer()
  // fetch('playerGraphQL') // does mutation to initialize and return an id
  create() {
    return this.prismaService.game.create({
      data: {
        player1Id: 0, // playerOne.id
        player2Id: 1,
        gameWinner: 0,
        player1Hits: 1,
        player2Hits: 2,
      },
    });
  }

  findAll() {
    return `This action returns all game`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameInput: UpdateGameInput) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}