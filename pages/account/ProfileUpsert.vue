<template>
  <div class="max-w-3xl">
    <form class="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
      <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
        <div class="sm:col-span-6">
          <div class="mt-1 flex items-center">
            <img class="inline-block h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium text-blue-gray-900"> First name </label>
          <input type="text" value="Jessy" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full border-blue-gray-300 shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-blue-gray-900"> Last name </label>
          <input type="text" value="schwarz" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border-blue-gray-300 shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="sm:col-span-6">
          <label for="username" class="block text-sm font-medium text-blue-gray-900"> Username </label>
          <div class="mt-1 flex shadow-sm">
            <input type="text" name="username" id="username" autocomplete="username" value="jessyschwarz" class="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </div>

      <div class="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
        <div class="sm:col-span-6">
          <h2 class="text-xl font-medium text-blue-gray-900">Personal information</h2>
          <!--<p class="mt-1 text-sm text-blue-gray-500">This information will be kept private and never be shared with others for marketing purposes.</p>-->
        </div>

        <div class="sm:col-span-3">
          <label for="email-address" class="block text-sm font-medium text-blue-gray-900"> Email address </label>
          <input type="text" value="jessyschwarz@zynomi.com" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full border-blue-gray-300 shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="sm:col-span-3">
          <label for="phone-number" class="block text-sm font-medium text-blue-gray-900"> Phone number </label>
          <input type="text" value="+1 520-789-1143" name="phone-number" id="phone-number" autocomplete="tel" class="mt-1 block w-full border-blue-gray-300 shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium text-blue-gray-900"> Country </label>
          <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full border-blue-gray-300 shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
            <option></option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div class="sm:col-span-3">
          <label for="language" class="block text-sm font-medium text-blue-gray-900"> Language </label>
          <input type="text" name="language" id="language" class="mt-1 block w-full border-blue-gray-300 shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <p class="hidden text-sm text-blue-gray-500 sm:col-span-6">This account was created on <time datetime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>.</p>
      </div>
    </form>
  </div>
</template>
