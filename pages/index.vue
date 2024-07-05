<template>
  <div class="container">
    <b class="main-text">Empowering <b class="women-title">WOMEN</b> to reclaim their lives</b>
    <a href="#get-help" @click.prevent="scrollTo('#get-help')"><button class="button">How can I get help?</button></a>
  </div>
  <div class="mission-container">
    <div class="content-container">
      <b class="main-text-black">Supporting Women Through Difficult Times</b>
      <p>ByYourSide is dedicated to providing a safe, nurturing space for women who have experienced violence.
        Our platform offers comprehensive resources, including crisis intervention, legal assistance, counseling, and
        empowerment programs, to help survivors on their healing journey. We believe in the strength and resilience of
        women, fostering a supportive community where shared experiences inspire hope and recovery.
        Together, we can build a brighter, empowered future.</p>
    </div>

    <img class="no-violence-img" src="/assets/images/home_stopviolence.png" alt="stop-violence" />
  </div>
  <div id="get-help" class="assistance-container">
    <b class="main-text-black">Immediate Help Options for Women in Need</b>
    <p style="padding: 50px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet rhoncus
      tortor, eget venenatis quam. Donec enim turpis, feugiat sit amet quam a, dapibus facilisis nunc. Fusce sodales
      tempor venenatis.</p>
    <div class="contact-option-container">
      <div class="contact-option">
        <Icon name="material-symbols:call" color="#bb5f75" size="100" />
        <b class="contact-title">Hotline Support</b>
      </div>
      <div class="contact-option">
        <Icon name="fluent:chat-20-filled" color="#bb5f75" size="100" />
        <b class="contact-title">ChatBot support</b>
      </div>
      <div class="contact-option">
        <Icon name="streamline:sos-help-emergency-sign-solid" color="#bb5f75" size="100" />
        <b class="contact-title">Emergency services</b>
      </div>
      <div class="contact-option">
        <Icon name="fluent:mail-20-filled" color="#bb5f75" size="100" />
        <b class="contact-title">Contact us</b>
      </div>
    </div>
  </div>

  <div class="activities-container">
    <div class="activities-content">
      <b class="main-text-black">Discover our activities</b>
      <p>We are dedicated to providing a safe haven and comprehensive assistance to women who have experienced violence.
        Our mission is to foster healing, build resilience, and promote independence through a variety of carefully
        designed services and projects. Explore the activities we offer to support you on your journey to recovery and
        empowerment.</p>
      <NuxtLink to="/activities/"><button class="button-activities"> Explore our activities</button></NuxtLink>
    </div>
    <img class="for-women-img" src="/assets/images/forwomen.png" alt="stop-violence" />
  </div>
  <div class="faq-container">
    <b class="main-text-black">Frequently Asked Questions</b>
    <FaqItem v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" />
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  data() {
    return {
      faqs: [
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
      ]
    };
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
  /* Fallback for browsers that support it */
}

template {
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

.women-title {
  color: #bb5f75;
  font-size: 64px;
  font-weight: 900;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
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
  width: 300px;
  margin-inline: 100px;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
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
  color: black;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.main-text-black {
  margin-top: 80px;
  font-size: 42px;
  font-weight: 900;
  color: black;
}

.container {
  background-image: url('assets/images/home_main_image_cut.jpg');
  opacity: 0.9;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 100px 20px;
  margin: 0;
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
  width: 600px;
  font-size: 60px;
  font-weight: 900;
  color: white;
}

@media (max-width: 768px) {
  .container {
    display: flex;
    justify-content: center;
    opacity: 0.95;
    padding: 50px 20px;
    background-size: cover;
    background-image: url('assets/images/home_mobile_img.jpg');
    height: 600px;
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
    font-weight: 400;
    padding: 10px 20px;
    font-size: 20px;
    margin-top: 50px;
  }

  .main-text {
    opacity: 1;
    font-size: 32px;
    padding: 0px;
    margin: 0px;
  }

  p {
    font-size: 16px;

  }

  .content-container {
    width: 100%;
  }

  .no-violence-img {
    height: 300px;
  }

  .mission-container {
    flex-direction: column;
  }

  .main-text-black {
    font-size: 32px;
  }

  .activities-container {
    flex-direction: column;
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
    height: 400px;
    margin: 50px 0px;
  }
}
</style>