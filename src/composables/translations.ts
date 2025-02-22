import { inject, ref, watch } from 'vue';
import { InjectionGettersPayload, InjectionSettersPayload } from '../types/common.ts';

export function useTinyTranslations() {
	const getters = inject<InjectionGettersPayload<string>>('$translate-getters');
	const setters = inject<InjectionSettersPayload>('$translate-setters');

	const locale = ref(getters?.activeLocale.value);

	watch(locale, (val) => {
		if (!val) return;
		setters?.setLocale(val);
	});

	return {
		locale,
		activeLocale: getters?.activeLocale,
	};
}
