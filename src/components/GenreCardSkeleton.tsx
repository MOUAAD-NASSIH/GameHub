import {
  HStack,
  Skeleton,
  SkeletonText,
  List,
  ListItem,
} from "@chakra-ui/react";

function GenreCardSkeleton() {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton height="32px" width="32px" />
          <SkeletonText noOfLines={1} />
        </HStack>
      </ListItem>
    </List>
  );
}

export default GenreCardSkeleton;
