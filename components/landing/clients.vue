<template>
    <div class="bg-green-500">
        <div class="max-w-7xl mx-auto py-10 px-4 sm:py-10 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-extrabold text-gray-900">
                <!--Build faster and focus on your Business Process-->
                {{menuitems.hero.statement}}
            </h2>
            <div class="flow-root mt-8 lg:mt-10">
                <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                    <div
                        v-for="client in menuitems.companies"
                        :key="client.name"
                        class="mt-4 ml-4 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
                    >
                        <div v-if="client.svg">
                            <div v-html="client.svg"></div>
                        </div>
                        <div v-else>
                            <img
                                class="h-12"
                                v-bind:src="client.logo"
                                v-bind:alt="client.name"
                            >
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
  components: {},
  data() {
    return {
      menuitems,
    };
  },
  methods: {},
};
</script>