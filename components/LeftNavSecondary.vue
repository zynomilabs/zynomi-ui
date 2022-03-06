<template>

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
                            v-if="!menu.hidden"
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