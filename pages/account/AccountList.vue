<template>
    <div class="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
        <!-- Breadcrumb -->
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
                    <div class="flex-1 xl:overflow-y-auto">
                        <ProfileUpsert/>
                    </div>
                    <!-- Main content (End)-->
            </div>
    </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";

export default {
  components: {
   
  },
  data() {
    return {
      menuitems,
    };
  },
  methods: {},
};
</script>