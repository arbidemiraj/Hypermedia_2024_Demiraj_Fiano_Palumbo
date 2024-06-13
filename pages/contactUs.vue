<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  </head>
  <div class="title-background">
      <h1 class='title'>CONTACT<br>US</h1>
  </div>
      <section class="contact-header">
        <div class="contact-info">
          <img src="/assets/images/phoneicon.png" class="phone-icon"></img>
          <h2>CALL US AT</h2>
          <p class="phone-number">+39 367 8919785</p>
          <h3>DON'T BE AFRAID, BE FREE!</h3>
          <p class="message">
            Violence against women takes many forms, including physical, emotional, and sexual abuse. It thrives in silence and secrecy, often perpetuated by fear, shame, and societal stigma. Too often, victims suffer in silence, afraid to seek help or report their experiences. 
            Reporting instances of violence against women is not just a matter of individual accountability; it is a collective responsibility. 
            When we report these crimes, we contribute to breaking the cycle of abuse and holding perpetrators accountable for their actions. 
            Together, let's raise our voices against violence against women.
            Let us support survivors, challenge harmful attitudes, and work towards a future where every woman can live free from fear.
          </p>
        </div>
      </section>
    <div class="form-container">
      <div class="overlay"></div>
        <div class="form-content">
          <h2>Do you need help?<br>Send us a request by filling up this form!</h2>
          <form>
            <div class="form-group">
              <label for="request-type">For You/Your Friend</label>
              <select id="request-type">
                <option value="you">For You</option>
                <option value="friend">For Your Friend</option>
              </select>
            </div>
            <div class="form-group">
              <label for="email">Email*</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope icon"></i>
                <input type="email" id="email" placeholder="Insert your email"/>
              </div>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number*</label>
              <div class="input-wrapper">
                <i class="fas fa-phone icon"></i>
                <input type="tel" id="phone" placeholder="+39 Insert your phone number"/>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Insert your message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <section class="contact-email">
        <div class="email-info">
          <p>or</p>
          <img src="/assets/images/emailicon.png" class="email-icon"></img>
          <p>SEND US AN EMAIL AT</p>
          <a href="mailto:byyoursidecenter@gmail.com">byyoursidecenter@gmail.com</a>
        </div>
      </section>
</template>

<script>
//commento solo per prova
/*prova per invio mail predefinita tramite form
export default {
  data() {
    return {
      form: {
        requestType: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    async sendRequest() {
      try {
        await this.$axios.post('/send-email', this.form);
        alert('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email');
      }
    }
  }
}; */
</script>


  <style scoped>

  .title-background {
    background-image: url('/assets/images/help.jpg');
    background-size: cover;
    background-position: center;
    padding: 5px;
    text-align: left;
    color: white;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 5px black;
  }

  .contact-page {
    font-family: Arial, sans-serif;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .phone-number {
    font-size: 1.3rem;
    color: #bb5f75;
  }

  .contact-message h3 {
    font-size: 1.2rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .contact-message p {
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
      height: 80vh;
      overflow: hidden;
    }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.195); /* White overlay with 70% opacity */
    z-index: 1; 
  }

  .form-content {
    position: relative; /* Make sure it's above the overlay */
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
  .content {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    z-index: 2;

  }

  .form-content h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, select, textarea {
    width: calc(100% - 40px); /* Adjusted width to accommodate icon padding */
    padding: 10px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  textarea {
    height: 100px;
  }

  button {
    background-color: #bb5f75;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #a14f61;
  }

  
  .contact-email {
    margin-top: 40px;
    text-align: center;
  }
  
  .email-info {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .email-info a {
    color: #e91e63;
    text-decoration: none;
    font-size: 18px;
  }
  
  .email-info a:hover {
    text-decoration: underline;
  }
  </style>
  