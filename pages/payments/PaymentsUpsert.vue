<template>
    <section v-if="isUpsertPaymentsVisible" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title"
        role="dialog" aria-modal="true">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0" aria-hidden="true"></div>
            <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                <div class="w-screen max-w-md">
                    <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                        <div class="flex-1 h-0 overflow-y-auto">
                            <header class="space-y-1 py-6 px-4 bg-gray-200 sm:px-6">
                                <div class="flex items-center justify-between space-x-3">
                                    <h2 class="text-lg leading-7 font-medium text-gray-700">
                                        Payments
                                    </h2>
                                    <div class="h-7 flex items-center">
                                        <button v-on:click="closePaymentsPanel()" aria-label="Close panel"
                                            class="text-gray-600 hover:text-gray-900 transition ease-in-out duration-150">
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-sm leading-5 text-gray-500">
                                        Create or update Payments record
                                    </p>
                                </div>
                            </header>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                    <div class="space-y-6 pt-6 pb-5">
                                        <form name="frmPayments" id="frmPayments"
                                            class="space-y-8 divide-y divide-gray-200" @submit.prevent="SaveAndUpdate">
                                            <div class="sm:overflow-hidden">
                                                <div class="bg-white space-y-6">
                                                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                        
                                                    
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Payment Ref. #
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.invoice_nuber" type="text" id="invoice_nuber"
                                                                    name="invoice_nuber" autocomplete="invoice_nuber"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                                <Dropdownlist
                                                                    v-model="data.payment_to_user"
                                                                    @selected_item="handleSelectedIn_payment_to_user"
                                                                    id="payment_to_user"
                                                                    name="payment_to_user"
                                                                    label="Payment to"
                                                                    api='users'
                                                                    :selected_value="data.payment_to_user"
                                                                />
                                                    </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Payment date
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                               <VueCtkDateTimePicker label="" color="#50E3C2" button-color="#50E3C2" onlyDate="true" format="YYYY-MM-DD hh:mm:ss" formatted="L" v-model="data.payment_date" auto-close="false" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <Dropdownlist v-model="data.payment_type"
                                                                @selected_item="handleSelectedInPayment_type"
                                                                name="payment_type" label="Payment Type"
                                                                :data="{'data' : [{'code' : 'ACH', 'name':'ACH'},{'code' : 'Wire Transfer', 'name':'Wire Transfer'},{'code' : 'Cheque', 'name':'Cheque'},{'code' : 'Cash', 'name':'Cash'}]}"
                                                                :selected_value="data.payment_type" />
                                                        </div>

                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Amount
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.payment_amount" type="text" id="payment_amount"
                                                                    name="payment_amount" autocomplete="payment_amount"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                             <Dropdownlist
                                                                v-model="data.payment_currency"
                                                                @selected_item="handleSelectedInPayment_currency"
                                                                id="payment_currency"
                                                                name="payment_currency"
                                                                label="Currency"
                                                                api='currency'
                                                                :selected_value="data.payment_currency"
                                                            />
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Exchange Rate
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.currency_exchange_rate" type="text" id="currency_exchange_rate"
                                                                    name="currency_exchange_rate" autocomplete="currency_exchange_rate"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <Dropdownlist v-model="data.payment_status"
                                                                @selected_item="handleSelectedInPayment_Status"
                                                                name="payment_status" label="Payment Status"
                                                                :data="{'data' : [{'code' : 'Pending', 'name':'Pending'},{'code' : 'Complete', 'name':'Complete'}]}"
                                                                :selected_value="data.payment_status" />
                                                            
                                                        </div>
                                                        <div class="sm:col-span-6">
                                                        <label
                                                            for="about"
                                                            class="block text-sm font-medium text-gray-700"
                                                        >
                                                            Description
                                                            </label>
                                                            <div class="mt-1">
                                                                <textarea
                                                                    v-model="data.description"
                                                                    id="description"
                                                                    name="description"
                                                                    rows="3"
                                                                    class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300"
                                                                ></textarea>
                                                            </div>
                                                            <p class="mt-2 text-sm text-gray-500">Write any additional information about the transaction.</p>
                                                    </div>
                                                       
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                            <span class="inline-flex rounded-md shadow-sm">
                                <button type="button"
                                    class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                    Reset
                                </button>
                            </span>
                            <span class="inline-flex rounded-md shadow-sm">
                                <button v-on:click="upsertPayments" type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
                                    Save
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /**
     * PaymentsUpsert.vue
     *
     * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
     *                 Additional events published to handle custom functions post "Save" operation.                 
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
        components: {
            Dropdownlist,
            VueCtkDateTimePicker
        },
        data() {
            return {
                isUpsertPaymentsVisible: false,
                data: { },
                api: ""
        }
    },
    methods: {
        async upsertPayments(args) {
            try {
                if (this.$_.isUndefined(this.data.id)) {
                    const {
                        data
                    } = await this.$axios.post(this.$config.apiURL  + "Payments", this.data);
                } else {
                    const {
                        data
                    } = await this.$axios.put(this.$config.apiURL  + "Payments/" + this.data.id, this.data);
                }
                this.data = {}
                this.isUpsertPaymentsVisible = !this.isUpsertPaymentsVisible;
                $nuxt.$emit('evtRefreshPaymentsDatatable')
                this.$toast.success("Record saved successfully")
            } catch (error) {
                console.log(error)
                this.$toast.error('Oops!Save failed...')
            } finally {

            }
        },
        async deletePayments() {
            try {
                //Make sure to set the status and delete marker
                this.data.is_enabled = false;
                //end
                const {
                    data
                } = await this.$axios.delete(this.$config.apiURL  + "Payments/" + this.data.id);
                $nuxt.$emit('evtRefreshPaymentsDatatable')
                this.$toast.success("Record has been deleted successfully")
            } catch (error) {
                this.$toast.error('Oops! delete failed...')
            } finally {

            }
        },
        async bindPayments() {
            try {

            } catch (error) {
                console.log(error)
            }
        },
        async closePaymentsPanel() {
            this.data = {}
            this.isUpsertPaymentsVisible = !this.isUpsertPaymentsVisible;
        },
        handleSelectedInPayment_Status(data) {
            this.data.payment_status = data;
        },
        handleSelectedInPayment_type(data) {
            this.data.payment_type = data;
        },
        handleSelectedInPayment_currency(data) {
            this.data.payment_currency = data;
        },
         handleSelectedIn_payment_to_user(data) {
            this.data.payment_to_user = data;
        },
        handleSelectedInMarkAsDelete(data) {
            this.data.mark_as_delete = data;
        }
    },
    computed: { },
    mounted() {

    },
    created() {
        this.$nuxt.$on('evtUpsertPayments', (data) => {
            if (data !== undefined) {
                this.data = data;
                this.isUpsertPaymentsVisible = !this.isUpsertPaymentsVisible;
                return this.data;
            }
            this.isUpsertPaymentsVisible = !this.isUpsertPaymentsVisible;
        });

        //2) Delete Payments record and then rebind datatable
        this.$nuxt.$on('evtDeletePayments', (data) => {
            if (data !== undefined) {
                this.data = data;
                this.deletePayments();
            }
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('evtUpsertPayments');
        this.$nuxt.$off('evtDeletePayments');
    }
};
</script>