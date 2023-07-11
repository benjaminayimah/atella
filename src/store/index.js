import { createStore } from 'vuex'

export default createStore({
  state: {
    rotation: 150,
    total: {
      
    },
    types: [
      {id: 1, name: 'Atella studio', sub_title: '455 Gross sq. fe.', price: 192500, image: require('@/assets/images/houses/atella_type.png'), rotation: 150 },
      {id: 2, name: 'Atella one', sub_title: '455 Gross sq. fe.', price: 192500, image: require('@/assets/images/houses/atella_type.png'), rotation: 100}
    ],
    colors: [
      {id: 3, name: 'Light', image: require('@/assets/images/houses/color_light.png'), rotation: 90},
      {id: 4, name: 'Dark', image: require('@/assets/images/houses/color_dark.png'), rotation: 80},
      {id: 5, name: 'Neutral', image: require('@/assets/images/houses/color_neutral.png')}
    ],
    appliances: [
      {id: 6, name: 'Standard', price: 5000, image: require('@/assets/images/houses/appliance_standard.png'), rotation: 130},
      {id: 7, name: 'Premium', price: 192500, image: require('@/assets/images/houses/appliance_premium.png'), rotation: 70}
    ],
    exterior_decks: [
      {id: 8, name: 'Standard', price: 5000, image: require('@/assets/images/houses/exteriordeck.png'), rotation: 170},
      {id: 9, name: 'Extra wide', price: 192500, image: require('@/assets/images/houses/exteriordeck.png'), rotation: 60}
    ],
    sewages: [
      {id: 10, name: 'Grey water', price: 5000, image: require('@/assets/images/houses/sewage_1.png'), rotation: 180},
      {id: 11, name: 'Connect with principal dwelling', price: 192500, image: require('@/assets/images/houses/sewage_2.png'), rotation: 140}
    ],
    blinds: [
      {id: 12, name: 'No blinds', price: 5000, image: require('@/assets/images/houses/blinds.png'), rotation: 50},
      {id: 13, name: 'Roller blinds', price: 192500, image: require('@/assets/images/houses/blinds.png'), rotation: 40}
    ],
    cost_modal: false
  },
  mutations: {
    openCostModal(state) {
      state.cost_modal = true
    },
    closeCostModal(state) {
      state.cost_modal = false
    },
    setRotation(state, payload) {
      state.rotation = payload
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
