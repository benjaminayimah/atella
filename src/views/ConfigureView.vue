<template>
    <div id="configure" class="configure_view2" :class="{ 'configure_view2' : configTab.page === 2 || configTab.page === 3 }">
        <banner-scene :rotation="rotation" />
        <section id="config_section" class="flx">
            <div id="configure_left" class="flx column gap-24 overflow-y-scroll">
                <ul class="flx gap-4">
                    <li><router-link :to="{ name: 'ConfigureHome' }" class="centered active">1</router-link></li>
                    <li><router-link :to="{ name: 'ConfigureAddress' }" class="centered">2</router-link></li>
                    <li><router-link :to="{ name: 'ConfigurePayment' }"  class="centered">3</router-link></li>
                    <li><router-link :to="{ name: 'ConfigureAppointment' }"  class="centered">4</router-link></li>
                </ul>
                <div class="title">
                    <div class="fs-3rem">{{ configTab.title }}</div>
                    <span>{{ configTab.sub_title }}</span>
                </div>
                <total-card :button="true" v-if="configTab.page === 10" />
            </div>
            <div id="configure_right" class="flx-grow-1 overflow-y-scroll">
                <router-view></router-view>
            </div>
        </section>
    </div>
    <cost-modal />
</template>

<script>
import { mapState } from 'vuex';
import BannerScene from '@/components/BannerScene.vue'
import CostModal from '@/components/modals/CostModal.vue';
import TotalCard from '@/components/TotalCard.vue';
export default {
    components: { BannerScene, CostModal, TotalCard },
    name: 'ConfigureView',
    computed: {
        ...mapState({
            rotation: (state) => state.rotation,
            configTab: (state) => state.configTab
        })
    }
}
</script>

<style lang="scss" scoped>
#configure{
    height: 100dvh;
    background: #FBFBFB;
}
#configure_left{
    flex-basis: 40%;
    padding-right: 40px;
    position: sticky;
    padding: 32px 40px 32px 0;
    container-type: inline-size;
}
#configure_right{
    border-left: 1px solid #D9D9D9;
    padding: 40px 0 60px 40px;
}
#config_section{
    padding: 0 80px;
    height: 50dvh;
    top: 50dvh;
}
.title{
    width: 60%;
    div {
        line-height: 1.2;
    }
}
ul {
    a {
        color: #888;
        height: 50px;
        width: 50px;
        background: rgba(198, 189, 179, 0.19);
        border-radius: 25px;
        cursor: default;
    }
    .router-link-exact-active {
        color: #000;
        background: #C6BDB3;
    }
    li:first-child::after, li:nth-child(2):after, li:nth-child(3):after {
        content: '';
        width: 55px;
        top: -50%;
        margin-left: 55px;
        display: flex;
        position: relative;
        border-bottom: 1px solid #D9D9D9;
    }
}
@container(inline-size <= 500px) {
    .title{
        width: unset;
    }
}
@media screen and (max-width: 900px){
    #config_section{
        flex-direction: column;
        padding: 0 20px;
        height: unset;
    }
    #configure{
        height: unset;
    }
    #configure_right{
        border-left: unset;
        padding: 40px 0
    }
    #configure_left {
        padding: 32px 0
    }
    
}
</style>