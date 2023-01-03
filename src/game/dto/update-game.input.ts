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

  @Field(() => Int, { nullable: true })
  player1Id: number;

  @Field(() => Int, { nullable: true })
  player2Id: number;
}
