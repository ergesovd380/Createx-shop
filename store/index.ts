import { createStore } from 'vuex';
import banner from '@/store/home-page/banner';
import newarrival from '@/store/home-page/newarrival';
import popularCategories from '@/store/home-page/popular-categories';
import trending from '@/store/home-page/trending';
import saleUp from '@/store/home-page/sale-up';


export const myModule = createStore({
  modules: {
    banner,
    newarrival,
    popularCategories,
    trending,
    saleUp
  }
});

export default { myModule };