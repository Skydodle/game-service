import { Injectable } from '@nestjs/common';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prismaService: PrismaService) {}

  create() {
    // fetch ('playerGraphQL').initPlayer to get player IDs
    return this.prismaService.game.create({
      data: {},
    });
  }

  // receive game id and update player IDs
  updatePlayerIDs(id: number, { player1Id, player2Id }: UpdateGameInput) {
    // do want to be to able to change
    // do want to be able to change 1 time
    // if null we can change
    // if !null no change
    return this.prismaService.game.update({
      where: { id },
      data: {
        player1Id,
        player2Id,
      },
    });
  }

  findAll() {
    return this.prismaService.game.findMany();
  }

  findOne(id: number) {
    return this.prismaService.game.findUnique({
      where: { id },
      select: { id: true, player1Hits: true, player2Hits: true },
    });
  }

  update(id: number, { gameWinner }: UpdateGameInput) {
    return this.prismaService.game.update({
      where: { id },
      data: {
        gameWinner,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.game.delete({
      where: { id },
    });
  }
}

// send attack(attackingPlayerId) -----from client to game ----> game rollChance---> if true increment playerHit by 1 then check if count =10
// 10 = win
// when we increment a playerHit column if === 10 trigger gameOver
// gameWinner set winning player's id
// gameover ==> set isActive to false
