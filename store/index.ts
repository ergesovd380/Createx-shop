import { createStore } from 'vuex';
// Home-page
import banner from '@/store/home-page/banner';
import popularCategories from '@/store/home-page/popular-categories';

// Components
import products from './components/products';


export const myModule = createStore({
  modules: {
// PagesHome-page
    banner,
    popularCategories,

    
// Components
    products,
  }
});

export default { myModule };