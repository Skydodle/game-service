import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Game } from './entities/game.entity';
import { UpdateGameInput } from './dto/update-game.input';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Mutation(() => Game, { name: 'CreateGame' })
  createGame() {
    return this.gameService.create();
  }

  @Query(() => [Game], { name: 'ListAllGames' })
  findAll() {
    return this.gameService.findAll();
  }

  @Query(() => Game, { name: 'FindGameById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gameService.findOne(id);
  }

  @Mutation(() => Game, { name: 'UpdatePlayerIDs' })
  updatePlayerIDs(@Args('updateGameInput') updateGameInput: UpdateGameInput) {
    return this.gameService.updatePlayerIDs(
      updateGameInput.id,
      updateGameInput,
    );
  }
  @Mutation(() => Game, { name: 'UpdateWinner' })
  updateWinner(@Args('updateGameInput') updateGameInput: UpdateGameInput) {
    return this.gameService.updateWinner(updateGameInput.id, updateGameInput);
  }

  @Mutation(() => Game)
  removeGame(@Args('id', { type: () => Int }) id: number) {
    return this.gameService.remove(id);
  }
}

/** Outdated mutations after moving action to Player service **
 *
 *
@Mutation(() => Game, { name: 'UpdateP1Hits' })
updateP1Hits(@Args('updateGameInput') updateGameInput: UpdateGameInput) {
  return this.gameService.sendAttackP1(updateGameInput.id, updateGameInput);
}
@Mutation(() => Game, { name: 'UpdateP2Hits' })
updateP2Hits(@Args('updateGameInput') updateGameInput: UpdateGameInput) {
  return this.gameService.sendAttackP2(updateGameInput.id, updateGameInput);
}
 *
 *
**/
