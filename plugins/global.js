
import Vue from 'vue';
import 'beautify-scrollbar/dist/index.css';
import 'v2-table/dist/index.css';
import V2Table from 'v2-table';
import underscore from 'vue-underscore'
import moment from 'moment'
import VueMoment from 'vue-moment'
import alert from "@/components/modal/alert.vue";
import VueCodemirror from 'vue-codemirror'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/addon/selection/active-line.js'
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';

Vue.component('alert', alert)
Vue.use(V2Table);
Vue.use(underscore);
Vue.use(VueMoment);
Vue.use(VueCodemirror)
Vue.filter('numFormat', numFormat(numeral));
