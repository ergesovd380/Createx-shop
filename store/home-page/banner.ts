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
    ],
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
