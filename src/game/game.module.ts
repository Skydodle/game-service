import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [GameResolver, GameService, PrismaService],
})
export class GameModule {}
