<template>
    <div class="about-page">
      <section class="about-section">
        <div class="left-content">
          <h1>BY YOUR SIDE</h1>
          <div class="mission-history">
            <div class="mission">
              <h2>MISSION</h2>
              <p>
                At the ByYourSide Center our mission is clear and resolute: to provide a safe haven and comprehensive support services for women who have experienced violence.
                Our center is committed to ending the cycle of abuse by offering immediate assistance, advocacy, and resources to empower women to reclaim their lives. We believe that every woman has the right to live free from fear and violence.
              </p>
            </div>
            <div class="history">
              <h2>HISTORY</h2>
              <p>
                The Women's Protection Center was founded in 1995 by a group of passionate activists and community leaders who recognized the urgent need for a dedicated space to support women experiencing violence.
                The idea emerged from a grassroots movement driven by survivors, advocates, and allies who witnessed firsthand the devastating impact of gender-based violence on women in their community.
              </p>
            </div>
          </div>
        </div>
        <div class="right-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.889866735823!2d9.22666847580143!3d45.472022432917385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c68b039ef2e5%3A0x7ef6e398e0af8186!2sVia%20Sangallo%2C%2040%2C%2020133%20Milano%20MI%2C%20Italia!5e0!3m2!1sit!2ses!4v1716652726945!5m2!1sit!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="directions">
            <h2>HOW TO GET HERE</h2>
            <p>
              <strong>Subway:</strong><br>
              Metro Line 2, Stop "Lambrate" or "Città Studi"<br>
              Metro Line 1, Stop "Loreto"<br><br>
              <strong>Buses:</strong><br>
              Tram n° 19, Stop "Piazzale Leonardo da Vinci"
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  .about-page {
    font-family: 'Inter';
    padding: 20px;
  }
  
  .about-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .left-content, .right-content {
    flex: 1;
    margin: 10px;
  }
  
  .left-content {
    max-width: 50%;
  }
  
  .right-content {
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .mission-history {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  iframe {
    width: 100%;
    border: none;
    border-radius: 8px;
  }
  </style>
  
  
  