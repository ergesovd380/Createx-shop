export default { 
  state: () => ({
    items: [
      {
        src: '/images/home-page/banner/men.png',
        title: 'Menswear',
        subTitle: 'New collection'
      },
      {
        src: '/images/home-page/banner/women.jpg',
        title: 'Womenswear',
        subTitle: 'New collection'
      },
      {
        src: '/images/home-page/banner/boy.jpg',
        title: 'Boyswear',
        subTitle: 'New collection'
      },
      {
        src: '/images/home-page/banner/girl.jpg',
        title: 'Girlswear',
        subTitle: 'New collection'
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
