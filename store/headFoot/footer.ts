export default { 
  state: () => ({
    goTop: {
      id: 'Go_Top',
      title: 'goTop'
    },
    footer: [
// Help
      {
        id: 'FT_1',
        title: 'Help',
        menu: [
          {
            id: 'M_1',
            title: 'Delivery & returns'
          },
          {
            id: 'M_2',
            title: 'FAQ'
          },
          {
            id: 'M_3',
            title: 'Track order'
          },
          {
            id: 'M_4',
            title: 'Contacts'
          },
          {
            id: 'M_5',
            title: 'Blog'
          }
        ]
      },
// Shop
      {
        id: 'FT_2',
        title: 'Shop',
        menu: [
          {
            id: 'M_6',
            title: 'New arrivals'
          },
          {
            id: 'M_7',
            title: 'Trending now'
          },
          {
            id: 'M_8',
            title: 'Sales'
          },
          {
            id: 'M_9',
            title: 'Brands'
          }
        ]
      },
// Get in touch
      {
        id: 'FT_3',
        title: 'Get in touch',
        menu: [
          {
            id: 'M_10',
            title: 'Call: ',
            value: '(405) 555-0128'
          },
          {
            id: 'M_11',
            title: 'Email: ',
            value: 'hello@createx.com'
          }
        ],
        icons: ['mdi-facebook', 'mdi-instagram', 'mdi-twitter', 'mdi-youtube', 'mdi-pinterest']
      },
// Download our app
      {
        id: 'FT_4',
        title: 'Download our app',
        img: ['/images/footer/app-store.png', '/images/footer/google-play.png']
      }
    ]
  }),

  getters: {
    footerMenu (state: any) {
      return state.footer;
    },
    goTOp (state: any) {
      return state.goTop.id;
    }
  },

  namespaced: true
}
