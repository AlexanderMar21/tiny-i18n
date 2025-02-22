<template>
	<div>
		<h1>Active Locale: {{ activeLocale }}</h1>
		<br />
		<select v-model="locale">
			<option value="en_EN">En</option>
			<option value="de_DE">De</option>
		</select>
	</div>
</template>
<script lang="ts" setup>
import { useTinyTranslations } from '../../src/composables/translations';
const { locale, activeLocale } = useTinyTranslations();
</script>
