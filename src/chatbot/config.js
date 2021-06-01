import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/botAvatar/BotAvatar";
import Options from "../components/Options/Options";
const botName = "Wilson";

const config = {
  botName,
  initialMessages: [
    createChatBotMessage(`Hola, mi nombre es ${botName}`),
    createChatBotMessage("En que puedo ayudarte? 😄", {
      widget: "options",
      delay: 500,
    }),
  ],
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <BotAvatar {...props} />,
    // Replaces the default user icon
    // userAvatar: (props) => <MyUserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
