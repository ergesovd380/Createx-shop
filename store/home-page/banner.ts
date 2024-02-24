export default { 
  state: () => ({
    banner: [
      {
        src: '/images/home-page/banner/men.png',
        title: 'Menswear',
        subTitle: 'NewCollection'
      },
      {
        src: '/images/home-page/banner/women.jpg',
        title: 'Womenswear',
        subTitle: 'NewCollection'
      },
      {
        src: '/images/home-page/banner/boy.jpg',
        title: 'Boyswear',
        subTitle: 'NewCollection'
      },
      {
        src: '/images/home-page/banner/girl.jpg',
        title: 'Girlswear',
        subTitle: 'NewCollection'
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
