<template>
    <div id="configure">
        <banner-scene />
        <section id="config_section" class="flx">
            <div id="configure_left" class="flx column gap-32 overflow-y-scroll">
                <ul class="flx gap-4 mt-24">
                    <li><a class="centered active" href="">1</a></li>
                    <li><a class="centered" href="">2</a></li>
                    <li><a class="centered" href="">3</a></li>
                </ul>
                <div class="title">
                    <div class="fs-3rem">Configure your atella</div>
                    <span>Design the perfect atella for your backyard</span>
                </div>
                <div class="total-card br-16 flx jc-sb gap-24">
                    <div class="flx column">
                        <div class="flx gap-8">
                            <div class="fs-105rem">$192,000</div>
                            <span class="gray">or</span>
                            <div class="gray-2">$1,290/Mon</div>
                        </div>
                        <div class="gray">Estimated cost</div>
                    </div>
                    <div class="centered">
                        <button class="button-primary br-32 confirm-btn">Confirm availability</button>
                    </div>
                </div>
            </div>
            <div id="configure_right" class="flx-grow-1 overflow-y-scroll">
                <div class="flx column gap-40">
                    <div>
                        <div class="fs-103rem mb-16">Select your Atella type</div>
                        <div class="flx flx-wrap gap-24">
                            <configure-list v-for="item in types" :key="item.id" :item="item" />
                        </div>
                    </div>
                    <div>
                        <div class="fs-103rem mb-16">Choose your base color</div>
                        <div class="flx flx-wrap gap-24">
                            <configure-list v-for="item in colors" :key="item.id" :item="item" />
                        </div>
                    </div>
                    <div>
                        <div class="fs-103rem mb-16">Appliance package</div>
                        <div class="flx flx-wrap gap-24">
                            <configure-list v-for="item in appliances" :key="item.id" :item="item" />
                        </div>
                    </div>
                    <div>
                        <div class="fs-103rem mb-16">Choose your exterior deck</div>
                        <div class="flx flx-wrap gap-24">
                            <configure-list v-for="item in exterior_decks" :key="item.id" :item="item" />
                        </div>
                    </div>
                    <div>
                        <div class="fs-103rem mb-16">Choose your sewage option</div>
                        <div class="flx flx-wrap gap-24">
                            <configure-list v-for="item in sewages" :key="item.id" :item="item" />
                        </div>
                    </div>
                    <div>
                        <div class="fs-103rem mb-16">Choose your blinds</div>
                        <div class="flx flx-wrap gap-24">
                            <configure-list v-for="item in blinds" :key="item.id" :item="item" :cover="true" />
                        </div>
                    </div>
                    <div class="grand-total br-16 mt-32 flx column gap-24 bg-white">
                        <div class="total-card br-16 flx jc-sb gap-24">
                            <div class="flx column">
                                <div class="flx gap-8">
                                    <div class="fs-105rem">$192,000</div>
                                    <span class="gray">or</span>
                                    <div class="gray-2">$1,290/Mon</div>
                                </div>
                                <div class="gray">Estimated cost</div>
                            </div>
                            <div class="centered">
                                <button class="button-primary br-32 confirm-btn">Confirm availability</button>
                            </div>
                        </div>
                        <div>Price breakdown</div>
                        <div class="flx gap-40 ai-c">
                            <div class="flx-grow-1 br-16 centered card">
                                <div>
                                    <div class="fs-105rem">$23,000</div>
                                    <span class="gray">Current configuration</span>
                                </div>
                            </div>
                            +
                            <div class="flx-grow-1 br-16 centered card">
                                <div>
                                    <div class="fs-105rem">$10,000</div>
                                    <span class="gray">Base installation cost</span>
                                </div>
                            </div>
                        </div>
                        <div class="flx-grow-1 br-16 centered card">
                            <div>
                                <div class="fs-105rem">Free to reserve</div>
                                <span class="gray">Feel free to change your mind. Reservations can be changed at any time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BannerScene from '@/components/BannerScene.vue'
import ConfigureList from '@/components/includes/ConfigureList.vue';
export default {
    components: { BannerScene, ConfigureList },
    name: 'ConfigureView',
    computed: {
        ...mapState({
            types: (state) => state.types,
            colors: (state) => state.colors,
            appliances: (state) => state.appliances,
            exterior_decks: (state) => state.exterior_decks,
            sewages: (state) => state.sewages,
            blinds: (state) => state.blinds
        })
    },
    data() {
        return {
            configuration: '',
            cost: 10000
        }
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
    padding: 0 40px 60px 0;
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
.total-card, .grand-total{
    padding: 24px;
    border: 1px solid #F0F0F0
}
.confirm-btn{
    padding: 8px 14px;
}
.gray-2 {
    color: #4c4c4c;
}
ul {
    a {
        color: #888;
        height: 50px;
        width: 50px;
        background: rgba(198, 189, 179, 0.19);
        border-radius: 25px;
    }
    .active {
        color: #000;
        background: #C6BDB3;
    }
    li:first-child::after, li:nth-child(2):after {
        content: '';
        width: 55px;
        top: -55%;
        margin-left: 55px;
        display: inline-block;
        position: relative;
        border-bottom: 1px solid #D9D9D9;
    }
}
.grand-total {
    .card {
        padding: 24px;
        background: rgba(198, 189, 179, 0.19);
        text-align: center;
    }
}
</style>