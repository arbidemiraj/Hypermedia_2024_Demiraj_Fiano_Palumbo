<template>
  <div>
    <div class="title-background">
      <h1 class="title">CONTACT US</h1>
    </div>
    <section class="contact-header" aria-labelledby="contactInfoHeading">
      <div class="contact-info">
        <div class="phone-info-container">
          <Icon name="el:phone-alt" color="#bb5f75" aria-hidden="true" size="100"/>
        <div class="phone-info">
          <h2>CALL US AT</h2>
        <p class="phone-number">+39 367 8919785</p>
        </div>
        </div>
       
        <h3>DON'T BE AFRAID, BE FREE!</h3>
        <p class="message">
          Violence against women takes many forms, including physical, emotional, and sexual abuse. It thrives in
          silence and secrecy, often perpetuated by fear, shame, and societal stigma. Too often, victims suffer in
          silence, afraid to seek help or report their experiences.
          Reporting instances of violence against women is not just a matter of individual accountability; it is a
          collective responsibility.
          When we report these crimes, we contribute to breaking the cycle of abuse and holding perpetrators accountable
          for their actions.
          Together, let's raise our voices against violence against women.
          Let us support survivors, challenge harmful attitudes, and work towards a future where every woman can live
          free from fear.
        </p>
      </div>
    </section>
    <div class="form-container">
      <div class="overlay"></div>
      <div class="form-content" aria-labelledby="formHeading">
        <h2>Do you need help?<br>Send us a request by filling up this form!</h2>
        <form @submit.prevent="submitForm" aria-label="Contact Us Form">
          <div class="form-group">
            <label for="request-type">For Who?</label>
            <select id="request-type" name="name" required v-model="requestType" aria-required="true">
              <option value="you">For You</option>
              <option value="friend">For Your Friend</option>
            </select>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope form-icon" aria-hidden="true"></i>
              <input type="email" id="email" name="email" required v-model="email"
                :class="!validateEmail ? 'incorrect' : ''" aria-required="true" aria-describedby="emailError"/>
              <p v-if="!validateEmail" class="incorrect-text">Check that the email format is right</p>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <div class="input-wrapper">
              <i class="fas fa-phone form-icon" aria-hidden="true"></i>
              <input type="tel" id="phone" name="phone" required v-model="phone"
                placeholder="+39 Insert your phone number" aria-required="true" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required v-model="message"
              placeholder="Insert your message" aria-required="true"></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
    <section class="contact-email" aria-labelledby="emailInfoHeading">
      <div class="email-info">
        <p>or</p>
        <img src="/assets/images/emailicon.png" class="email-icon" alt=""/>
        <p>SEND US AN EMAIL AT</p>
        <a href="mailto:byyoursidecenter@gmail.com">byyoursidecenter@gmail.com</a>
      </div>
    </section>
    <!-- Popup for mail status -->
    <div v-if="showPopUp" class="mail-status-popup" :class="mailStatus === 200 ? 'success' : 'error'" role="alert">
      {{ mailStatus === 200 ? 'Email sent successfully!' : 'Failed to send email.' }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
useSeoMeta({
  title: 'ByYourSide | Contacts',
  description: 'This is the contacts page with a form for asking for help, the option of sending an email or make a call.',
});

const email = ref('');
const message = ref('');
const phone = ref('');
const requestType = ref('');

const isCheckingActive = ref(false);
const mailStatus = ref(0);
const showPopUp = ref(false);

const validateEmail = ref(true);

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

watch(email, (newEmail) => {
  isCheckingActive.value = true;
  validateEmail.value = emailRegex.test(newEmail.toLowerCase());
});

async function submitForm() {
  if (!validateEmail.value) return;

  const { data, error } = await useFetch('/api/send-email', {
    method: 'POST',
    body: {
      data: {
        email: email.value,
        message: message.value,
        requestType: requestType.value,
        phone: phone.value,
      },
    },
  });

  showPopUp.value = true;

  console.log('data: ', data.value);
  if (data.value?.status === 200) {
    mailStatus.value = 200;
    resetForm();
  } else {
    mailStatus.value = 500;
  }

  setTimeout(() => {
    showPopUp.value = false;
  }, 3000);
}

function resetForm() {
  email.value = '';
  message.value = '';
  phone.value = '';
  requestType.value = '';
  isCheckingActive.value = false;
  validateEmail.value = true;
}

</script>


<style scoped>
.title {
  font-size: 50px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

.phone-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.title-background {
  background-image: url("assets/images/helping-hand.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.90;
  padding: 5px;
  text-align: left;
  color: white;
  width: 100%;
  box-shadow: 5px black;
  background-color: rgba(255, 255, 255, 0.3);
  /* White overlay with 80% opacity */
}

.contact-page p{
  text-align: center;
  padding: 20px;
}

.contact-header {
  margin-bottom: 40px;
}

.contact-info {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.phone-number {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 50px;
  font-style: italic;
  color: #bb5f75;
}

.contact-message h3 {
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 20px;
}

.contact-message {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 800px;
}

.message {
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
}

.form-container {
  position: relative;
  background-image: url('/assets/images/forwomen.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 50px 0;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  /* White overlay with 80% opacity */
  z-index: 1;
}

.form-content {
  position: relative;
  /* Make sure it's above the overlay */
  padding: 20px;
  text-align: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  max-width: 600px;
}

.form-content h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: black;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
}

input,
select,
textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 30px;
  font-size: 1rem;
  background-color: #fff;
}

.icon {
  margin-bottom: 30px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 0 15px;
  background-color: #fff;
}

.form-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #bb5f75;
}

textarea {
  height: 150px;
}

.submit-btn {
  background-color: #bb5f75;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
}

.submit-btn:hover {
  background-color: #a14f61;
}

.contact-email {
  margin-top: 40px;
  text-align: center;
}

.email-info {
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 50px auto;
}

.email-info a {
  color: #e91e63;
  text-decoration: none;
  font-size: 18px;
}

.email-info a:hover {
  text-decoration: underline;
}

.mail-status-popup {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  opacity: 0.9;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.mail-status-popup.success {
  background-color: #4caf50;
  /* Colore di sfondo verde per successo */
}

.mail-status-popup.error {
  background-color: #f44336;
  /* Colore di sfondo rosso per errore */
}

.pop-up div {
  padding: 2rem;
  width: min(90%, 450px);
  border-radius: 0.75rem;
  margin: 0 auto;
  box-shadow: 0.1rem 0.2rem 0.5rem #888888;
}

.pop-up .success {
  background-color: var(--success-bg);
  color: var(--success-text);
}

.pop-up .fail {
  background-color: var(--fail-bg);
  color: var(--fail-text);
}

.incorrect-text {
  color: grey;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 10px;
}

.input-wrapper {
  position: relative;
}

@media (max-width: 768px) {

  .phone-number {
    font-size: 24px;
  }

  .form-content {
    padding: 20px 10px;
  }

  .form-content h2 {
    font-size: 1.2rem;
  }

  .form-group {
    margin-bottom: 10px;
  }

  input,
  select,
  textarea {
    padding: 10px;
    font-size: 0.9rem;
  }

  .submit-btn {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
}
</style>
