<template>
  <div v-if="loading" className="loader">
    <lottie
      :width="1000"
      :height="1000"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/loading.json";

export default {
  components: {
    lottie
  },
  data() {
    return {
      loading: false,
      anim: null, // for saving the reference to the animation
      lottieOptions: {animationData: animationData.default}
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style>
.loader{
  border: 0;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: absolute;
  top: calc(50vh - 75px);
  left: calc(50vw - 75px);
}
.loader:before, .loader:after{
  content: '';
  border: 1em solid #ff5733;
  border-radius: 50%;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  animation: loader 2s linear infinite;
  opacity: 0;
}
.loader:before{
  animation-delay: .5s;
}
@keyframes loader{
  0%{
    transform: scale(0);
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    transform: scale(1);
    opacity: 0;
  }
}
</style>
