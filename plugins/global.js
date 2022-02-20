
import Vue from 'vue';
import 'beautify-scrollbar/dist/index.css';
import 'v2-table/dist/index.css';
import V2Table from 'v2-table';
import underscore from 'vue-underscore'
import moment from 'moment'
import VueMoment from 'vue-moment'
import alert from "@/components/modal/alert.vue";

Vue.component('alert', alert)
Vue.use(V2Table);
Vue.use(underscore);
Vue.use(VueMoment);
