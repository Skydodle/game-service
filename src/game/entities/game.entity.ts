import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Game {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
// TODO FILL THIS OUT TO GENERATE CODE FIRST GRAPHQL SCHEMA
