<template>
  <div>
      <section class="py-32 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="relative">
            <div class="lg:w-2/3">
              <p class="text-sm font-normal tracking-widest text-gray-300 uppercase">Make smarter real estate decisions</p>
              <h1 class="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">R Real Estate</span> Evaluation</h1>
              <p class="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">Real estate valuations and property insights based on Big Data analytics and artificial intelligence.
                Combines mathematical or statistical modeling with databases of existing properties and transactions to calculate real estate values</p>
              <div class="relative inline-flex items-center justify-center my-8 sm:mt-12 group"> <!-- my-32 -->
                <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a href="#" title="" class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start Exploring Inspiration </a>
              </div>
            </div>

            <!-- RIGHT -->
            <div class="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img class="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="../assets/img/hero2.png" alt="" />
            </div>
          </div>
          <div class="icon-scroll"></div>
        </div>
      </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%
}
.icon-scroll {
  width: 30px;
  height: 50px;
  margin-left: -20px;
  bottom: 10px;
  margin-top: 35px;
  margin-bottom: 80px;
  border: 2px solid #fff;
  border-radius: 25px
}
@media (max-width: 767px) {
  .icon-scroll {
    position: relative;
    /* hide mouse scroll in lower max width*/
  }
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll
}
@keyframes scroll {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
    transform: translateY(26px)
  }
}

</style>
