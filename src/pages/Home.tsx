import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ChakraEditable } from "../components/Editable";

export const Home = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      editable: "please, edit me!",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Container maxW="container.sm">
        <VStack mt="30vh">
          <Heading>Chakra Editable + React Hook Form</Heading>

          <VStack
            w="full"
            rounded="lg"
            border="1px solid"
            borderColor="gray.300"
            spacing={5}
            p={5}
          >
            <ChakraEditable name="editable" control={control} />
            <Button alignSelf="flex-end" size="sm" type="submit">
              Submit
            </Button>
          </VStack>
        </VStack>
      </Container>
    </form>
  );
};
