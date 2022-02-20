<template>

<div v-if="isVisible" class="bg-gray-300">
  <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-gray-300">
         <img src="https://res.cloudinary.com/nathansweb/image/upload/v1632616071/zicons/speaker-one_jcckon.svg" class="h-12 w-12" alt="announcements">
        </span>
        <p class="ml-3 font-medium text-gray-900 truncate">
          <span class="md:hidden">
            This website is in active Development.
          </span>
          <span class="hidden md:inline">
            This website is in active Development. You may find some contents and images from the web which will be cleaned up to avoid any copyright issues.
          </span>
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <div class="rounded-md shadow-sm">
          <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium  text-green-600 bg-white hover:text-green-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
            Learn more
          </a>
        </div>
      </div>
      <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
        <button @click="toggleBannerFlashNews()" type="button" class="-mr-1 flex p-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 sm:-mr-2 transition ease-in-out duration-150" aria-label="Dismiss">
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {

  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggleBannerFlashNews() {
      this.isVisible = !this.isVisible;
    }
  },
};
</script>


