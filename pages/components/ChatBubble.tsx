import { Alert, createStyles } from "@mantine/core";

const useStyles = (botBubble: boolean) => {
  return createStyles(() => ({
    bubble: botBubble
      ? {
          background:
            "linear-gradient(90deg, rgba(81,7,150,1) 0%, rgba(52,67,182,1) 100%)",
          border: 0,
          borderTopLeftRadius: 1,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          minWidth: 200,
          maxWidth: 300,
        }
      : {
          background:
            "linear-gradient(90deg, rgba(147,2,169,1) 0%, rgba(158,8,115,1) 100%)",
          border: 0,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 1,
          minWidth: 300,
          maxWidth: 400,
          marginLeft: "auto",
        },
  }));
};

interface Props {
  botBubble?: boolean;
  children: React.ReactNode;
}

export function ChatBubble({ botBubble = false, children }: Props) {
  const { classes } = useStyles(botBubble)();

  return <Alert className={classes.bubble}>{children}</Alert>;
}
