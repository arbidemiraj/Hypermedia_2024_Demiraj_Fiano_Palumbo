
<template>
  <div class="error-page">
    <div class="error-top">
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      <hr class="separator" />
      <div class="error-content">
        <div class="error-text">
          <h1>Oops! The page you were looking for seems inexistent...<br>Try with a different one!<p class="sad-face">:(</p></br></h1>
          
        </div>
        <div class="error-icon">
          <img src="@/assets/images/warning-icon.png" alt="Warning Icon" class="warning-icon" />
        </div>
      </div>
    </div>
    <div class="error-bottom">
      <button @click="goBack" class="back-button"><strong> GO BACK</strong></button>
    </div>
  </div>
</template>



<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>


<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  margin: 0;
  text-align: center;
  background-color: #b35c6e;
  color: white;
  box-sizing: border-box;
}

.error-top {
  width: 100%;
  padding: 20px;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
}

.separator {
  border: none;
  border-top: 1px solid white;
  width: 100%;
  margin-top: 20px;
  position: absolute;
  top: 60px;
  left: 0;
}

.error-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  padding: 0 20px;
  box-sizing: border-box;
}

.error-text {
  flex: 1;
  text-align: left;
  padding-right: 20px;
}

.error-text h1 {
  font-size: 38px;
  line-height: 1.4;
  margin: 0;
}

.error-icon {
  flex-shrink: 0;
}

.warning-icon {
  height: 200px;
  width: 200px;
  margin-right: 80px;
}

.error-bottom {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 100px;

}

.back-button {
  background-color: white;
  color: #b35c6e;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}

.back-button:hover {
  background-color: #f0e1e8;
}

.sad-face {
  font-size: 32px;
  margin: 0;
}

@media (max-width: 768px) {
  .error-page {
    height: 100%;
  }
  .error-content {
    flex-direction: column;
    align-items: center;
  }

  .error-text {
    padding: 0;
    text-align: center;
  }

  .error-text h1 {
    font-size: 24px;
  }

  .warning-icon {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>


