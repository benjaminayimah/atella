<template>
  <div class="home">
    <banner-scene />
    <section class="mt-60">
      <div class="flx jc-c">
        <button class="button-secondary br-32 gap-8">
          Real cost of buying an Atella
          <span class="centered br-24">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.635" height="11.154" viewBox="0 0 5.635 11.154">
              <path id="Vector" d="M1.26,12.077a.577.577,0,0,1-.408-.985L4.968,6.976a.674.674,0,0,0,0-.952L.852,1.908a.577.577,0,0,1,.816-.816L5.784,5.208a1.829,1.829,0,0,1,0,2.584L1.668,11.908A.575.575,0,0,1,1.26,12.077Z" transform="translate(-0.683 -0.923)"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import BannerScene from '@/components/BannerScene.vue'

export default {
  name: 'HomeView',
  components: { BannerScene }
}
</script>
<style lang="scss" scoped>
button {

  span {
    background-color: #fff;
    padding: 8px 24px;
  }
}
.button-secondary{
  padding: 14px 18px 14px 30px;
}
</style>
