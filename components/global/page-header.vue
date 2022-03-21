<template>
 <header class="w-full">
        <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">

            <div class="flex-1 flex justify-between px-2 sm:px-2">
                <div class="flex-1 min-w-0">
                    <h2 class="text-lg leading-7 font-medium">
                        {{title}}
                    </h2>
                    <div>
                        <p class="text-sm leading-5 text-gray-400">
                             {{guide}}
                        </p>
                    </div>
                </div>
                <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                    <VueCtkDateTimePicker label="Select date range" placeholder="Select date range" v-model="input.date_range" right="true" range="true" color="#50E3C2" button-color="#50E3C2" onlyDate="true" format="YYYY-MM-DD hh:mm:ss" formatted="L" auto-close="false" class="z-40 flex-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300"/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
export default {
  components: {
      VueCtkDateTimePicker
  },
     data() {
        return {
            items: this.data,
            input:{}
        }
    },
    props: {
        type: String,
        title: String,
        guide: String,
        data: Array

    },
     methods: {
        
        }
};
</script>
    
    
    
    
   