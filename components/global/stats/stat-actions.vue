<template>
<div class="bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-4 sm:gap-px">
  <div v-for="(item, index) in this.items.data" class="relative group bg-white border-gray-200 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
    <div v-if="item.img">
      <span class="rounded-lg inline-flex p-3 ring-4 ring-white" :class="item.css_class">
        <img :src="item.img" width="30" height="30" :alt="item.title" />
      </span>
    </div>
    <div v-else>
      <span class="rounded-lg inline-flex p-3 ring-4 ring-white" :class="item.css_class">
        <!-- Heroicon name: outline/clock -->
       <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path
            v-for="(path,index) in item.paths"
            :key="index"
            stroke-linecap="round"
            stroke-linejoin="round" 
            stroke-width="2"
            :d="path"
        />
        </svg>
      </span>
    </div>
    <div class="mt-8">
      <h3 class="text-lg font-medium">
        <a href="#" class="focus:outline-none">
          <!-- Extend touch target to entire panel -->
          <span class="absolute inset-0" aria-hidden="true"></span>
          {{item.name}}
        </a>
      </h3>
      <p class="mt-2 text-sm text-gray-500">{{item.description}}</p>
    </div>
    <p class="ml-16 top-6 absolute text-2xl font-semibold text-gray-900">{{item.value}}</p>
    <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
  </div>
</template>

<script>

export default {
    layout: 'app',
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
