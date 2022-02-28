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
                        <RolePageHeader heading="Role Data Management" showbutton="true" guide="Search
                                for Role data" addClickEvent="evtUpsertRole" />
                                        <RoleSearch heading="" />
                                        <!--Datatable action buttons (Start)-->
                                        <RoleDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <RoleDataTable />
                    </article>
                </main>
            </div>
        </div>
        <RoleUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Role]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 12:16:05 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 12:16:05 GMT-0500 (Eastern Standard Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import RolePageHeader from "@/pages/role/RolePageHeader.vue";
    import RoleUpsert from "@/pages/role/RoleUpsert.vue";
    import RoleSearch from "@/pages/role/RoleSearch.vue";
    import RoleDataTable from "@/pages/role/RoleDataTable.vue";
    import RoleDataTableActionButtons from "@/pages/role/RoleDataTableActionButtons.vue";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            RolePageHeader,
            RoleSearch,
            RoleUpsert,
            RoleDataTable,
            RoleDataTableActionButtons,
    },
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>