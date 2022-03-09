<template>
  <header flex-1 class="w-full p-2">
    <div class="relative flex-shrink-0 h-12 bg-white flex">
      <div class="flex-1 flex justify-between">
        <div class="flex-1 min-w-0">
          <!--action buttons-->
          <!-- Toolbar-->
          <div class="h-16 flex flex-col justify-center">
            <div class="">
              <div class="py-3 flex justify-between">
                <!-- Left buttons -->
                <div>
                  <span class="relative z-0 inline-flex shadow-sm sm:shadow-none sm:space-x-3">
                    <span class="inline-flex sm:shadow-sm">
                      <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        <span>Delete</span>
                      </button>
                      <button type="button" @click="$nuxt.$emit('evtRefreshPaymentsDatatable')" class="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                        </svg>
                      </button>
                      <button type="button" @click="$nuxt.$emit('evtUpsertPayments')" class="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <!--<button type="button" @click="$nuxt.$emit('evtUpsertPayments')" class="hidden sm:inline-flex -ml-px relative items-center px-4 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">-->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        <span>New</span>
                      </button>
                    </span>
                  </span>
                </div>
                <!-- Right buttons -->
                <!--<nav aria-label="Pagination">
                                    <span class="relative z-0 inline-flex shadow-sm">
                                        <a href="#"
                                            class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </span>
                                </nav>-->
                <span class="relative inline-flex shadow-sm ">
                  
                  <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Export</button>
                  <span class="-ml-px relative block">
                    <button @click="HandleExportsPaymentsButton" type="button" class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="option-menu-button" aria-expanded="true" aria-haspopup="true">
                      <span class="sr-only">Open options</span>
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>

                    <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
                    <div v-if="isExportPaymentsVisible" class="visible z-50 origin-top-right absolute right-0 mt-2 -mr-1 w-56  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="option-menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-0"> Export CSV </a>

                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-1"> Export Excel </a>

                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="option-menu-item-2"> Export PDF </a>
                      </div>
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
/**
 * PaymentsDataTableActionButtons.vue
 *
 * @description :: Datagrid action buttons component. Clicking any of the button will
 *                 publish event to be subscribed and handled elsewhere in the application.
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
 * Modified at  :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
 */
export default {
  components: {},
  data() {
    return {
        isExportPaymentsVisible : false
    };
  },
  methods : {
    async HandleExportsPaymentsButton() {
       //alert(this.isExportPaymentsVisible)
      this.isExportPaymentsVisible = !this.isExportPaymentsVisible;
       //alert(this.isExportPaymentsVisible)
    },
  }
};
</script>
