export default {
  state: () => ({
    items: [
      {
        src: '/images/home-page/categories/women.png',
        title: "Women's"
      },
      {
        src: '/images/home-page/categories/men.png',
        title: "Men's"
      },
      {
        src: '/images/home-page/categories/kid.png',
        title: "Kids'"
      }
    ]
  }),

  getters: {
    items(state: any) {
      return state.items;
    }
  },
  
  namespaced: true
}
