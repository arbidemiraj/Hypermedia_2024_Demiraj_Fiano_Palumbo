<template>
  <NuxtLink v-on:click="toggleChat">
    <div class="chatbot-icon">
      <img class="chatbot-img" src="assets/images/chatbotIconNoHand.png" alt="ChatbotIcon" />
    </div>
  </NuxtLink>
  <transition name="fade">
    <div v-if="isChatVisible" class="chat-box">
      <div class="chat-header">
        <div class="chatbot-name">
          <img class="chatbot-img-header" src="assets/images/chatbotIconNoHand.png" alt="ChatbotIcon" />
          <h1><b>Hope</b><b v-if="isOptionSelected" class="selected-bot"> - {{ selectedOption }}</b></h1>
        </div>
        <div class="icons-container">
          <button class="close-btn" @click="toggleChat">
            <Icon size="23" color="#d5697f" name="fluent:minimize-12-filled"></Icon>
          </button>
          <button class="close-btn" @click="closeChat">
            <Icon size="23" color="#d5697f" name="ep:close-bold"></Icon>
          </button>
        </div>
      </div>
      <div class="chat-content">
        <div id="messageBox" class="messageBox">
          <div class="message-container">
            <div v-if="!isOptionSelected" class="bot-message">
              <p>Hi I’m Hope and I’m here to help you! What do you need help for?<br> Click one of the two options below
              </p>
            </div>
          </div>
          <button v-if="!isOptionSelected" v-for="(message, index) in optionMessages" :key="index"
            class="bot-message-option" @click="handleSelectedOption(index)">
            <p>{{ message }}</p>
          </button>
          <div v-for="(message, index) in messages" :key="index"
            :class="message.isUser ? 'user-message' : 'bot-message'">
            <p>{{ message.content }}</p>
          </div>
          <div v-if="isLoading" class="loading-animation">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>
      </div>
      <div class="inputContainer">
        <input v-model="currentMessage" type="text" class="messageInput" placeholder="Ask me anything..."
          @keyup.enter="sendMessage" />
        <button class="askButton" @click="sendMessage">
          Ask
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const isLoading = ref(false);
const isChatVisible = ref(false);
const optionMessages = ref([
  "LEGAL COUNSELING",
  "RECOGNISE THE VIOLENCE"
]);
const currentMessage = ref('');
const messages = ref([]);
const selectedOption = ref('');
const isOptionSelected = ref(false);


const toggleChat = () => {
  isChatVisible.value = !isChatVisible.value;
};

const closeChat = () => {
  messages.value = [];
  isChatVisible.value = !isChatVisible.value;
  selectedOption.value = '';
  isOptionSelected.value = false;
};

// Send user message
const sendMessage = async () => {
  if (currentMessage.value.trim() !== "") {
    messages.value.push({ content: currentMessage.value, isUser: true });
    await respondToUser(currentMessage.value);

    nextTick(() => {
      const messageBox = document.querySelector("#messageBox"); // Adjust selector as needed
      messageBox.scrollTo({
        top: messageBox.scrollHeight,
        behavior: 'smooth'
      });
    });
  }
};

//Handle chatbot response
const respondToUser = async (message) => {
  isLoading.value = true;
  let chatbotResponseText = '';
  currentMessage.value = '';

  // Scroll to the bottom of the chatbox
  nextTick(() => {
    const messageBox = document.querySelector("#messageBox");
    messageBox.scrollTo({
      top: messageBox.scrollHeight,
      behavior: 'smooth'
    });
  });

    if (selectedOption.value == "LEGAL COUNSELING") {
      isOptionSelected.value = true;
      const chatbotResponse = await fetch('/api/chatBotLegal/', {
        method: 'POST',
        body: message,
      });
      chatbotResponseText = await chatbotResponse.text();
    } else if (selectedOption.value == "RECOGNISE THE VIOLENCE") {
      isOptionSelected.value = true;
      const chatbotResponse = await fetch('/api/chatBotRecognise/', {
        method: 'POST',
        body: message,
      });
      chatbotResponseText = await chatbotResponse.text();
    } else {
      chatbotResponseText = "Please select an option first";
    }
    const response = { content: chatbotResponseText, isUser: false };
    console.log(response);
    messages.value.push(response);

  isLoading.value = false;
};

const handleSelectedOption = (index) => {
  const responses = {
    "LEGAL COUNSELING": "I’m here to support you with legal assistance and provide the guidance you need. If you’re facing domestic abuse, understanding your legal rights and options is crucial. I can provide legal advice, and help you navigate the steps to ensure your safety and protect your rights.",
    "RECOGNISE THE VIOLENCE": "Hi I'm Hope and i'm here to help you in your journey to understand if you are victim of abuse and guide you through the activities we provide to tackle it",
    "HELP": "I'm here to assist you. You can ask about legal counseling or recognizing violence."
  };
  isOptionSelected.value = true;
  selectedOption.value = optionMessages.value[index];
  messages.value = [];
  const response = { content: responses[selectedOption.value.toUpperCase()], isUser: false };
  messages.value.push(response);
};
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(1200px);
  opacity: 0;
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
  color: var(--bg-color);
  align-items: center;
  font-size: 12px;
}

.chat-box {
  position: fixed;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
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

.messageBox {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 410px;
  /* forse dovrà essere max-height */
  margin-bottom: 30px;
}

.bot-message {
  background-color: var(--bg-color);
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  align-self: flex-start;
  width: 85%;
  color: white;
}

.bot-message-option {
  background-color: var(--bg-color);
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
  font-size: 12px;
  margin: 0;
}

.user-message {
  background-color: #dedddd;
  padding: 10px;
  border-radius: 10px;
  text-align: right;
  align-self: flex-end;
  width: 80%;
  color: black;
}

.user-message p {
  font-size: 12px;
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
  background-color: var(--bg-color);
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
  background-color: var(--bg-color);
}

@keyframes blink {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

/* Style for the typing animation */
.loading-animation {
  display: flex;
  justify-content: left;
  align-items: center;
}

/* Style for each dot */
.typing-dot {
  background-color: var(--bg-color);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 2px;
  margin-bottom: 10px;
  animation: blink 1.4s infinite both;
}

.typing-dot:nth-child(1) {
  animation-delay: 0s;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.4s;
}


@media (max-width: 768px) {
  .chat-box {
    width: 100%;
    height: 100vh; 
    right: 0;
    bottom: 0;
    border-radius: 0; 
    padding: 10px; 
  }
  .chatbot-icon {
    bottom: 10px;
    right: 10px;
  }
  .inputContainer {
    border-radius: 20px; 
  }
  .messageBox {
    height: calc(100vh - 160px); 
  }
  .user-message p{
    font-size: 18px;
  }
  .bot-message p{
    font-size: 18px;
  }
  .bot-message-option p{
    font-size: 18px;
  }
}
</style>
