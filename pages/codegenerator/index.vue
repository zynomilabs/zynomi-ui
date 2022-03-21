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
                        <CodegeneratorPageHeader heading="Codegenerator Data Management" showbutton="true" guide="Search
                                for Codegenerator data" addClickEvent="evtUpsertCodegenerator" />
                                        <CodegeneratorSearch heading="" />
                                        <!--Datatable action buttons (Start)-->
                                        <CodegeneratorDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <CodegeneratorDataTable />
                    </article>
                </main>
            </div>
        </div>
        <CodegeneratorUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Codegenerator]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sat Mar 19 2022 09:22:38 GMT-0400 (Eastern Daylight Time)
     * Modified at  :: Sat Mar 19 2022 09:22:38 GMT-0400 (Eastern Daylight Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import CodegeneratorPageHeader from "@/pages/codegenerator/CodegeneratorPageHeader.vue";
    import CodegeneratorUpsert from "@/pages/codegenerator/CodegeneratorUpsert.vue";
    import CodegeneratorSearch from "@/pages/codegenerator/CodegeneratorSearch.vue";
    import CodegeneratorDataTable from "@/pages/codegenerator/CodegeneratorDataTable.vue";
    import CodegeneratorDataTableActionButtons from "@/pages/codegenerator/CodegeneratorDataTableActionButtons.vue";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            CodegeneratorPageHeader,
            CodegeneratorSearch,
            CodegeneratorUpsert,
            CodegeneratorDataTable,
            CodegeneratorDataTableActionButtons,
    },
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>