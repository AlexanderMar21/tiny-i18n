import { computed, ref, type App } from 'vue';
import type { InjectionGettersPayload, InjectionSettersPayload } from '../types/common.ts';

export default {
	install: (app: App, options: any) => {
		// inject a globally available $translate() method
		// locales
		// set locale
		const locale = ref('');
		const setLocale = (loc: string) => {
			locale.value = loc;
		};
		app.provide<InjectionGettersPayload<string>>('$translate-getters', {
			activeLocale: computed(() => locale.value),
		});
		app.provide<InjectionSettersPayload>('$translate-setters', { setLocale });
	},
};
