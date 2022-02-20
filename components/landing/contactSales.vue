<template>
<section v-if="isContactFormVisible" class="z-10 fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0" aria-hidden="true"></div>
        <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div class="w-screen max-w-md">
                <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-2xl">
                    <div class="flex-1 h-0 overflow-y-auto">
                        <header class="space-y-1 py-6 px-4 bg-green-700 sm:px-6">
                            <div class="flex items-center justify-between space-x-3">
                                <h2 class="text-lg leading-7 font-medium text-white">
                                    Contact Us
                                </h2>
                                <div class="h-7 flex items-center">
                                    <button v-on:click="isContactFormVisible=false" aria-label="Close panel" class="text-green-200 hover:text-white transition ease-in-out duration-150">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm leading-5 text-green-300">
                                    Find out how we can help you?
                                </p>
                            </div>
                        </header>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                <div class="space-y-6 pt-6 pb-5">
                                    <form name="Contact" id="Contact" class="space-y-8" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlify @submit.prevent="sendContactUs" ref="frmContact">
                                        <input type="hidden" name="form-name" value="Contact" />
                                        <div class="sm:overflow-hidden">
                                            <div class="bg-white space-y-6">
                                                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                    <div class="sm:col-span-3">
                                                        <label for="first_name" class="block text-sm font-medium text-gray-700">First name *</label>
                                                        <div class="mt-1">
                                                            <input v-model="data.first_name" type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="last_name" class="block text-sm font-medium text-gray-700">Last name *</label>
                                                        <div class="mt-1">
                                                            <input v-model="data.last_name" type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="company" class="block text-sm font-medium text-gray-700">
                                                            Company name *
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.company" type="text" id="company" name="company" autocomplete="name" class="py-3 px-4 flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="Email" class="block text-sm font-medium text-gray-700">
                                                            Work Email *
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.email" type="text" id="email" name="email" autocomplete="name" class="py-3 px-4 flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
                                                        <div class="mt-1 relative">
                                                            <!--<div class="absolute inset-y-0 left-0 flex items-center">
                                                                <Dropdownlist 
                                                                    v-model="data.country_code"
                                                                    @selected_item="handleSelectedInCountryCode"
                                                                    name="country_code" label="" 
                                                                    :data="{'data' : [{'code' : '+1', 'name':'US'},{'code' : '+1', 'name':'CA'},{'code' : '+65', 'name':'SG'},{'code' : '+91', 'name':'India'}]}" 
                                                                    :selected_value="data.country_code" />
                                                            </div>-->
                                                            <!--<div class="pl-40">-->
                                                            <input v-model="data.phone_number" type="text" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full pl-5 focus:ring-green-500 focus:border-green-500 border-gray-300" placeholder="+1 (555) 987-6543">
                                                            <!--</div>-->
                                                        </div>
                                                    </div>
                                                     <div class="sm:col-span-6">
                                                        <Dropdownlist 
                                                        v-model="data.Product"
                                                        @selected_item="handleSelectedInProduct"
                                                        name="Product" label="Reason for contacting Zynomi *" 
                                                        :data="{'data' : [{'code' : 'RPA Bot Development', 'name':'RPA Bot Development'},{'code' : 'RPA Consulting', 'name':'RPA Consulting'},{'code' : 'Robotic as a Service (RaaS)', 'name':'Robotic as a Service (RaaS)'},{'code' : 'Other', 'name':'Other'}]}" 
                                                        :selected_value="data.Product" />
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="description" class="block text-sm font-medium text-gray-700">
                                                            How we can help you?
                                                        </label>
                                                        <div class="mt-1">
                                                            <textarea v-model="data.description" id="description" name="description" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300"></textarea>
                                                        </div>
                                                        <p class="mt-2 text-sm text-gray-500">Tell us your requirements in few lines.</p>
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
                            <button type="button" class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                Reset
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm">
                            <button v-on:click="sendContactUs" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
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
import Dropdownlist from "@/components/Dropdownlist.vue";
export default {
    components: {
        Dropdownlist
    },
    data() {
        return {
            isContactFormVisible: false,
            data: {'form-name':'contact'},
            api: ""
        }
    },
    methods: {
 async sendContactUs(args) {
            try {
                let request = {}
                let formData = new FormData();
                formData.append('first_name', this.data.first_name);
                formData.append('last_name', this.data.last_name);
                formData.append('company', this.data.company);
                formData.append('email', this.data.email);
                //formData.append('country', this.data.country);
                formData.append('phone_number', this.data.country_code + ' ' + this.data.phone_number);
                formData.append('description', this.data.description);
                formData.append('product', this.data.product);
                formData.append('form-name', 'contact');
                /*const {
                    response
                    } = await this.$axios.post( this.$config.apiURL + "/about", 
                    formData,
                    {headers: { "Content-Type": "application/x-www-form-urlencoded" }});
                */

                request.message ={}
                request.message.payload = {}
                request.message.channel = "zynomi-website-lead"
                request.message.kv_body=this.data
                request.message.kv_key = "www.zynomi.com"
                request.message.identity = true
                request.message.payload.body = this.data
                request.message.payload.subject = "New sales lead from https://www.zynomi.com [" + this.data.email + "]"
                const { response_redis_enqueue } = await this.$axios.post( this.$config.restEndPoint + "/api/redis/enqueue", request);
                const { response_redis_publish } = await this.$axios.post( this.$config.restEndPoint + "/api/redis/publish", request);
                this.data = {}
                this.isContactFormVisible = !this.isContactFormVisible;
                this.$toast.success("Thank you for your enquiry! our customer success team will repond as soon as possible.")
            } catch (error) {
                this.isContactFormVisible = !this.isContactFormVisible;
                this.$toast.error(JSON.stringify(error))
            } finally {
               
            }
        },
        handleSelectedInProduct(data) {
            this.data.product = data;
        },
         handleSelectedInCountryCode(data) {
            this.data.country_code = data;
        },
        
    },
    computed: {

    },
    mounted() {

    },
    created() {
        this.$nuxt.$on('evtShowContactSales', (data) => {
            this.isContactFormVisible = true;
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('evtShowContactSales');
    }
};
</script>
