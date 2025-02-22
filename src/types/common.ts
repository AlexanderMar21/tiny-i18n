import type { ComputedRef } from 'vue';

export type InjectionGettersPayload<L> = {
	activeLocale: ComputedRef<L>;
};

export type InjectionSettersPayload = {
	setLocale: (locale: string) => void;
};
