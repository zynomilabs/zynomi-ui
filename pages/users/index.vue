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
                        <UsersPageHeader heading="Users Data Management" showbutton="true" guide="Search
                                for Users data" addClickEvent="evtUpsertUsers" />
                                        <UsersSearch heading="" />
                                        <!--Datatable action buttons (Start)-->
                                        <UsersDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <UsersDataTable />
                    </article>
                </main>
            </div>
        </div>
        <UsersUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Users]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import UsersPageHeader from "@/pages/users/UsersPageHeader.vue";
    import UsersUpsert from "@/pages/users/UsersUpsert.vue";
    import UsersSearch from "@/pages/users/UsersSearch.vue";
    import UsersDataTable from "@/pages/users/UsersDataTable.vue";
    import UsersDataTableActionButtons from "@/pages/users/UsersDataTableActionButtons.vue";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            UsersPageHeader,
            UsersSearch,
            UsersUpsert,
            UsersDataTable,
            UsersDataTableActionButtons,
    },
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>