<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
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
            <nav aria-label="Breadcrumb" class="bg-white border-b border-blue-gray-200 xl:hidden">
              <div class="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
                <a href="#" class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900">
                  <!-- Heroicon name: solid/chevron-left -->
                  <svg class="h-5 w-5 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span> Workforce</span>
                </a>
              </div>
            </nav>
            <div class="flex-1 flex xl:overflow-hidden">
              <!-- Secondary sidebar (Start)-->
              <ProcessesLeftNavSecondary />
              <!-- Secondary sidebar (End)-->

              <div class="flex-1 xl:overflow-y-auto">
                <div class="max-w-5xl mx-4">
                  <!-- Main content (start)-->
                  <div class="space-y-8 divide-y divide-gray sm:space-y-5 pt-2">
                    <div class="flex-1 justify-between px-2 sm:px-2">
                    <header>
                      <div class="flex items-center justify-between space-x-3">
                        <h2 class="text-lg leading-7 font-medium">Bots</h2>
                        <div class="h-7 flex items-center pt-2 space-x-2">
                          <button @click="$nuxt.$emit('evtUpsertBot')" type="button" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
  <!-- Heroicon name: outline/plus-sm -->
  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>
                        
                        </div>
                      </div>
                       <div>
                          <p class="text-sm leading-5 text-gray-600">Contains steps and each step, a robot is run one or multiple times.</p>
                        </div>
                    </header>
                    </div>
                    <div></div>
                  </div>

                  <!-- Workforce display (start)-->
                  <div class="space-y-8 divide-y divide-gray sm:space-y-5 pt-5">
                    <div>
                      <TasksDataTable />
                    </div>
                  </div>

                  <!-- Workforce display (End)-->

                  <!-- Main content (End)-->
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <ProcessesUpsert />
    <BotUpsert />
  </div>
</template>

<script>
/**
 * index.vue
 *
 * @description :: Landing page for [Processes]
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Mon Mar 21 2022 09:34:56 GMT-0400 (Eastern Daylight Time)
 * Modified at  :: Mon Mar 21 2022 09:34:56 GMT-0400 (Eastern Daylight Time)
 */
import LeftNavBar from '@/components/LeftNavBar.vue';
import LeftNavProfileBar from '@/components/LeftNavProfileBar.vue';
import ProcessesLeftNavSecondary from '@/pages/processes/ProcessesLeftNavSecondary.vue';
import ProcessesPageHeader from '@/pages/processes/ProcessesPageHeader.vue';
import ProcessesUpsert from '@/pages/processes/ProcessesUpsert.vue';
import BotUpsert from '@/pages/bots/BotUpsert.vue';
import ProcessesSearch from '@/pages/processes/ProcessesSearch.vue';
import ProcessesDataTable from '@/pages/processes/ProcessesDataTable.vue';
import ProcessesDataTableActionButtons from '@/pages/processes/ProcessesDataTableActionButtons.vue';
import TasksDataTable from '@/pages/processes/TasksDataTable.vue';

export default {
  layout: 'app',
  components: {
    LeftNavBar,
    LeftNavProfileBar,
    ProcessesLeftNavSecondary,
    ProcessesUpsert,
    BotUpsert,
    TasksDataTable,
  },
  data() {
    return {
        isProcessButtonVisible : false
    };
  },
  methods: {
     async HandleExportsPaymentsButton() {
       //alert(this.isProcessButtonVisible)
      this.isProcessButtonVisible = !this.isProcessButtonVisible;
       //alert(this.isProcessButtonVisible)
    },
  },
  created() {},
  beforeDestroy() {},
};
</script>
