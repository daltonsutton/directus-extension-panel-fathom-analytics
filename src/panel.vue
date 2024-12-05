<template>
	<div class="fathom-analytics" :class="{ 'has-header': showHeader }">
		<div class="fathom-analytics-container">
			<iframe :src="fullFathomAnalyticsURL" frameborder="0" style="width: 100%; height: 100%; border: none;"></iframe>
		</div>
	</div>
</template>

<script>
import sha256 from 'crypto-js/sha256';

export default {
	props: {
		showHeader: {
			type: Boolean,
			default: false,
		},
		SiteID: {
			type: String,
			default: '',
		},
		Password: {
			type: String,
			default: '',
		},
	},
	computed: {
		hashedPassword() {
			return sha256(this.Password.toString()).toString();
		},
		fullFathomAnalyticsURL() {
			return `https://app.usefathom.com/share/${encodeURIComponent(this.SiteID)}/directus?password=${encodeURIComponent(this.hashedPassword)}`;
		},
	}
};
</script>

<style scoped>
.fathom-analytics {
	display: flex;
	/* Ensures the container is flex */
	flex-direction: column;
	/* Aligns children in a column */
	height: 100%;
	/* Takes full height */
}

.fathom-analytics.has-header {
	padding-left: 0;
	padding-right: 0;
}

.fathom-analytics-container {
	flex-grow: 1;
	/* Allows the container to fill the available space */
	height: 100%;
	/* Ensures it takes full height */
}
</style>
