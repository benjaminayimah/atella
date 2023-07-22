<template>
  <div class="home">
    <header>
          <div class="nav-wrapper grid grid-col-3 ai-c">
            <div>
              <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 186 65">
                        <path id="Path_275" data-name="Path 275" d="M-1990,65V0h186V65Zm4-4h178V4h-178Zm153.968-11-1.3-3.816h-6.408L-1841.08,50h-3.793l6.48-17.136h3.865L-1828.12,50Zm-6.72-6.624h4.441l-2.16-6.288h-.049ZM-1866.976,50V32.864h3.768V46.832h8.352V50Zm-23.9,0V32.864h3.768V46.832h8.352V50Zm-25.223,0V32.864h12.816v3.168h-9.049V39.7h8.3v2.928h-8.3v4.2h9.24V50Zm-20.544,0V36.032h-5.136V32.864h14.04v3.168h-5.135V50Zm-16.656,0-1.3-3.816h-6.408L-1962.352,50h-3.792l6.48-17.136h3.864L-1949.392,50Zm-6.719-6.624h4.44l-2.16-6.288h-.048Z" transform="translate(1990)" fill="#bb9b74"/>
                    </svg>
                </a>
            </div>
            <nav class="jc-c flx">
              <ul class="flx br-32">
                  <li><router-link to="/">Your Atella</router-link></li>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">Details</a></li>
                  <li><a href="#">FAQs</a></li>
              </ul>
            </nav>
            <div class="txt-a-r">
                  <router-link to="/configure" class="a-button button-secondary br-32 btn-lng">Configure</router-link>
              </div>
          </div>
      </header>
    <div class="main-banner" id="banner">
      <div class="counter fixed" @mouseover="hoverIn" @mouseout="hoverOut">
        <div class="progress">
          <span>23/50</span>
        </div>
      </div>
      <div class="hero-container flx ai-fe">
        <div class="w-100 flx column gap-32">
          <div class="hero-image bg-img"></div>
          <div class="flx ai-c column hero-text gap-24">
            <div>What has your backyard done for you lately</div>
            <router-link to="/configure" class="a-button button-primary br-32 btn-lng">Configure</router-link>
          </div>
        </div>
      </div>
      <div class="backdrop-img absolute"></div>

    </div>
    <section class="mt-60 flx jc-c section-1">
      <div class="flx section-1-wrapper column ai-c">
        <div class="fs-3rem txt-a-c">
          Available now in ontario canada starting from $125k or $900/mon
        </div>
        <div class="mt-32">
          <router-link to="/configure" class="button-secondary a-button btn-lng br-32 gap-8 flx ai-c">
            Reserve Now
            <svg xmlns="http://www.w3.org/2000/svg" height="7" viewBox="0 0 43 5.774">
              <path d="M43,3.5,38,.613V6.387ZM0,4H38.5V3H0Z" transform="translate(0 -0.613)" fill="#fff"/>
          </svg>
          </router-link>
          </div>
      </div>
    </section>

  <page-footer />
  </div>
</template>

<script>
import PageFooter from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: { PageFooter },
  mounted () {
    document.addEventListener('scroll', this.scrollIn )
    setTimeout(()=> {
      document.querySelector('.home').classList.add('header-in')
    }, 500)
  },
  methods: {
    hoverIn() {
      console.log('hove-in')
      document.querySelector('.main-banner').classList.add('hover-in')
    },
    hoverOut() {
      document.querySelector('.main-banner').classList.remove('hover-in')
    },
    scrollIn() {
      let divPosition = document.getElementById('banner').getBoundingClientRect().top
      if(divPosition < -40) {
        document.querySelector('.main-banner').classList.add('default-in')
      }
      else if(divPosition == 0) {
        document.querySelector('.main-banner').classList.remove('default-in')
      }
      var scrollPosition = window.scrollY;
      var translateValue = scrollPosition * 0.001; // Adjust the multiplier to control the speed of the animation
      // var box = document.querySelector('.box');
      console.log(translateValue)
      // box.style.transform = 'translateX(' + translateValue + 'px)';
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  span {
    background-color: #fff;
    padding: 8px 24px;
  }
}
.main-banner{
  height: 95dvh;
  background-color: #292F2B;;
  position: relative;
  overflow: hidden;
}
.hero-container{
  height: 100%;
  padding-bottom: 50px;
}
header {
  position: fixed;
  width: 100%;
  top: -80px;
  z-index: 100;
  transition: 1s ease-out all;
}
.header-in{
  header {
    top: 40px !important;
  }
}
ul {
  padding: 14px;
  background-color: rgba(114, 112, 112, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
}
nav {
    a {
        padding: 14px 32px;
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
    }
}
.nav-wrapper{
  margin-inline: auto;
  width: 90%;
}

.hero-image{
  background-image: url('../assets/images/hero_image.png');
  height: 400px;
  width: 100%;
  z-index: 10;
  transition: 0.8s ease-out all;
}
.backdrop-img{
  background-image: url('../assets/images/Background_image.png');
  width: 100%;
  transition: 0.8s ease-out all;
  z-index: 0;
  bottom: 0;
  height: 0vh;
  opacity: 0;
  background-position-y: -150px;
}
.default-in {
  .backdrop-img{
    height: 100dvh;
    opacity: 1;
    bottom: 0;
    background-repeat: no-repeat;
  }
  .hero-image {
    transform: translateY(20px);
  }
}
.hover-in{
  .backdrop-img{
    bottom: 0;
    height: 0vh;
  }
  .hero-image {
    transform: translateY(0px);
  }
}
.hero-text{
  color: #fff;
  z-index: 10;
  div {
    text-transform: uppercase;
    width: 30%;
    font-size: 1.8rem;
    text-align: center;
  }
}
.counter{
  transition: 0.4s linear;
  inset: 123px 120px auto auto;
  background-color: rgba(114, 112, 112, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  padding: 24px 16px;
  overflow: hidden;
  border-radius: 50%;
  z-index: 20;
  cursor: pointer;
  .progress {
    color: #fff;
  }
}
.section-1{
  padding: 40px;
}
.section-1-wrapper{
  max-width: 40%;
}
</style>
