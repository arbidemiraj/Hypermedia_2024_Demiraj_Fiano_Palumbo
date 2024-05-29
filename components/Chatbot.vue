<template>
  <NuxtLink v-on:click="toggleChat">
    <div class="chatbot-icon">
      <img class="chatbot-img" src="assets/images/chatbotIconNoHand.png" alt="ChatbotIcon" />
    </div>
  </NuxtLink>
<div class="chat-box" v-if="isChatVisible">
  <div class="chat-header">
    <div class="chatbot-name">
      <img class="chatbot-img-header" src="assets/images/chatbotIconNoHand.png" alt="ChatbotIcon" />
      <h1><b>Hope</b></h1>
    </div>
    <button class="close-btn" @click="toggleChat"><b>x</b></button>
  </div>
  <div class="chat-content">
    <div class="messageBox">
      <div v-for="(message, index) in defaultMessages" :key="index" class="bot-message">
          <p>{{ message }}</p>
      </div>
      <div v-for="(message, index) in messages" :key="index">
        <div v-if="message.isUser" class="user-message">
          <p>{{ message.content }}</p>
        </div>
        <div v-if="!message.isUser" class="bot-message">
          <p >{{ message.content }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="inputContainer">
    <input v-model="currentMessage.content" type="text" class="messageInput" placeholder="Ask me anything..." @keyup.enter="sendMessage"/>
    <button class="askButton" @click="sendMessage">
      Ask
    </button>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      isChatVisible: false,
      defaultMessages: [
        "Hi I’m Hope and I’m here to help you! What do you need help for? Click one of the two options below",
        "LEGAL COUNSELING",
        "RECOGNISE THE VIOLENCE"
      ],
      currentMessage: {
            content: String,
            isUser: Boolean,
            },
      messages: [],
    };

  },
  methods: {
    toggleChat() {
      if(this.isChatVisible === true){
        this.messages = [];
      }
      this.isChatVisible = !this.isChatVisible;
    },
    sendMessage() {
      if (this.currentMessage.content.trim() !== "") {
        this.currentMessage.isUser = true;
        this.messages.push(this.currentMessage);
        this.respondToUser(this.currentMessage);
        this.currentMessage.content = ""; //TODO check if this is the best way to clear the input
      }
    },
    respondToUser(message) {
      const responses = {
        "LEGAL COUNSELING": "You can get legal counseling by contacting our legal team at legal@help.com.",
        "RECOGNISE THE VIOLENCE": "Recognizing violence is the first step. We can provide resources and support for you.",
        "HELP": "I'm here to assist you. You can ask about legal counseling or recognizing violence."
      };
      const defaultResponse = "I'm not sure how to help with that. Please type 'HELP' for assistance.";
      const response = {content: responses[message.content.toUpperCase()] || defaultResponse, isUser: false};
      this.messages.push(response);
    }
  }
};
</script>

<style scoped>
.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 80px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 7px;
  z-index: 1000;
}
.chatbot-icon:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.chatbot-img {
  width: 40px;
  height: auto;
}

.chat-box {
  position: fixed;
  width: 360px;
  height: 510px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  text-align: center;
  background-color: white;
  opacity: 0.97;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  right: 150px;
  bottom: 50px;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.chatbot-name {
  display: flex;
  align-items: left;
}

.chatbot-img-header {
  width: 40px;
  height: auto;
}

.close-btn {
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 21px;
  cursor: pointer;
  background-color: white;
}

h1 {
  font-size: 20px;
  text-align: left;
  color: black;
  opacity: 0.8;
  padding: 8px;
  margin: 0;
  background-color: white;
}

.messageBox{
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 410px; /* forse dovrà essere max-height */
  overflow-y: auto;
  padding: 0 16px;
  flex-grow: 1;
}

.bot-message {
  background-color:rgba(193, 60, 92, 0.83);
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  color: white;

}

.bot-message p {
  font-size: 10px;
  margin: 0;
}

.user-message {
  background-color: #dedddd;
  padding: 10px;
  border-radius: 10px;
  text-align: right;
  color: black;
}

.user-message p {
  font-size: 10px;
  margin: 0;
}

.inputContainer {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 24px;
}

.messageInput {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  font-size: 16px;
  background-color: white;
  border-radius: 24px;
  margin-right: 8px;
}

.askButton {
  background-color: #bb5f75;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;
}

.askButton:hover {
  background-color:  #bb5f75;
}
</style>
