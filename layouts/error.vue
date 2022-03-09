<template>
  <div id="app">
    <div class="min-h-screen flex-col justify-center flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row">
      <div class="sm:mx-auto sm:w-full sm:max-w-md py-40">
        <!--Logo (start)-->
        <!--Logo (End)-->

        <div>
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 sm:rounded-lg sm:px-10">
              <!--Form (start)-->
              <!--Form (End)-->
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:block relative bg-gradient-to-br bg-gray-200 lg:w-1/2 lg:h-full">
        <div class="flex flex-col justify-center sm:px-6 lg:px-8 pt-1/4">
          <h1 class="mt-2 text-center text-2xl font-extrabold text-gray-900" v-if="error.statusCode === 404">404 Page not found...</h1>
          <h1 class="mt-2 text-center text-2xl font-extrabold text-gray-900" v-else>An error occurred - {{ error.statusCode }}</h1>
          <NuxtLink class="mt-2 text-center text-xl text-gray-900" to="/">Go to login</NuxtLink>
        </div>
        <div class="relative lg:grid lg:gap-x-8 m-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
};
</script>
