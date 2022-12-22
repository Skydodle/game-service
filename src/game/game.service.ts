import { Injectable } from '@nestjs/common';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prismaService: PrismaService) {}

  // Initialize game
  create() {
    return this.prismaService.game.create({
      data: {},
    });
  }

  // Update playerIDs once players are initialized
  updatePlayerIDs(id: number, { player1Id, player2Id }: UpdateGameInput) {
    // fetch player service for id
    // if null update playerID, if not null no change
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

  async sendAttackP1(id: number, { player1Hits }: UpdateGameInput) {
    const rollChance = Math.random() < 0.5;
    const currentHit = (await this.findOne(id)).player1Hits;
    return this.prismaService.game.update({
      where: { id },
      data: {
        player1Hits: rollChance ? currentHit + 1 : player1Hits,
      },
    });
  }
  async sendAttackP2(id: number, { player2Hits }: UpdateGameInput) {
    const rollChance = Math.random() < 0.5;
    const currentHit = (await this.findOne(id)).player2Hits;
    return this.prismaService.game.update({
      where: { id },
      data: {
        player2Hits: rollChance ? currentHit + 1 : player2Hits,
      },
    });
  }

  updateWinner(id: number, { gameWinner }: UpdateGameInput) {
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
