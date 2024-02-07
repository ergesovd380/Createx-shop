import { createStore } from 'vuex';
// Home-page
import banner from '@/store/home-page/banner';
import newarrival from '@/store/home-page/newarrival';
import popularCategories from '@/store/home-page/popular-categories';
import trending from '@/store/home-page/trending';
import saleUp from '@/store/home-page/sale-up';

// Components
import products from './components/products';


export const myModule = createStore({
  modules: {
// PagesHome-page
    banner,
    newarrival,
    popularCategories,
    trending,
    saleUp,


// Components
    products,
  }
});

export default { myModule };