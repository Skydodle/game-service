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
    return this.prismaService.game.findFirst({
      where: { id: id },
    });
  }

  updateWinner(id: number, { gameWinner }: UpdateGameInput) {
    return this.prismaService.game.update({
      where: { id },
      data: {
        gameWinner,
        isActive: false,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.game.delete({
      where: { id },
    });
  }
}

/** Outdated logics after moving actions to Player service **
 *
 *
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
 *

 */
