import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { GameService } from './game.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from '../prisma/prisma.service';
import { Game } from './entities/game.entity';

describe('GameService', () => {
  let service: GameService;
  let prismaMock: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get(GameService);
    prismaMock = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a game', async () => {
    const date = new Date();
    const game: Game = {
      id: 1,
      isActive: true,
      createdAt: date,
      updatedAt: date,
      player1Id: 0,
      player2Id: 0,
      gameWinner: 0,
    };

    prismaMock.game.create.mockResolvedValue(game);

    const result = await service.create();
    expect(result.id).toEqual(game.id);
  });

  it("should udpate game's winner", async () => {
    const date = new Date();
    const game: Game = {
      id: 10,
      createdAt: date,
      updatedAt: date,
      isActive: true,
      player1Id: 1,
      player2Id: 2,
      gameWinner: 0,
    };

    prismaMock.game.update.mockResolvedValue(game);

    const result = await service.updateWinner(game.id, {
      id: game.id,
      isActive: false,
      player1Id: game.player1Id,
      player2Id: game.player2Id,
      gameWinner: 1,
    });

    expect(result.gameWinner).toEqual(game.gameWinner);
    expect(result.isActive).toEqual(game.isActive);
  });
});
