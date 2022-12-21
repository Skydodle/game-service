import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Game } from './entities/game.entity';
import { CreateGameInput } from './dto/create-game.input';
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
  @Mutation(() => Game, { name: 'UpdateGame' })
  updateGame(@Args('updateGameInput') updateGameInput: UpdateGameInput) {
    return this.gameService.updatePlayerIDs(
      updateGameInput.id,
      updateGameInput,
    );
  }

  @Mutation(() => Game)
  removeGame(@Args('id', { type: () => Int }) id: number) {
    return this.gameService.remove(id);
  }
}
