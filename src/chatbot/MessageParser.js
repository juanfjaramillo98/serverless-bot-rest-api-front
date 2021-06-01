class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (
      lowercase.includes("hola") ||
      lowercase.includes("hi") ||
      lowercase.includes("hello")
    ) {
      this.actionProvider.saludo();
    }

    if (lowercase.includes("reset")) {
      this.actionProvider.reset();
    }
  }
}

export default MessageParser;
