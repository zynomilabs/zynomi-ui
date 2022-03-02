<template>
    <div>
        <form name="frmSearchPayments" id="frmSearchPayments" ref="frmSearchPayments" v-on:submit.prevent
            class="space-y-8 divide-y divide-gray-200">
            <div v-if="isFilterPaymentsVisible" class="px-2 pt-2 border-b space-y-2">
                <h2 v-if="this.heading" class="text-lg leading-7 font-medium">
                    {{this.heading}}
                </h2>
                <div class="sm:col-span-6">
                    <Dropdownlist 
                        name="search_payment_type"
                        label="Payment Type"
                         @selected_item="handleSelectedForSearchIn_Payment_type"             
                         api='payment_type'
                        />
                </div>
                <div class="sm:col-span-6">
                    <label for="name" class="block text-sm font-medium text-gray-700">
                        Statement Period
                    </label>
                    <div class="mt-1 shadow-sm">
                        <VueCtkDateTimePicker label="" v-model="statement_period" range="true" color="#50E3C2" button-color="#50E3C2" onlyDate="true" format="YYYY-MM-DD hh:mm:ss" formatted="L" auto-close="false" class="z-40 flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                    </div>
                </div>
                <div class="sm:col-span-6">
                    <label for="name" class="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <div class="relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <!-- Heroicon name: solid/search -->
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input type="search" name="search_name" id="search_name" ref="search_name"
                            class="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300"
                            placeholder="Search">
                    </div>
                </div>
                <div class="py-3 text-right">
                    <button type="button"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Reset
                    </button>
                    <button @click="searchPayments()" type="submit"
                        class="bg-green-600 border border-transparent  shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Search
                    </button>
                </div>

            </div>
        </form>

    </div>
</template>

<script>
    /**
     * PaymentsSearch.vue
     *
     * @description :: Generic search compoment for [sails._s.capitalize(table) ]. Default search is against [Name] attribute if present.
     *                 It comes with [Mark_As_Delete] filters.
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
     */
    import Dropdownlist from "@/components/Dropdownlist.vue";
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

    export default {
        layout: 'app',
        props: {
            heading: String
        },
        components: {
            Dropdownlist,
            VueCtkDateTimePicker
        },
        data() {
            return {
                isFilterPaymentsVisible: false,
                payment_type: "",
                statement_period: "",
        }
    },
    methods: {
        searchPayments() {
            let args = {}
            args.name = this.$refs.dt_range_statement_period.value
            args.statement_period = this.statement_period
            $nuxt.$emit('evtSearchPayments', args)
        },
        handleSelectedForSearchIn_Payment_type(data){
            this.payment_type = data;
        }
    },
    created() {
        this.$nuxt.$on('evtFilterPayments', (data) => {
            this.isFilterPaymentsVisible = !this.isFilterPaymentsVisible;
        });
    },
};
</script>