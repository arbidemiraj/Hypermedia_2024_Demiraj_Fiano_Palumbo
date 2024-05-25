<template>
    <div class="contact-page">
      <section class="contact-header">
        <div class="contact-info">
          <i class="fas fa-phone-alt contact-icon"></i>
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
      <section class="contact-form-section">
        <h2>Do you need help? Send us a request by filling up this form!</h2>
        <form class="contact-form">
          <label>
            <input type="email" placeholder="Insert your email" required>
          </label>
          <label>
            <input type="text" placeholder="Phone Number" required>
          </label>
          <label>
            <textarea placeholder="Message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section class="contact-email">
        <div class="email-info">
          <i class="fas fa-envelope contact-icon"></i>
          <p>SEND US AN EMAIL AT</p>
          <a href="mailto:bys@hotmail.com">bys@hotmail.com</a>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
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
  }
  
  .contact-icon {
    font-size: 40px;
    color: #e91e63;
  }
  
  .phone-number {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .message {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 20px;
  }
  
  .contact-form-section {
    background: url('/assets/images/forwomen.png') no-repeat center center/cover;
    padding: 40px 20px;
    color: #fff;
  }
  
  .contact-form {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact-form label {
    display: block;
    margin-bottom: 10px;
  }
  
  .contact-form input, .contact-form textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  
  .contact-form button {
    background: #e91e63;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background: #d81b60;
  }
  
  .contact-email {
    margin-top: 40px;
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
  