<template>

  <div>
        <!-- navbar -->
        <nav class="flex justify-center justify-between bg-transparent text-white w-screen -mt-8">


            <!-- Nav Links -->
           <!-- <ul class="hidden md:flex pl-36 space-x-52 ul w-screen bg-black py-4" >-->
              <ul class="hidden md:flex pl-36 space-x-52 w-screen bg-black py-4" >

              <!-- <nuxt-link :to="{ path: '',hash:'#top'}" class="nlink"> HOME </nuxt-link> -->
              <a href="javascript:document.getElementById('top').scrollIntoView(true);" class="nlink"> HOME </a>
              <a href="javascript:document.getElementById('model').scrollIntoView(true);" class="nlink"> MODEL </a>

              <a href="javascript:document.getElementById('top').scrollIntoView(true);"><img class="logo" src="~/assets/img/logo.png" alt="R" width="50" height="50"></a>

              <a href="javascript:document.getElementById('evaluation').scrollIntoView(true);" class="nlink"> EVALUATION </a>
              <a href="javascript:document.getElementById('about').scrollIntoView(true);" class="nlink"> ABOUT </a>

             </ul>


           <div class="xl:hidden mr-9 items-center left-0 top-0">
             <div class="dropdown left-0 top-0">

               <svg @click="hidden('menu-button')"
                 xmlns="http://www.w3.org/2000/svg"
                 id="menu-button"
                 class="h-6 w-6 cursor-pointer md:hidden block"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">

                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M4 6h16M4 12h16M4 18h16"
                 />
               </svg>

               <div class="hidden md:flex md:items-center md:w-auto" id="menu">
                 <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                   <li>
                     <a class="md:p-4 py-2 block hover:text-sky-400 text-white" href="/">HOME</a>
                   </li>
                   <li>
                     <a class="md:p-4 py-2 block hover:text-sky-400 text-white"  href="/model">MODEL</a>
                   </li>
                   <li>
                     <a class="md:p-4 py-2 block hover:text-sky-400 text-white" href="/evaluation">EVALUATION</a>
                   </li>
                   <li>
                     <a class="md:p-4 py-2 block hover:text-sky-400 text-white" href="/about">ABOUT</a>
                   </li>
                 </ul>
               </div>

              <!-- <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                 <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                 <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                 <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
               </ul> -->
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

ul{
  font-family: "Roc Grotesk","Segoe UI",serif;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
}
ul * {
  box-sizing: border-box;
  transition: all .35s ease;
}

ul li {
  display: inline-block;
  margin: .5em 1em;
  padding: 0;
}

ul .nlink {
  /*padding: .5em .8em;*/
  position: relative;
  text-decoration: none;
  font-size: 20px;
  margin-top: 10px;
}

/*
ul .nlink::before,
ul .nlink::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

ul .nlink::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #28c0b3;
  border-right: 3px solid #2a726c;
  transform: translate(-100%, 50%);
}

ul .nlink:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #2a726c;
  border-left: 3px solid #28c0b3;
  transform: translate(100%, -50%)
}

ul .nlink:hover:before,
ul .nlink:hover:after{
  transform: translate(0,0);
  opacity: 1;
}*/

ul .nlink:hover {
  color: #02ffff;
}


/* LOGO */


</style>


<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    hidden(x) {
      document.querySelector('#menu').classList.toggle("hidden");
    },
    goto(x) {
      //this.$router.replace({name: this.$route.name, hash: x});
      //console.log("CLICKED");
      //document.getElementById(x).scrollIntoView();
      this.$router.replace({name: this.$route.name, hash: x});
    },
    /*goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    },*/
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
