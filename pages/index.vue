<template>
  <div class="container">
    <h1 class="main-text">Empowering <span class="women-title">Women</span> to reclaim their lives</h1>
    <a href="#get-help" @click.prevent="scrollTo('#get-help')"><button class="button">How can I get help?</button></a>
  </div>
  <div class="mission-container">
    <div class="content-container">
      <h2 class="main-text-black">Supporting Women Through Difficult Times</h2>
      <p>ByYourSide is dedicated to providing a safe, nurturing space for women who have experienced violence.
        Our platform offers comprehensive resources, including crisis intervention, legal assistance, counseling, and
        empowerment programs, to help survivors on their healing journey. We believe in the strength and resilience of
        women, fostering a supportive community where shared experiences inspire hope and recovery.
        Together, we can build a brighter, empowered future.</p>
    </div>

    <img class="no-violence-img" src="/assets/images/home_stopviolence.png" alt="stop-violence" />
  </div>
  <div id="get-help" class="assistance-container">
    <h2 class="main-text-white">Immediate Help Options for Women in Need</h2>
    <p style="padding: 50px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet rhoncus
      tortor, eget venenatis quam. Donec enim turpis, feugiat sit amet quam a, dapibus facilisis nunc. Fusce sodales
      tempor venenatis.</p>
    <div class="contact-option-container">
      <div class="contact-option">
        <Icon name="material-symbols:call" color="#fff" size="100" />
        <h3 class="contact-title">Hotline Support</h3>
      </div>
      <div class="contact-option">
        <Icon name="fluent:chat-20-filled" color="#fff" size="100" />
        <h3 class="contact-title">ChatBot support</h3>
      </div>
      <div class="contact-option">
        <Icon name="streamline:sos-help-emergency-sign-solid" color="#fff" size="100" />
        <h3 class="contact-title">Emergency services</h3>
      </div>
      <div class="contact-option">
        <Icon name="fluent:mail-20-filled" color="#fff" size="100" />
        <h3 class="contact-title">Contact us</h3>
      </div>
    </div>
  </div>

  <div class="activities-container">
    <div class="activities-content">
      <h2 class="main-text-black">Discover our activities</h2>
      <p>We are dedicated to providing a safe haven and comprehensive assistance to women who have experienced violence.
        Our mission is to foster healing, build resilience, and promote independence through a variety of carefully
        designed services and projects. Explore the activities we offer to support you on your journey to recovery and
        empowerment.</p>
      <NuxtLink to="/activities/"><button class="button-activities"> Explore our activities</button></NuxtLink>
    </div>
    <img class="for-women-img" src="/assets/images/forwomen.png" alt="" />
  </div>
  <div class="faq-container">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div class="faq-item-container">
      <FaqItem v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" />
    </div>
  </div>
  <ScrollToTop aria-label="Scroll to top" tabIndex="0"/>
</template>

<script setup>
const faqs =  [
        {
          question: 'What should I do if I am in immediate danger?',
          answer: 'If you are in immediate danger, call emergency services (911 in the US) immediately. Try to get to a safe location if possible, such as a friend\'s house, a public place, or a domestic violence shelter.'
        },
        {
          question: 'How can I recognize signs of abuse?',
          answer: 'Signs of abuse can include physical injuries (bruises, cuts), emotional manipulation, threats, isolation from friends and family, and controlling behavior. Abuse can be physical, emotional, psychological, sexual, or financial.'
        },
        {
          question: 'Where can I find a safe place to stay?',
          answer: 'Many cities have domestic violence shelters or safe houses. You can contact national hotlines or local organizations that provide shelter and support services for women in crisis. Websites like the National Domestic Violence Hotline offer resources and support.'
        },
        {
          question: 'What are my legal rights as a victim of domestic violence?',
          answer: 'As a victim of domestic violence, you have the right to legal protection, which can include restraining orders, custody of children, and pressing charges against the abuser. It is important to consult with a legal professional who specializes in domestic violence cases.'
        },
        {
          question: 'How can I get help without my abuser knowing?',
          answer: 'Use a safe computer or phone that your abuser does not have access to. Reach out to trusted friends, family, or support organizations discreetly. Many hotlines and organizations offer confidential help and can guide you on how to stay safe while seeking help.'
        },
        {
          question: 'What resources are available for emotional and psychological support?',
          answer: 'Counseling and support groups are available for victims of domestic violence. Many organizations provide free or low-cost therapy, support groups, and hotlines where you can speak with trained professionals. Online resources and forums can also offer support.'
        },
        {
          question: 'How can I help a friend who I suspect is being abused?',
          answer: 'Approach your friend with care and concern. Let them know that you are there for them and willing to listen. Avoid pressuring them to leave their abuser, as this decision is deeply personal and complex. Offer resources and encourage them to seek professional help.'
        },
        {
          question: 'Can I receive financial assistance to leave my abuser?',
          answer: 'Yes, there are programs that offer financial assistance to victims of domestic violence. These can include emergency funds, housing assistance, and support with legal fees. Contact local shelters and domestic violence organizations for more information.'
        },
        {
          question: 'What steps should I take to create a safety plan?',
          answer: 'A safety plan includes identifying safe places to go, keeping important documents and money accessible, and having a plan for contacting emergency services. It is helpful to work with a domestic violence advocate to create a comprehensive safety plan tailored to your situation.'
        },
        {
          question: 'How can I rebuild my life after leaving an abusive relationship?',
          answer: 'Rebuilding your life involves seeking emotional support, possibly finding new housing, securing financial stability, and taking legal action if necessary. Reach out to support groups, therapy, job training programs, and legal aid to assist in this process.'
        }
      ];

    const scrollTo = (hash) => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
</script>

<style scoped>
html {
  scroll-behavior: smooth;
  /* Fallback for browsers that support it */
}

.women-title {
  color: #bb5f75;
  font-family: "Poppins", sans-serif;
  font-size: 80px;
  font-weight: 900;
}

.faq-container {
  display: flex;
  flex-direction: column;
}

.faq-item-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 50px;
  margin: 0 auto;
}

.activities-content {
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

.for-women-img {
  height: 500px;
  margin: 40px;
  border-radius: 30px;
}

.button-activities {
  background-color: #bb5f75;
  width: 300px;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
}

.button {
  background-color: #bb5f75;
  width: 450px;
  margin-inline: 100px;
  color: white;
  border: none;
  border-radius: 100px;
  font-weight: 400;
  padding: 20px 20px;
  font-size: 30px;
  cursor: pointer;
}

.activities-container {
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  padding: 50px;
}

.contact-option-container {
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 80px;
  justify-content: space-between;
}

.contact-title {
  font-size: 24px;
  font-weight: 900;
  color: white;
}

.contact-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 30px;
  max-width: calc(50% - 10px);
  border-radius: 20px;
}

.assistance-container {
  background-color: #bb5f75;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 100px 0px;
}

.main-text-black {
  margin-top: 80px;
  font-size: 42px;
  font-weight: 900;
  color: black;
}

.faq-title {
  margin-top: 80px;
  font-size: 42px;
  font-weight: 900;
  color: #000;
  align-self: center;
}

.main-text-white {
  margin-top: 80px;
  font-size: 42px;
  font-weight: 900;
  color: white;
}

.container {
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.4)), url('assets/images/home_main_image_cut.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 100px 20px;
  margin: 0;
  background-color: rgb(0, 0, 0);
}

.content-container {
  width: 600px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

.no-violence-img {
  height: 500px;
}

.mission-container {
  padding: 50px;
  display: flex;
  flex-direction: row;
}

.main-text {
  margin-top: 80px;
  padding: 100px;
  width: 800px;
  font-size: 72px;
  font-weight: 900;
  font-family: 'Poppins' sans-serif;
  color: white;
}

@media (max-width: 768px) {
  .container {
    display: flex;
    justify-content: center;
    padding: 50px 20px;
    background-size: cover;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('assets/images/home_mobile_img.jpg');
    height: 600px;
  }

  .header {
    height: 100%;
  }

  .women-title {
    display: flex;
    opacity: 1;
    flex-direction: column;
    font-size: 55px;
    font-weight: 900;
  }

  .button {
    background-color: #bb5f75;
    opacity: 1;
    width: 300px;
    margin-inline: 0px;
    color: white;
    border: none;
    border-radius: 20px;
    font-weight: 900;
    padding: 10px 20px;
    font-size: 20px;
    margin-top: 100px;
  }

  .main-text {
    font-size: 38px;
    width: auto;
    padding: 0px;
    margin: 0px;
  }

  .women-title {
    color: #de768e;
    font-size: 40px;
  }

  p {
    font-size: 16px;
  }

  .content-container {
    width: 100%;
  }

  .no-violence-img {
    height: auto;
  }

  .mission-container {
    flex-direction: column;
  }

  .main-text-black {
    font-size: 32px;
  }

  .main-text-white {
    font-size: 32px;
  }

  .faq-title {
    font-size: 32px;
  }

  .activities-container {
    flex-direction: column;
  }

  .button-activities {
    width: 250px;
    font-size: 16px;
  }

  .contact-option-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .contact-option {
    padding: 20px;
    max-width: 100%;
  }

  .for-women-img {
    display: none;
  }

  .faq-container {
    text-align: center;
  }
}
</style>