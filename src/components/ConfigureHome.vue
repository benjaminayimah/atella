<template>
    <div class="flx column gap-40">
        <div>
            <div class="fs-103rem mb-16">Select your Atella type</div>
            <div class="flx flx-wrap gap-24">
                <configure-list v-for="item in types" :key="item.id" :item="item" :selections="selections" @do-selection="doSelection" />
            </div>
        </div>
        <div>
            <div class="fs-103rem mb-16">Choose your base color</div>
            <div class="flx flx-wrap gap-24">
                <configure-list v-for="item in colors" :key="item.id" :item="item" :selections="selections" @do-selection="doSelection" />
            </div>
        </div>
        <div>
            <div class="fs-103rem mb-16">Appliance package</div>
            <div class="flx flx-wrap gap-24">
                <configure-list v-for="item in appliances" :key="item.id" :item="item" :selections="selections" @do-selection="doSelection"/>
            </div>
        </div>
        <div>
            <div class="fs-103rem mb-16">Choose your exterior deck</div>
            <div class="flx flx-wrap gap-24">
                <configure-list v-for="item in exterior_decks" :key="item.id" :item="item" :selections="selections" @do-selection="doSelection" />
            </div>
        </div>
        <div>
            <div class="fs-103rem mb-16">Choose your sewage option</div>
            <div class="flx flx-wrap gap-24">
                <configure-list v-for="item in sewages" :key="item.id" :item="item" :selections="selections" @do-selection="doSelection" />
            </div>
        </div>
        <div>
            <div class="fs-103rem mb-16">Choose your blinds</div>
            <div class="flx flx-wrap gap-24">
                <configure-list v-for="item in blinds" :key="item.id" :item="item" :cover="true" :selections="selections" @do-selection="doSelection"/>
            </div>
        </div>
        <div class="grand-total br-16 mt-32 flx column gap-24 bg-white">
            <total-card />
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
</template>

<script>
import TotalCard from '@/components/TotalCard.vue';
import priceMixin from '@/mixins/priceMixin'
import { mapState } from 'vuex';
import ConfigureList from './includes/ConfigureList.vue'
export default {
  components: { ConfigureList, TotalCard },
    name: 'ConfigureHome',
    mixins: [priceMixin],
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
            cost: 10000,
            selections: [],
        }
    },
    methods: {
        doSelection(item) {
            const i = this.selections.find(data => data === item.id)
            if (i) {
                this.selections = this.selections.filter(x => x !== i)
                this.$store.commit('setRotation', 150)
            } else {
                this.selections.push(item.id)
                this.$store.commit('setRotation', item.rotation)
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>