<template>
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
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <template v-for="item in data.data">
                <tr class="border-t border-gray-200">
                  <th colspan="4" scope="colgroup" class="bg-gray-50 px-4 py-2 text-left text-md font-semibold text-gray-900 sm:px-6">{{ item.name }}</th>
                  <th class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a @click="$nuxt.$emit('evtUpsertProcesses')" href="#" class="text-green-600 hover:text-green-900"
                      >Edit<span class="sr-only">, {{ item.name }}</span></a
                    >
                  </th>
                </tr>
                <tr v-for="(task, index) in item.child" :key="task.name" :class="[index === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t']">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ task.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ task.status }}</span>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ task.owner }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ task.last_modified }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a @click="$nuxt.$emit('evtUpsertBot')" href="#" class="text-green-600 hover:text-green-900"
                      >Edit<span class="sr-only">, {{ task.name }}</span></a
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
</template>
<script>
import data from '@/store/data_processes.json';
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
