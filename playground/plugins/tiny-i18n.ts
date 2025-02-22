import test from '../../src/plugin/createTinyi18n';
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(test);
});
