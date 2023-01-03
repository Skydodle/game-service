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

  @Field((type) => Int, { nullable: true })
  player1Id: number;

  @Field((type) => Int, { nullable: true })
  player2Id: number;

  @Field((type) => Boolean)
  isActive: boolean;

  @Field((type) => Int, { nullable: true })
  gameWinner: number;
}
// TODO FILL THIS OUT TO GENERATE CODE FIRST GRAPHQL SCHEMA
