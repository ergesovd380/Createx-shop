export default {
  state: () => ({
    items: [
      {
        id: 1,
        stars: 5,
        src: '/images/home-page/trending/img-1.png',
        name: 'Shirt with insertion lace trims',
        price: '49.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 2,
        stars: 4,
        src: '/images/home-page/trending/img-2.png',
        name: 'Chrono watch with blue leather belt',
        price: '120.60',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 3,
        stars: 0,
        src: '/images/home-page/trending/img-3.png',
        name: 'Check coat with colour contrast',
        price: '183.45',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 4,
        stars: 5,
        src: '/images/home-page/trending/img-1.png',
        name: 'Shirt with insertion lace trims',
        price: '49.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 5,
        stars: 4,
        src: '/images/home-page/trending/img-2.png',
        name: 'Chrono watch with blue leather belt',
        price: '120.60',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 6,
        stars: 0,
        src: '/images/home-page/trending/img-3.png',
        name: 'Check coat with colour contrast',
        price: '183.45',
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
