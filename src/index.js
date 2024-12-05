import { definePanel } from '@directus/extensions-sdk'; 
import PanelComponent from './panel.vue';

export default definePanel({
	id: 'fathom-analytics',
	name: 'Fathom Analytics',
	icon: 'analytics',
	description: 'Display your Fathom Analytics data in your Directus dashboard panel.',
	component: PanelComponent,
	options: [
		{
			field: 'SiteID',
			name: 'Fathom Analytics Site ID',
			type: 'string',
			meta: {
				interface: 'input',
				width: 'full',
				note: 'You can find your Site ID in your Fathom Analytics dashboard.',
				required: true,
			},
		},
		{
			field: 'Password',
			name: 'Fathom Analytics Password',
			type: 'string',
			meta: {
				interface: 'input',
				width: 'full',
				note: 'You can find your password in your Fathom Analytics settings.',
				required: false,
			},
		},
	],
	minWidth: 12,
	minHeight: 8,
});