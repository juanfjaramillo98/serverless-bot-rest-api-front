class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  saludo = () => {
    const message = this.createChatBotMessage("Hola amigo.");
    this.addMessageToState(message);
  };

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [this.createChatBotMessage("Mensajes eliminados")],
    }));
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
