import { Test, TestingModule } from '@nestjs/testing';
import { GameResolver } from './game.resolver';
import { GameService } from './game.service';
import { PrismaService } from '../prisma/prisma.service';

describe('GameResolver', () => {
  let resolver: GameResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameResolver, GameService, PrismaService],
    }).compile();

    resolver = module.get<GameResolver>(GameResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
