<template>
    <div class="h-screen flex overflow-hidden bg-white">
        <!-- Static sidebar for desktop -->
        <div class="hidden lg:flex lg:flex-shrink-0">
            <div class="flex flex-col w-64">
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
                    <LeftNavBar />
                    <LeftNavProfileBar />
                </div>
            </div>
        </div>
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div class="flex-1 relative z-0 flex overflow-hidden">
                <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabindex="0">
                    <article>
                        <Payment_typePageHeader heading="Payment_type Data Management" showbutton="true" guide="Search
                                for Payment_type data" addClickEvent="evtUpsertPayment_type" />
                                        <Payment_typeSearch heading="" />
                                        <!--Datatable action buttons (Start)-->
                                        <Payment_typeDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <Payment_typeDataTable />
                    </article>
                </main>
            </div>
        </div>
        <Payment_typeUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Payment_type]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 12:25:38 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 12:25:38 GMT-0500 (Eastern Standard Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import Payment_typePageHeader from "@/pages/payment_type/Payment_typePageHeader.vue";
    import Payment_typeUpsert from "@/pages/payment_type/Payment_typeUpsert.vue";
    import Payment_typeSearch from "@/pages/payment_type/Payment_typeSearch.vue";
    import Payment_typeDataTable from "@/pages/payment_type/Payment_typeDataTable.vue";
    import Payment_typeDataTableActionButtons from "@/pages/payment_type/Payment_typeDataTableActionButtons.vue";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            Payment_typePageHeader,
            Payment_typeSearch,
            Payment_typeUpsert,
            Payment_typeDataTable,
            Payment_typeDataTableActionButtons,
    },
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>