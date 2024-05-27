import { Box, Container, IconButton, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" p={4}>
        <Text fontSize="2xl" fontWeight="bold">Note Taking App</Text>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={6}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {/* Placeholder for notes */}
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Text>No notes yet. Click the + button to add a new note.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Floating Action Button */}
      <IconButton
        icon={<FaPlus />}
        colorScheme="blue"
        size="lg"
        isRound
        position="fixed"
        bottom={6}
        right={6}
        aria-label="Add Note"
      />
    </Box>
  );
};

export default Index;