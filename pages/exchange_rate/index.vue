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
                        <Exchange_ratePageHeader heading="Exchange Rate Management" showbutton="true" guide="Search
                                for Exchange_rate data" addClickEvent="evtUpsertExchange_rate" />
                                        <Exchange_rateSearch heading="" />
                                        <!--Datatable action buttons (Start)-->
                                        <Exchange_rateDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <Exchange_rateDataTable />
                    </article>
                </main>
            </div>
        </div>
        <Exchange_rateUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Exchange_rate]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 10:11:36 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 10:11:36 GMT-0500 (Eastern Standard Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import Exchange_ratePageHeader from "@/pages/exchange_rate/Exchange_ratePageHeader.vue";
    import Exchange_rateUpsert from "@/pages/exchange_rate/Exchange_rateUpsert.vue";
    import Exchange_rateSearch from "@/pages/exchange_rate/Exchange_rateSearch.vue";
    import Exchange_rateDataTable from "@/pages/exchange_rate/Exchange_rateDataTable.vue";
    import Exchange_rateDataTableActionButtons from "@/pages/exchange_rate/Exchange_rateDataTableActionButtons.vue";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            Exchange_ratePageHeader,
            Exchange_rateSearch,
            Exchange_rateUpsert,
            Exchange_rateDataTable,
            Exchange_rateDataTableActionButtons,
    },
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>