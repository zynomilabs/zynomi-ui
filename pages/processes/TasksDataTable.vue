<template>
<div class="px-2 sm:px-2 lg:px-2">
  <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Resume Screening</h1>
        <p class="mt-2 text-sm text-gray-600">Download resume from newtwork drive and Email attachment, run OCR to extract profile data then run ML pipeline </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
         
      </div>
    </div>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full">
            <thead class="bg-white">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Owner</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last modified</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Run</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <template v-for="item,index) in data.data">
                <tr  :class="[index === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t',index % 2 === 0 ? undefined : 'bg-gray-50']">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ item.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ item.status }}</span>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.owner }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.last_modified }}</td>
                   <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-left  text-sm font-medium sm:pr-6">
                    <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
  <!-- Heroicon name: solid/plus-sm -->
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
</button>



                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                    <a @click="$nuxt.$emit('evtUpsertBot')" href="#" class="text-green-600 hover:text-green-900"
                      >Edit<span class="sr-only">, {{ item.name }}</span></a
                    >
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import data from '@/store/data-tasks-resume-screening.json';
export default {
  components: {},
  data() {
    return {
      data,
    };
  },
  methods: {},
};
</script>
