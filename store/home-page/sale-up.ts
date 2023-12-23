export default {
  state: () => ({
    items: [
      {
        id: 1,
        stars: 5,
        src: '/images/home-page/sale-up/img-1.png',
        name: 'Leather crossbody bag with gold hardware',
        price: '179.00',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 2,
        stars: 0,
        src: '/images/home-page/sale-up/img-2.png',
        name: 'Skinny push-up jeans',
        price: '80.00',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 3,
        stars: 5,
        src: '/images/home-page/sale-up/img-3.png',
        name: 'Wide heel suede ankle boots',
        price: '149.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 4,
        stars: 5,
        src: '/images/home-page/sale-up/img-1.png',
        name: 'Leather crossbody bag with gold hardware',
        price: '179.00',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 5,
        stars: 0,
        src: '/images/home-page/sale-up/img-2.png',
        name: 'Skinny push-up jeans',
        price: '80.00',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 6,
        stars: 5,
        src: '/images/home-page/sale-up/img-3.png',
        name: 'Wide heel suede ankle boots',
        price: '149.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
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
