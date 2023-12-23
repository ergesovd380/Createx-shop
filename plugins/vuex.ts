import { myModule } from '@/store';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(myModule);
  // Install the store instance as a plugin
});
