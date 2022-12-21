// import { CreateGameInput } from './create-game.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGameInput {
  @Field(() => Int)
  id: number;

  @Field((type) => Boolean, { nullable: true })
  isActive: boolean;

  @Field((type) => Int, { nullable: true })
  gameWinner: number;

  @Field((type) => Int, { nullable: true })
  player1Hits: number;

  @Field((type) => Int, { nullable: true })
  player2Hits: number;

  @Field(() => Int)
  player1Id: number;

  @Field(() => Int)
  player2Id: number;
}
