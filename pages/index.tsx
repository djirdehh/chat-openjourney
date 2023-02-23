import { Container, Flex, Stack, TextInput } from "@mantine/core";
import { ChatBubble } from "./components";
import { IconSearch } from "@tabler/icons-react";

export default function IndexPage() {
  return (
    <Container size="xs" px="xs" style={{ height: "100%", marginTop: 20 }}>
      <Flex
        mih="80%"
        mah={500}
        miw="100%"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        style={{ overflowY: "auto" }}
      >
        <Stack style={{ width: "100%" }}>
          <ChatBubble botBubble>Hi! How can I help you?</ChatBubble>
          <ChatBubble>
            Can you help generate a nice long message that is geared towards
            making our lives easier
          </ChatBubble>
          <ChatBubble botBubble>Sure...</ChatBubble>
        </Stack>
      </Flex>
      <TextInput
        icon={<IconSearch size={18} />}
        placeholder="What would you like to generate?"
        size="md"
        radius="md"
        variant="filled"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.blue[7],
            },
          },
        })}
      />
    </Container>
  );
}
