<template>
  <header class="title-background" role="banner">
    <h1 class="title">ABOUT US</h1>
  </header>
  <div class="about-page">
    <section class="about-section">
      <div class="left-content">
        <section class="mission-history">
          <section class="mission">
            <h2>MISSION</h2>
            <p>
              At the ByYourSide Center our mission is clear and resolute: to provide a safe haven and comprehensive
              support services for women who have experienced violence.

              Our mission includes:

              Providing safety and shelter for women seeking refuge from abusive situations.
              Empowering survivors through tailored support services including counseling, legal advocacy, and access to
              healthcare.
              Advocating for systemic changes to address the root causes of violence against women.
              Promoting healing, resilience, and independence for survivors.
              Collaborating with community partners and policymakers to strengthen responses to violence.
              Through compassion, determination, and a commitment to social justice, we strive to create a future where
              all women are valued, respected, and protected from violence.
            </p>
          </section>
          <section class="history">
            <h2>HISTORY</h2>
            <p>
              The Women's Protection Center was founded in 1995 by a group of passionate activists and community leaders
              who recognized the urgent need for a dedicated space to support women experiencing violence.
              The idea emerged from a grassroots movement driven by survivors, advocates, and allies who witnessed
              firsthand the devastating impact of gender-based violence on women in their community.
              Driven by a commitment to social justice and women's rights, the founders pooled their resources and
              rallied community support to establish the Women's Protection Center.
            </p>
            <p>
              Since its inception, the center has grown significantly, expanding its services and outreach to meet the
              evolving needs of survivors. It has forged partnerships with local organizations, government agencies, and
              international NGOs to enhance its impact and advocate for systemic change.
            </p>
          </section>
        </section>
      </div>
      <div class="right-content">
        <Loader v-if="isLoading" aria-busy="true"/>
        <iframe 
          :class="{'is-loading': isLoading}"
          :src="iframeSrc" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade" 
          ref="iframe"
          tabindex="0" 
          aria-live="polite">
        </iframe>
        <section class="directions">
          <h2>HOW TO GET HERE</h2>
          <p>
            <strong>Subway:</strong><br>
            Metro Line 2, Stop "Lambrate" or "Città Studi"<br>
            Metro Line 1, Stop "Loreto"<br><br>
            <strong>Buses:</strong><br>
            Tram n° 19, Stop "Piazzale Leonardo da Vinci"
          </p>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

useSeoMeta({
  title: 'ByYourSide | About Us',
  description: 'This is the about page with a brief history and mission of the company, including its main activities such as projects and services.',
});

const isLoading = ref(true);
const iframeSrc = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.889866735823!2d9.22666847580143!3d45.472022432917385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c68b039ef2e5%3A0x7ef6e398e0af8186!2sVia%20Sangallo%2C%2040%2C%2020133%20Milano%20MI%2C%20Italia!5e0!3m2!1sit!2ses!4v1716652726945!5m2!1sit!2ses');
const iframe = ref();

onMounted(() => {
    iframe.value.onload = () => {
      isLoading.value = false;
    }
  })

</script>

<style scoped>
.subtitle {
  padding: 10px;
  font-size: xx-large;
  flex: 1;
  margin-left: -10px;
  margin-top: -10px;
  font-style: oblique;
}

.about-page {
  padding: 20px;
}

.about-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.left-content,
.right-content {
  flex: 1;
  margin: 30px;
}

.right-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.mission-history {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

iframe {
  border: 0;
  width: 100%;
  height: 400px;
  margin-top: 20px;
}

.title {
  font-size: 50px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

.title-background {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3)), url('assets/images/sede.jpg');
  background-size: cover;
  background-position: center;
  padding: 5px;
  text-align: left;
  color: white;
  width: 100%;
  box-shadow: 5px black;
}

.directions {
  margin-top: 50px;
}

@media (max-width: 768px) {
  .about-section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .title-background {
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('assets/images/sede.jpg');
    align-items: center;
    text-align: center;
  }

  .about-page {
    padding: 10px;
  }

  .left-content,
  .right-content {
    width: 100%;
    margin: 0;
  }
}
</style>