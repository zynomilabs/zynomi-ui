<template>
  <section v-if="isUpsertProcessesVisible" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0" aria-hidden="true"></div>
      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="w-screen max-w-6xl">
          <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
            <div class="flex-1 h-0 overflow-y-auto">
              <header class="space-y-1 py-6 px-4 bg-gray-200 sm:px-6">
                <div class="flex items-center justify-between space-x-3">
                  <h2 class="text-lg leading-7 font-medium text-gray-700">Process</h2>
                  <div class="h-7 flex items-center">
                    <button v-on:click="closeProcessesPanel()" aria-label="Close panel" class="text-gray-700 hover:text-gray-500 transition ease-in-out duration-150">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <p class="text-sm leading-5 text-gray-500">A process is a combination of steps that implement a business process.</p>
                </div>
              </header>
              <div class="flex-1 flex flex-col justify-between">
                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                  <div class="space-y-6 pt-6 pb-5">
                    <form name="frmProcesses" id="frmProcesses" class="space-y-8 divide-y divide-gray-200" @submit.prevent="SaveAndUpdate">
                      <div class="sm:overflow-hidden">
                        <div class="bg-white space-y-6">
                          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
                              <div class="mt-1 rounded-md shadow-sm">
                                <input v-model="data.name" type="text" id="name" name="name" autocomplete="name" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                              </div>
                            </div>

                            <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Short description </label>
                              <div class="mt-1 rounded-md shadow-sm">
                                <input v-model="data.short_description" type="text" id="short_description" name="short_description" autocomplete="short_description" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                              </div>
                            </div>
                            <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Business requirements </label>

                              <div class="mt-1 rounded-md shadow-sm">
                                <client-only placeholder="Codemirror Loading...">
                                  <codemirror ref="cmEditor" :value="code" :options="cmOptions" @ready="onCmReady" @focus="onCmFocus" @input="onCmCodeChange" />
                                </client-only>
                              </div>
                              <p class="mt-2 text-sm text-gray-500">Optional, draft your process automation requirements in Gherkin GIVEN - WHEN - THEN style.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
              <span class="inline-flex rounded-md shadow-sm">
                <button type="button" class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">Reset</button>
              </span>
              <span class="inline-flex rounded-md shadow-sm">
                <button v-on:click="upsertProcesses" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">Save</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * ProcessesUpsert.vue
 *
 * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
 *                 Additional events published to handle custom functions post "Save" operation.
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Mon Mar 21 2022 09:34:56 GMT-0400 (Eastern Daylight Time)
 * Modified at  :: Mon Mar 21 2022 09:34:56 GMT-0400 (Eastern Daylight Time)
 */
import Dropdownlist from '@/components/Dropdownlist.vue';
var s = require('underscore.string');
export default {
  components: {
    Dropdownlist,
  },
  data() {
    return {
      isUpsertProcessesVisible: false,
      data: {},
      api: '',
      componentKey: 0,
      code: 'Optional, draft your process automation requirements in Gherkin GIVEN - WHEN - THEN style.',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-yaml',

        theme: 'rubyblue',
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      },
    };
  },
  methods: {
    async upsertProcesses(args) {
      try {
        if (this.$_.isUndefined(this.data.id)) {
          const { data } = await this.$axios.post(this.$config.apiURL + 'Processes', this.data);
        } else {
          const { data } = await this.$axios.put(this.$config.apiURL + 'Processes/' + this.data.id, this.data);
        }
        this.data = {};
        this.isUpsertProcessesVisible = !this.isUpsertProcessesVisible;
        $nuxt.$emit('evtRefreshProcessesDatatable');
        this.$toast.success('Record saved successfully');
      } catch (error) {
        console.log(error);
        this.$toast.error('Oops!Save failed...');
      } finally {
      }
    },
    async deleteProcesses() {
      try {
        //Make sure to set the status and delete marker
        this.data.is_enabled = false;
        //end
        const { data } = await this.$axios.delete(this.$config.apiURL + 'Processes/' + this.data.id);
        $nuxt.$emit('evtRefreshProcessesDatatable');
        this.$toast.success('Record has been deleted successfully');
      } catch (error) {
        this.$toast.error('Oops! delete failed...');
      } finally {
      }
    },
    async bindProcesses() {
      try {
      } catch (error) {
        console.log(error);
      }
    },
    async closeProcessesPanel() {
      this.data = {};
      this.isUpsertProcessesVisible = !this.isUpsertProcessesVisible;
    },
    handleSelectedInStatus(data) {
      this.data.is_enabled = data;
    },
    handleSelectedInMarkAsDelete(data) {
      this.data.mark_as_delete = data;
    },
    forceRerender() {
      this.componentKey += 1;
    },
    onCmReady(cm) {
      console.log('the editor is ready!', cm);
    },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm);
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode);
      this.code = newCode;
    },
    pageChange() {},
    handleSelectChange() {},
    clear() {
      this.code = '';
    },
  },
  computed: {
    codemirror() {
      //return this.$refs.cmEditor.codemirror
    },
  },
  mounted() {},
  created() {
    this.$nuxt.$on('evtUpsertProcesses', (data) => {
      if (data !== undefined) {
        this.data = data;
        this.isUpsertProcessesVisible = !this.isUpsertProcessesVisible;
        return this.data;
      }
      this.isUpsertProcessesVisible = !this.isUpsertProcessesVisible;
    });

    //2) Delete Processes record and then rebind datatable
    this.$nuxt.$on('evtDeleteProcesses', (data) => {
      if (data !== undefined) {
        this.data = data;
        this.deleteProcesses();
      }
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('evtUpsertProcesses');
    this.$nuxt.$off('evtDeleteProcesses');
  },
};
</script>

