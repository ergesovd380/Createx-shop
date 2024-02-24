export default { 
  state: () => ({
    card: [
      {
        src: '/images/home-page/fashion/img-1.png',
        title: 'cardTF',
        subTitle: 'cardSF',
        brand: 'cardBF',
        date: 'cardDF',
        comment: 'cardCF'
      },
      {
        src: '/images/home-page/fashion/img-2.png',
        title: 'cardTS',
        subTitle: 'cardSS',
        brand: 'cardBS',
        date: 'cardDS',
        comment: 'cardCS'
      }
    ]
  }),

  getters: {
    card(state: any) {
      return state.card;
    }
  },

  namespaced: true
}
