import { createStore } from 'vuex'

export default createStore({
  state: {
    types: [
      {id: 1, name: 'Atella studio', sub_title: '455 Gross sq. fe.', price: 192500, image: require('@/assets/images/houses/atella_type.png')},
      {id: 2, name: 'Atella one', sub_title: '455 Gross sq. fe.', price: 192500, image: require('@/assets/images/houses/atella_type.png')}
    ],
    colors: [
      {id: 3, name: 'Light', image: require('@/assets/images/houses/color_light.png')},
      {id: 4, name: 'Dark', image: require('@/assets/images/houses/color_dark.png')},
      {id: 5, name: 'Neutral', image: require('@/assets/images/houses/color_neutral.png')}
    ],
    appliances: [
      {id: 6, name: 'Standard', price: 5000, image: require('@/assets/images/houses/appliance_standard.png')},
      {id: 7, name: 'Premium', price: 192500, image: require('@/assets/images/houses/appliance_premium.png')}
    ],
    exterior_decks: [
      {id: 8, name: 'Standard', price: 5000, image: require('@/assets/images/houses/exteriordeck.png')},
      {id: 9, name: 'Extra wide', price: 192500, image: require('@/assets/images/houses/exteriordeck.png')}
    ],
    sewages: [
      {id: 10, name: 'Grey water', price: 5000, image: require('@/assets/images/houses/sewage_1.png')},
      {id: 11, name: 'Connect with principal dwelling', price: 192500, image: require('@/assets/images/houses/sewage_2.png')}
    ],
    blinds: [
      {id: 12, name: 'No blinds', price: 5000, image: require('@/assets/images/houses/blinds.png')},
      {id: 13, name: 'Roller blinds', price: 192500, image: require('@/assets/images/houses/blinds.png')}
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
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
