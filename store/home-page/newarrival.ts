export default {
  state: () => ({
    items: [
      {
        id: 1,
        stars: 5,
        src: '/images/home-page/newarrival/img-1.png',
        name: 'Black and white sport cap',
        price: '18.15',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 2,
        stars: 0,
        src: '/images/home-page/newarrival/img-2.png',
        name: 'Metal bridge sunglasses',
        price: '89.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 3,
        stars: 4,
        src: '/images/home-page/newarrival/img-3.png',
        name: 'Green baby romper',
        price: '20.40',
        heart: true,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 4,
        stars: 0,
        src: '/images/home-page/newarrival/img-4.png',
        name: 'Mid-rise slim cropped fit jeans',
        price: '40.00',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 5,
        stars: 5,
        src: '/images/home-page/newarrival/img-5.png',
        name: 'Red dangle earrings',
        price: '29.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 6,
        stars: 0,
        src: '/images/home-page/newarrival/img-6.png',
        name: 'Baby shoes with laces',
        price: '30.60',
        heart: true,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 7,
        stars: 5,
        src: '/images/home-page/newarrival/img-1.png',
        name: 'Black and white sport cap',
        price: '18.15',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 8,
        stars: 0,
        src: '/images/home-page/newarrival/img-2.png',
        name: 'Metal bridge sunglasses',
        price: '89.95',
        heart: false,
        expand: false,
        size: [36, 38, 40, 42],
        color: ['bg-black', 'bg-brown', 'bg-secondary']
      },
      {
        id: 9,
        stars: 4,
        src: '/images/home-page/newarrival/img-3.png',
        name: 'Green baby romper',
        price: '20.40',
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
