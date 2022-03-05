<template>
    <div class="h-screen flex overflow-hidden">
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
                        <PaymentsPageHeader heading="Payments" showbutton="true" guide="Search
                                for Payments data" addClickEvent="evtUpsertPayments" />
                                        <PaymentsSearch heading="" />
                                        <stat-actions :data="stats" class="p-2"/> 
                                        <!--Datatable action buttons (Start)-->
                                        <PaymentsDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <PaymentsDataTable />
                    </article>
                </main>
            </div>
        </div>
        <PaymentsUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Payments]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import PaymentsPageHeader from "@/pages/payments/PaymentsPageHeader.vue";
    import PaymentsUpsert from "@/pages/payments/PaymentsUpsert.vue";
    import PaymentsSearch from "@/pages/payments/PaymentsSearch.vue";
    import PaymentsDataTable from "@/pages/payments/PaymentsDataTable.vue";
    import PaymentsDataTableActionButtons from "@/pages/payments/PaymentsDataTableActionButtons.vue";
    import stats from "@/store/stats-payments.json";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            PaymentsPageHeader,
            PaymentsSearch,
            PaymentsUpsert,
            PaymentsDataTable,
            PaymentsDataTableActionButtons,
    },
        data() {
            return {
                stats
        }},
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>