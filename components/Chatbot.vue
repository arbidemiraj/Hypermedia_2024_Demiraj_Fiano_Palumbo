<template>
  <NuxtLink v-on:click="toggleChat">
    <div class="chatbot-icon">
      <img class="chatbot-img" src="assets/images/chatbotIconNoHand.png" alt="ChatbotIcon" />
    </div>
  </NuxtLink>
<div class="chat-box" v-if="isChatVisible">
  <div class="chat-header">
    <h1>
      <b>HOPE (chatbot)</b> 
    </h1>
    <button class="close-btn" @click="toggleChat"><b>x</b></button>
  </div>
  <div class="chat-content">
    <div class="messageBox mt-8">
    </div>
  </div>
  <div class="inputContainer">
    <input v-model="currentMessage" type="text" class="messageInput" placeholder="Ask me anything..." />
    <button class="askButton">
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
    };

  },
  methods: {
    toggleChat() {
      this.isChatVisible = !this.isChatVisible;
    },
  },
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
}
.close-btn {
  color: #bb5f75;
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
  color: rgba(193, 60, 92, 0.83);
  padding: 8px;
  margin: 0;
  background-color: white;
}

.messageBox {
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 420px; /* forse dovrà essere max-height */
  overflow-y: auto;
  padding: 0 16px;
  flex-grow: 1;
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
