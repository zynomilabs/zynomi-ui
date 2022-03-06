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
                    <LeftNavSecondary/>
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
import LeftNavSecondary from "@/components/LeftNavSecondary.vue";
export default {
  components: {
   
  },
  data() {
    return {
      menuitems,
      LeftNavSecondary
    };
  },
  methods: {},
};
</script>