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
      <h1><b>Hope</b><b v-if="isOptionSelected" class="selected-bot"> - {{ selectedOption }}</b></h1>
    </div>
    <button class="close-btn" @click="toggleChat"><Icon size="35" color="#d5697f" name="material-symbols:close"></Icon></button>
  </div>
  <div class="chat-content">
    <div class="messageBox">
      <div class="message-container">
        <div v-if="!isOptionSelected" class="bot-message">
          <p>Hi I’m Hope and I’m here to help you! What do you need help for?<br> Click one of the two options below</p>
        </div>
      </div>
      
      <button v-if="!isOptionSelected" v-for="(message, index) in optionMessages" :key="index" class="bot-message-option" @click="handleSelectedOption(index)">
        <p>{{ message }}</p>
      </button>
      <div v-for="(message, index) in messages" :key="index" :class="message.isUser ? 'user-message' : 'bot-message'">
        <p>{{ message.content }}</p>
      </div>
    </div>
  </div>
  <div class="inputContainer">
    <input v-model="currentMessage" type="text" class="messageInput" placeholder="Ask me anything..." @keyup.enter="sendMessage"/>
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
      optionMessages: [
        "LEGAL COUNSELING",
        "RECOGNISE THE VIOLENCE"
      ],
      currentMessage: '',
      messages: [],
      selectedOption: '',
      isOptionSelected: false,
    };

  },
  methods: {
    toggleChat() {
      if(this.isChatVisible === true){
        this.messages = [];
      }
      this.isChatVisible = !this.isChatVisible;
      this.isOptionSelected = false;
    },
    sendMessage() {
      if (this.currentMessage.trim() !== "") {
        this.messages.push({content: this.currentMessage, isUser: true});
        this.respondToUser(this.currentMessage);
        this.currentMessage = '';
      }
    },
    respondToUser(message) {
      const responses = {
        "LEGAL COUNSELING": "You can get legal counseling by contacting our legal team at legal@help.com.",
        "RECOGNISE THE VIOLENCE": "Recognizing violence is the first step. We can provide resources and support for you.",
        "HELP": "I'm here to assist you. You can ask about legal counseling or recognizing violence."
      };

      const defaultResponse = "I'm not sure how to help with that. Please type 'HELP' for assistance.";

      if(message !== "HELP" && responses[message.toUpperCase()]) {
        this.isOptionSelected = true;
        this.selectedOption = message.toUpperCase();
        const response = {content: responses[message.toUpperCase()], isUser: false};
        this.messages = [];
        this.messages.push(response);
      }else {
        const response = {content: responses[message.toUpperCase()] || defaultResponse, isUser: false};
        this.messages.push(response);
      }
     
    },
    handleSelectedOption(index) {
      this.isOptionSelected = true;
      this.selectedOption = this.optionMessages[index];
      this.messages = [];
      this.respondToUser(this.selectedOption);
    }
  }
};
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

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

.selected-bot {
  color: #bb5f75;
  align-items: center;
  font-size: 12px;
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
  align-items: center;
  font-size: 16px;
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
  gap: 8px;
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
  align-self: flex-start;
  width: 70%;
  color: white;
}

.bot-message-option {
  background-color:rgba(193, 60, 92, 0.83);
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-align: left;
  align-self: flex-start;
  width: 70%;
  color: white;
}

.bot-message-option:hover {
  opacity: 0.8;
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
  align-self: flex-end;
  width: 70%;
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
