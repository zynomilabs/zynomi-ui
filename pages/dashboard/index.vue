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
        <main class="flex-1 flex overflow-hidden">
            <div class="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
       
        <nav
            aria-label="Breadcrumb"
            class="bg-white border-b border-blue-gray-200 xl:hidden"
        >
            <div class="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
                <a
                    href="#"
                    class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900"
                >
                    <!-- Heroicon name: solid/chevron-left -->
                    <svg
                        class="h-5 w-5 text-blue-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                        </svg>
                        <span>Account</span>
                        </a>
            </div>
            </nav>

            <div class="flex-1 flex xl:overflow-hidden">
                     <!-- Main content (start)-->
                    <div class="flex-1 xl:overflow-y-auto">
                    <page-header title="Big Bazzar" guide="Real-time bot analytics to enhance and enrich your automation initiatives" showdate="true"/> 
                    <stat-actions :data="stats" class="p-2"/> 
                    </div>
                    <!-- Main content (End)-->
            </div>
    </div>
           
        </main>
      </div>
    </div>
  </div>
</template>
<script>
    /**
     * _account.vue
     *
     * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
     *                 Additional events published to handle custom functions post "Save" operation.                 
     * 
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import stats from "@/store/stats-bot-analytics.json";

    export default {
        layout: "app",
        components: {
            LeftNavBar,
            LeftNavProfileBar,
           stats

        },
        data() {
            return {
             stats,
             
        }
    },
    methods: {
     
    },
    async asyncData({ params }) {
     
  },
    created() {
        
    }
};
</script>

