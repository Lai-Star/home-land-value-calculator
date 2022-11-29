<template>
  <div>
    <div id="top">

      <div v-if="show" class="preloader">
        <div class="logo-anim-wrapper">
          <svg id="Logo_tvar" x="0px" y="0px" viewBox="0 0 45 53" style="enable-background:new 0 0 45 53;"
               xml:space="preserve"><g>
		<path class="reco-logo-path lt00" d="M0,0v10.8h34.3V21H0v10.8h22.3L33,53h12L34.3,31.8h0H45V0H0z"/></g></svg>
          <svg id="Logo_vypln" x="0px" y="0px" viewBox="0 0 45 53" style="enable-background:new 0 0 45 53;"
               xml:space="preserve"><g>
    		<path class="lt0" d="M0,0v10.8h34.3V21H0v10.8h22.3L33,53h12L34.3,31.8h0H45V0H0z"/></g></svg>
        </div>
      </div>


      <!-- NAVBAR -->
      <div v-if="showContent" class="bg">
        <div class="sticky top-0 nav">
          <navbar/>
        </div>
        <!-- HERO -->
        <hero/>
        <!-- MODEL -->
        <div id="model">
          <!-- <h1 align="center">MODEL EXPLANATION</h1> -->
          <section1/>
        </div>
        <!-- EVALUATION -->
        <div id="evaluation">
          <br><br>
          <!-- <h1 align="center">EVALUATION</h1> -->
          <section2/>
        </div>
        <!-- ABOUT -->
        <div id="about">
          <br><br><br><br><br><br>
          <!-- <h1 align="center">ABOUT</h1> -->
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.bg {
  box-sizing: border-box;
  width: 100%;
  padding: 3px;
  /*background-image: url('../assets/img/bg.jpg');*/
  background-color: black;
  border: 1px solid black;
  background-size: 100% 40%;
}

.nav {
  z-index: 150;
}

/* PRELOADER */

:root {
  --reco-logo-linka-color: #FFFFFF;
  --reco-logo-vypln-color: #FFFFFF;
  --anim-Logo-linka: 3.3s;
  --anim-opacity_Logo_vypln: .9s;
  --anim-opacity_Logo_vypln-delay: .9s;
}

.logo-anim-wrapper {
  position: relative;
  display: flex;
  width: 45px;
  height: 53px;
}

.logo-anim-wrapper svg {
  position: absolute;
}

#Logo_tvar {
  opacity: 1;
}

.reco-logo-path {
  fill: transparent;
  stroke: var(--reco-logo-linka-color);
}

#Logo_vypln {
  opacity: 0;
}

.lt0 {
  fill: var(--reco-logo-vypln-color);
}


.reco-logo-path {
  stroke-dasharray: 0, 990;
  stroke-dashoffset: 0;
  animation: anim-Logo-linka var(--anim-Logo-linka) cubic-bezier(.19, .74, .86, .37) forwards;
}

@keyframes anim-Logo-linka {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    stroke-dasharray: 20, 0;
    stroke-dashoffset: 990;
  }
}

#Logo_vypln {
  opacity: 0;
  animation: anim-opacity_Logo_vypln var(--anim-opacity_Logo_vypln) cubic-bezier(.99, .06, .88, .58) forwards;
  animation-delay: var(--anim-opacity_Logo_vypln-delay);
}

@keyframes anim-opacity_Logo_vypln {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


/* PRESENTATIONAL STYLES */

.preloader {
  display: flex;
  height: 99vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.preloader::before {
  content: "";
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #0A0A0A;
  z-index: -1;
}
</style>

<script>
import Footer from '../components/footer';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      show: true,
      showContent: false,
      URL: '',
    }
  },
  mounted() {
    /*URL = window.location.href;*/
    this.showToggle();
    /*this.scroll('#model');*/
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
        this.showContent = true
      }, 3000)
    },
  }
}
</script>
