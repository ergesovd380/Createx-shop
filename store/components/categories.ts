export default { 
  state: () => ({
    categories: [
      {
        src: '/images/home-page/categories/women.png',
        title: "Womens"
      },
      {
        src: '/images/home-page/categories/men.png',
        title: "Mens"
      },
      {
        src: '/images/home-page/categories/kid.png',
        title: "Kids"
      }
    ]
  }),

  getters: {
    banner(state: any) {
      return state.banner;
    },
    categories(state: any) {
      return state.categories;
    }
  },

  namespaced: true
}
