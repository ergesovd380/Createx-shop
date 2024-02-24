import { createStore } from 'vuex';
// Home-page
import banner from '@/store/home-page/banner';
import popularCategories from '@/store/home-page/popular-categories';
import fashion from '@/store/home-page/fashion';

// Components
import products from './components/products';
import categories from './components/categories';


export const myModule = createStore({
  modules: {
// PagesHome-page
    banner,
    popularCategories,
    fashion,

    
// Components
    products,
    categories
  }
});

export default { myModule };