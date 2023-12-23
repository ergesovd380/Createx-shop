import { createStore } from 'vuex';
import banner from '@/store/home-page/banner';
import categories from '@/store/home-page/categories';
import newarrival from '@/store/home-page/newarrival';
import popularCategories from '@/store/home-page/popular-categories';
import trending from '@/store/home-page/trending';
import saleUp from '@/store/home-page/sale-up';


export const myModule = createStore({
  modules: {
    banner,
    categories,
    newarrival,
    popularCategories,
    trending,
    saleUp
  }
});

export default { myModule };