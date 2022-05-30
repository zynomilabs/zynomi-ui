<template>
  <section v-if="isUpsertBotVisible" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0" aria-hidden="true"></div>
      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="w-screen max-w-6xl">
          <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
            <div class="flex-1 h-0 overflow-y-auto">
              <header class="space-y-1 py-6 px-4 bg-gray-200 sm:px-4">
                <div class="flex items-center justify-between space-x-3">
                  <h2 class="text-lg leading-7 font-medium text-gray-700">Bot</h2>
                  <div class="h-7 flex items-center">
                    <button v-on:click="closeBotPanel()" aria-label="Close panel" class="text-gray-700 hover:text-gray-500 transition ease-in-out duration-150">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <p class="text-sm leading-5 text-gray-500">Create or update Bot record</p>
                </div>
              </header>
              <div class="flex-1 flex flex-col justify-between">
                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                  <div class="space-y-6 pt-6 pb-5">
                    <form name="frmBot" id="frmBot" class="space-y-8 divide-y divide-gray-200" @submit.prevent="SaveAndUpdate">
                      <div class="sm:overflow-hidden">
                        <div class="bg-white space-y-6">
                          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-6">
                                  <Dropdownlist v-model="data.process"
                                      @selected_item="handleSelectedInProcess"
                                      name="process" label="Process Name"
                                      :data="{'data' : [{'code' : 'Inventory Monitoring', 'name':'Inventory Monitoring'},{'code' : 'Invoice Processing', 'name':'Invoice Processing'},{'code' : 'Database Back-up', 'name':'Database Back-up'},{'code' : 'Resume Screening', 'name':'Resume Screening'}]}"
                                      :selected_value="data.is_enabled" />
                              </div>
                            <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
                              <div class="mt-1 rounded-md shadow-sm">
                                <input v-model="data.name" type="text" id="name" name="name" autocomplete="name" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                              </div>
                            </div>
                            <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Description </label>
                              <div class="mt-1 rounded-md shadow-sm">
                                <textarea v-model="data.description" id="description" name="description" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300"></textarea>
                              </div>
                            </div>
                            <!--<div class="sm:col-span-6 border-b border-gray-300">
                            </div>-->
                            <div class="sm:col-span-6">
                              <h2 class="text-xl font-medium text-blue-gray-900">Source Code</h2>
                              <p class="mt-1 text-sm text-blue-gray-500">The bash command or Python code or the docker container to run the bot</p>
                            </div>
                            <!--Tab (Start)-->
                            <div class="sm:col-span-6">
                              <div class="sm:hidden">
                                <label for="tabs" class="sr-only">Select a tab</label>
                                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                                  <option selected>Command</option>
                                  <option>Code</option>
                                  <option>Git url</option>
                                </select>
                              </div>
                              <div class="hidden sm:block">
                                <div class="border-b border-gray-300">
                                  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                    <!-- Current: "border-green-500 text-green-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                                    <a href="#" class="border-green-500 text-green-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"> Command </a>
                                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"> Code </a>
                                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"> Git url </a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <!--Tab (Ends)-->
                                      <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Bash command </label>

                              <div class="mt-1 rounded-md shadow-sm">
                                <client-only placeholder="Codemirror Loading...">
                                  <codemirror ref="bashEditor" :value="code" :options="cmOptions" @ready="onCmReady" @focus="onCmFocus" @input="onCmCodeChange" />
                                </client-only>
                              </div>
                            </div>
                             <!-- Schedule (Start)-->
                           <div class="sm:col-span-6">
                              <label for="name" class="block text-sm font-medium text-gray-700"> Cron </label>
                              <div class="mt-1 rounded-md shadow-sm">
                                <input v-model="data.cron" type="text" id="cron" name="cron" autocomplete="cron" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                              </div>
                            </div>
                            <!-- Schedule (End)-->
                            <!-- Checkboxes (Start)-->
                            <div class="pt-2 space-y-4 sm:pt-2 sm:space-y-4 sm:col-span-6">
                              <div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                                <p class="mt-1 max-w-2xl text-sm text-gray-500">We'll always let you know the execution events, and can you pick what events you want to be the watcher.</p>
                              </div>
                              <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                                <div class="pt-6 sm:pt-2">
                                  <div role="group" aria-labelledby="label-email">
                                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                      <div>
                                        <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">By Email</div>
                                      </div>
                                      <div class="mt-4 sm:mt-0 sm:col-span-2">
                                        <div class="max-w-lg space-y-4">
                                          <div class="relative flex items-start">
                                            <div class="flex items-center h-5">
                                              <input id="comments" name="comments" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                              <label for="comments" class="font-medium text-gray-700">Success</label>
                                              <p class="text-gray-500">Get notified when a job completes successfully.</p>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="relative flex items-start">
                                              <div class="flex items-center h-5">
                                                <input id="candidates" name="candidates" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded" />
                                              </div>
                                              <div class="ml-3 text-sm">
                                                <label for="candidates" class="font-medium text-gray-700">Failure</label>
                                                <p class="text-gray-500">Get notified when a job ended up in failure.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="relative flex items-start">
                                              <div class="flex items-center h-5">
                                                <input id="offers" name="offers" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded" />
                                              </div>
                                              <div class="ml-3 text-sm">
                                                <label for="offers" class="font-medium text-gray-700">Delay</label>
                                                <p class="text-gray-500">Get notified when a job is taking longer time than usual.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Checkboxes (End)-->
                           
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
                <button v-on:click="upsertBot" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">Save</button>
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
 * BotUpsert.vue
 *
 * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
 *                 Additional events published to handle custom functions post "Save" operation.
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Sun May 16 2021 18:31:44 GMT-0400 (Eastern Daylight Time)
 * Modified at  :: Sun May 16 2021 18:31:44 GMT-0400 (Eastern Daylight Time)
 */

import Scheduler from '@/components/Scheduler.vue';
export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      isUpsertBotVisible: false,
      data: {
       
      },
      api: '',
      componentKey: 0,
      code: 'python3 ./bot.py',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-sh',

        theme: 'rubyblue',
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      },
    };
  },
  methods: {
    async upsertBot(args) {
      try {
        if (this.$_.isUndefined(this.data.id)) {
          const { data } = await this.$axios.post(this.$config.apiURL + 'Bots', this.data);
        } else {
          const { data } = await this.$axios.put(this.$config.apiURL + 'Bots/' + this.data.id, this.data);
        }
        this.data = {};
        this.isUpsertBotVisible = !this.isUpsertBotVisible;
        $nuxt.$emit('evtRefreshBotDatatable');
        this.$toast.success('Record saved successfully');
      } catch (error) {
        console.log(error);
        this.$toast.error('Oops!Save failed...');
      } finally {
      }
    },
    async deleteBot() {
      try {
        //Make sure to set the status and delete marker
        this.data.is_enabled = false;
        //end
        const { data } = await this.$axios.delete(this.$config.apiURL + 'Bot/' + this.data.id);
        $nuxt.$emit('evtRefreshBotDatatable');
        this.$toast.success('Record has been deleted successfully');
      } catch (error) {
        this.$toast.error('Oops! delete failed...');
      } finally {
      }
    },
    async bindBot() {
      try {
      } catch (error) {
        console.log(error);
      }
    },
    async closeBotPanel() {
      this.data = {};
      this.isUpsertBotVisible = !this.isUpsertBotVisible;
    },
    handleSelectedInStatus(data) {
      this.data.is_enabled = data;
    },
    handleSelectedInMarkAsDelete(data) {
      this.data.mark_as_delete = data;
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
    this.$nuxt.$on('evtUpsertBot', (data) => {
      if (data !== undefined) {
        this.data = data;
        this.isUpsertBotVisible = !this.isUpsertBotVisible;
        return this.data;
      }
      this.isUpsertBotVisible = !this.isUpsertBotVisible;
    });

    //2) Delete Bot record and then rebind datatable
    this.$nuxt.$on('evtDeleteBot', (data) => {
      if (data !== undefined) {
        this.data = data;
        this.deleteBot();
      }
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('evtUpsertBot');
    this.$nuxt.$off('evtDeleteBot');
  },
};
</script>
<style>
.CodeMirror {
  height:auto;
}
</style>
