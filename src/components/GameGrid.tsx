import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardConatainer";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardConatainer>
          ))}
        {games.map((game) => (
          <GameCardConatainer>
            <GameCard key={game.id} game={game} />
          </GameCardConatainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
