import prototype from './prototype.js';

const uiFields = {
	install(Vue, options) {

		if (!options) {
			options = {
				projectName: 'VueUiFields',
				persistentTime: 1000 * 60 * 60 * 12
			};
		} else {
			if (!Object.prototype.hasOwnProperty.call(options, 'projectName')) {
				options.projectName = 'VueUiFields';
			}
			if (!Object.prototype.hasOwnProperty.call(options, 'persistentTime')) {
				options.persistentTime = 1000 * 60 * 60 * 12;
			}
		}

		//global mixin functions
		Vue.component('uiErrors', () => import('./template/ui-errors.vue'));
		Vue.component('uiError', () => import('./template/ui-error.vue'));
		Vue.component('uiFields', () => import('./template/ui-fields.vue'));
		Vue.component('uiField', () => import('./template/ui-field.vue'));

		Vue.prototype.$uiFields = prototype(options);

	}
};

export default uiFields;