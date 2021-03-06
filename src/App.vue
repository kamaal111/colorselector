<template>
	<AppHeader />
	<component :is="currentView" />
	<AppFooter />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import { makePath } from './utils/routing';
import { currentView } from './routes';

const currentPath = ref(makePath(window.location.pathname));

function setup() {
	onMounted(() => {
		window.addEventListener('hashchange', () => {
			const path = makePath(window.location.pathname);
			if (path === currentPath.value) return;
			currentPath.value = path;
		});
	});
}

export default defineComponent({
	name: 'App',
	computed: {
		currentView: () => currentView(currentPath.value),
	},
	setup,
	components: {
		AppHeader,
		AppFooter,
	},
});
</script>

<style lang="scss">
@use 'sass:map';

@import 'styles/variables';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 32px;
}

@media (prefers-color-scheme: no-preference) {
	* {
		background-color: map.get($background-colors, 'light');
	}

	#app {
		color: map.get($text-colors, 'light');
	}
}

@media (prefers-color-scheme: light) {
	* {
		background-color: map.get($background-colors, 'light');
	}

	#app {
		color: map.get($text-colors, 'light');
	}
}

@media (prefers-color-scheme: dark) {
	* {
		background-color: map.get($background-colors, 'dark');
	}

	#app {
		color: map.get($text-colors, 'dark');
	}
}
</style>
