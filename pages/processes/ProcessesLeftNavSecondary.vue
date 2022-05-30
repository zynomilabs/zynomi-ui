<template>
  <!-- Secondary sidebar (Start)-->
  <nav aria-label="Sections" class="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col">
    <div class="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-gray-900">Processes</h1>
        <p class="mt-2 text-sm text-gray-600"></p>
      </div>
       <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        
          <button @click="$nuxt.$emit('evtUpsertProcesses')" type="button" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
  <!-- Heroicon name: outline/plus-sm -->
  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>
      </div>
      
    </div>
    <div class="flex-1 min-h-0 overflow-y-auto">
      <!-- Current: "bg-blue-50 bg-opacity-50", Default: "hover:bg-blue-50 hover:bg-opacity-50" -->
      <a v-if="!menu.hidden" v-for="menu in menuitems.menus" :key="menu.link" :href="menu.link" 
      class="bg-opacity-50 flex p-4 border-b border-gray-200" aria-current="page"
      :class="[menu.selected == true ? 'bg-green-100' : 'bg-green-50', 'bg-green-50']">
        <!-- Heroicon name: outline/cog -->
        <!-- <svg class="text-gray-800 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path v-for="(icon, index) in menu.icons" :key="index" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg> -->
        <div class="ml-3 text-sm">
          <p class="font-medium text-gray-900">{{ menu.title }}</p>
          <p class="mt-1 text-gray-500">{{ menu.description }}</p>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
import menuitems from '@/store/left-processes-nav.json';

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
