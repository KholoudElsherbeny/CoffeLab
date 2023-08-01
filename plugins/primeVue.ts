import PrimeVue from "primevue/config";


// import as directive

// Importing PrimeVue Components
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import InputText from "primevue/inputtext";
import InputSwitch from 'primevue/inputswitch';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Textarea from 'primevue/textarea';

import "primevue/resources/themes/lara-light-indigo/theme.css"; 
import 'primeicons/primeicons.css';
import Dialog from 'primevue/dialog';
import Rating from "primevue/rating";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'; 
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  // Register PrimeVue Components
  nuxtApp.vueApp.component('pv-button', Button);
  nuxtApp.vueApp.component('Paginator', Paginator);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('InputSwitch', InputSwitch);
  nuxtApp.vueApp.component('Rating', Rating);
  nuxtApp.vueApp.component('Dialog', Dialog);
  nuxtApp.vueApp.component('Badge', Badge);
  nuxtApp.vueApp.directive('badge', BadgeDirective);
  nuxtApp.vueApp.component('DataTable', DataTable);
  nuxtApp.vueApp.component('Column', Column);
  nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
  nuxtApp.vueApp.component('Row', Row);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Textarea', Textarea);
});
