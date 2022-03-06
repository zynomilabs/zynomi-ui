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
                <!-- Secondary sidebar (Start)-->
                <nav
                    aria-label="Sections"
                    class="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col"
                >
                    <div class="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
                        <p class="text-lg font-medium text-blue-gray-900">Account</p>
                    </div>
                    <div class="flex-1 min-h-0 overflow-y-auto">
                        <!-- Current: "bg-blue-50 bg-opacity-50", Default: "hover:bg-blue-50 hover:bg-opacity-50" -->
                        <a
                            v-for="(menu) in menuitems.navSettings"
                            :key="menu.link"
                            :href="menu.link"
                            class="bg-green-50 bg-opacity-50 flex p-6 border-b border-green-gray-200"
                            aria-current="page"
                        >
                            <!-- Heroicon name: outline/cog -->
                            <svg
                                class="text-gray-800 mr-4 flex-shrink-0 h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    v-for="(icon,index) in menu.icons"
                                    :key="index"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    :d="icon"
                                />
                                </svg>
                                <div class="ml-3 text-sm">
                                    <p class="font-medium text-blue-gray-900">{{menu.title}}</p>
                                    <p class="mt-1 text-blue-gray-500">{{menu.description}}</p>
                                </div>
                                </a>
                    </div>
                    </nav>
                    <!-- Secondary sidebar (End)-->
                     <!-- Main content (start)-->
                    <!--View profile-->
                    <div class="flex-1 xl:overflow-y-auto">
                    <div class="max-w-3xl mx-auto px-2 sm:px-2 lg:px-4">
                              <form class="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                                            <div class="sm:overflow-hidden">
                                                <div class="bg-white space-y-6">
                                                    <div class="grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6">
                                               
                                                     <div class="sm:col-span-6">
                                                        <h2 class="text-xl font-medium text-blue-gray-900">Profile Information</h2>
                                                      
                                                      </div>
                                                     </div>
                                                       <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Name
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input type="text" id="name"
                                                                :value="user.name"
                                                                    name="name" autocomplete="name"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                         <div class="sm:col-span-6">
                                                            <label for="email"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input type="text" id="email"
                                                                    :value="user.email"
                                                                    name="email" autocomplete="email"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                         <div class="sm:col-span-6">
                                                            <label for="phone"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input type="text" id="email"
                                                                :value="user.phone"
                                                                    name="phone" autocomplete="phone"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                    </div>  
                    </div>
                    </form>
                    </div>
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
    import UsersUpsert from "@/pages/users/UsersUpsert.vue";

   import menuitems from "@/store/siteconfig.json";
    export default {
        layout: "app",
        components: {
            LeftNavBar,
            LeftNavProfileBar,
           UsersUpsert

        },
        data() {
            return {
              user: { },
                api: "",
                menuitems
        }
    },
    methods: {
       async getUser(email) {
	            try {
	               let api = this.$config.apiURL  + "users?email=" + email;   
                    const {data} = await this.$axios.get(api);
                    console.log(JSON.stringify(data))
                    //alert(JSON.stringify(data.data[0]))
                    return this.user = data.data[0];
	                }
	             catch (error) {
	                console.log(error)
	            }
	        }
    },
    async asyncData({ params }) {
     
  },
    created() {
        this.getUser(this.$route.params.slug) 
    }
};
</script>

