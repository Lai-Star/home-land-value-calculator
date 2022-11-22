<template>

  <div>
        <!-- navbar -->
        <nav class="flex justify-between bg-transparent  text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <!-- Nav Links -->
            <ul class="hidden md:flex px-4 mx-auto space-x-52 ul" >
              <li><a class="nlink" href="/">HOME</a></li>
              <li><a class="nlink" href="/model">MODEL</a></li>

              <a class="nlog" href="#"><img class="logo" src="~/assets/img/logo.png" alt="Tailwindcss Navigation" width="50" height="50"></a>

              <li><a class="nlink" href="/evaluation">EVALUATION</a></li>
              <li><a class="nlink" href="/about">ABOUT</a></li>
            </ul>

            <!-- Header Icons -->
            <!-- <div class="hidden xl:flex items-center space-x-5 items-center">
              <a class="hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              <a class="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
              </a>
              <a class="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="red">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>

            </div> -->
          </div>
          <!-- Responsive navbar -->
          <!--<a class="xl:hidden flex mr-6 items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="yellow">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
          </a>-->
          <!--button -->
         <!-- <div class="p-10">
            <div class="dropdown inline-block relative">
              <button class="bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="orange">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
              </ul>
            </div>
          </div> -->

          <div class="xl:hidden flex mr-6 items-center">
            <div class="dropdown inline-block relative">
              <button class="bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="orange">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
              </ul>
            </div>
          </div>
        </nav>

    </div>
</template>

<style>
@font-face {
  font-family: "Roc Grotesk";
  src: local("Roc Grotesk"),
  url('../assets/fonts/Fontspring-DEMO-rocgroteskextrawide-medium.otf') format("truetype");
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.logo{
  transform: translate(0,0);
  content: '';
  transition: 1s;
  border-radius: 50px;
  margin-left: 50px;
}
.logo:hover{
  transform: scale(-1.01);
  transition: 1s;
}

.ul{
  font-family: "Roc Grotesk","Segoe UI";
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
}

.ul * {
  box-sizing: border-box;
  transition: all .35s ease;
}

.ul li {
  display: inline-block;
  margin: .5em 1em;
  padding: 0;
}

.ul .nlink {
  padding: .5em .8em;
  position: relative;
  text-decoration: none;
  font-size: 20px;
}

.ul .nlink::before,
.ul .nlink::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

.ul .nlink::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #28c0b3;
  border-right: 3px solid #2a726c;
  transform: translate(-100%, 50%);
}

.ul .nlink:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #2a726c;
  border-left: 3px solid #28c0b3;
  transform: translate(100%, -50%)
}

.ul .nlink:hover:before,
.ul .nlink:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

.ul .nlink:hover {
  color: #02ffff;
}

/* LOGO */

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
.logo-anim-wrapper svg { position: absolute; }

#Logo_tvar { opacity: 1;}
.reco-logo-path{fill:transparent;stroke:var(--reco-logo-linka-color);}

#Logo_vypln { opacity: 0; }
.lt0{fill:var(--reco-logo-vypln-color);}



.reco-logo-path {
  stroke-dasharray: 0,990;
  stroke-dashoffset: 0;
  animation: anim-Logo-linka var(--anim-Logo-linka) cubic-bezier(.19,.74,.86,.37) forwards;
}
@keyframes anim-Logo-linka {
  0% {opacity: 1;}
  100% {
    opacity: 0;
    stroke-dasharray: 20,0;
    stroke-dashoffset: 990;
  }
}

#Logo_vypln {
  opacity: 0;
  animation: anim-opacity_Logo_vypln var(--anim-opacity_Logo_vypln) cubic-bezier(.99,.06,.88,.58) forwards;
  animation-delay: var(--anim-opacity_Logo_vypln-delay);
}
@keyframes anim-opacity_Logo_vypln {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

</style>

<script>

</script>
