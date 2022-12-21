import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Game {
  @Field((type) => Int)
  id: number;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;

  @Field((type) => Int)
  player1Id: number;

  @Field((type) => Int)
  player2Id: number;

  @Field((type) => Boolean)
  isActive: boolean;

  @Field((type) => Int, { nullable: true })
  gameWinner: number;

  @Field((type) => Int, { nullable: true })
  player1Hits: number;

  @Field((type) => Int, { nullable: true })
  player2Hits: number;
}
// TODO FILL THIS OUT TO GENERATE CODE FIRST GRAPHQL SCHEMA
