export default {
  state: () => ({
    items: [
      {
        img: 'images/home-page/popular/img-1.png',
        name: 'Tops'
      },
      {
        img: 'images/home-page/popular/img-2.png',
        name: 'T-shirts'
      },
      {
        img: 'images/home-page/popular/img-3.png',
        name: 'Caps'
      },
      {
        img: 'images/home-page/popular/img-4.png',
        name: 'Sandals'
      },
      {
        img: 'images/home-page/popular/img-5.png',
        name: 'Jackets'
      },
      {
        img: 'images/home-page/popular/img-6.png',
        name: 'Coats'
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
