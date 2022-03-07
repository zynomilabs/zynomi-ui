<template>
<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div v-if="!item.hidden" v-for="(item, index) in this.items.data" class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-indigo-500 p-3">
          <!-- Heroicon name: outline/users -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
            v-for="(path,index) in item.paths"
            :key="index"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="path"
        />
          </svg>
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate">{{item.name}}</p>
      </dt>
      <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">{{item.value}}</p>
        <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all<span class="sr-only"> Total Subscribers stats</span></a>
          </div>
        </div>
      </dd>
    </div>
    </dl>
</template>

<script>

export default {
    
    components: {
        
    }
}
</script>

</template>

<script>
export default {
  components: {},
     data() {
        return {
            items: this.data,
        }
    },
    props: {
        type: String,
        label: String,
        name: String,
        selected_item: String,
        api: String,
        data: Array
    },
     methods: {
        
        }
};
</script>
