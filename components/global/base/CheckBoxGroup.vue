<template>
<!--<div>
    <label :for="this.name" class="block text-sm font-medium text-gray-700">
        {{this.label}}
    </label>
    <div class="mt-1">
        <p v-if="$fetchState.pending">Fetching data...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <select @change="onChangeDropdown" v-else :id="this.name" :autocomplete="this.name" :name="this.name" class="h-full py-3 pl-4 pr-8 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full text-sm font-medium border-gray-300 ">
            <option value="">Choose</option>
            <option v-for="(item, index) in this.items.data" v-bind:key="index" :value="item.code" :checked="checkedOption(item)">{{item.name}}</option>
        </select>
    </div>
</div>-->
<div>
    <label :for="this.name" class="block text-sm font-medium text-gray-700">
        {{this.label}}
    </label>
    <div class="mt-1">
 
<fieldset class="space-y-5 pl-1">
  <legend class="sr-only">Notifications</legend>
  <p v-if="$fetchState.pending">Fetching data...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-for="(item, index) in this.items.data" v-else class="relative flex items-start">
    <div class="flex items-center h-5">
      <input @change="onChangeCheckBox" :value="item.name" :id="'chk_'+item.code" :aria-describedby="item.name+'-description'" :name="'chk_'+item.code" type="checkbox" :checked="checkedOption(item)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
    </div>
    <div class="ml-3 text-sm">
      <label :for="'chk_'+item.code" class="font-medium text-gray-700">{{item.name}}</label>
      <p :id="item.name+'-description'" class="text-gray-500">{{item.description}}</p>
    </div>
  </div>
</fieldset>
</div>
</div>

</template>

<script>
export default {
    name: "CheckBoxGroup",
    data() {
        return {
            items: this.data,
            checked_value: this.checked_value
        }
    },
    props: {
        type: String,
        label: String,
        name: String,
        checked_value: String,
        checked_text: String,
        api: String,
        data: Array
    },
    emits: ['checked_item'],
    methods: {
        checkedOption(option) {
            if (!s.isBlank(this.checked_value)) {
                return option.name.toString() === this.checked_value.toString();
            }
            return false;
        },
        onChangeCheckBox(e) {
            //debugger;
            const checkedCode = e.target.value;
            
            const option = this.items.data.find((option) => {

                return checkedCode === option.name;
            });
            try {
                this.checked_value = option.name;
                this.$emit("checked_item", option.name);
            } catch (e) {
                this.checked_value ="";
                this.$emit("checked_item", "");
            }

        },
        async getDropdown() {
            //alert("getDropdown")
        },
        created() {

            //this.getDropdown()
        },
        beforeMount() {
            //this.getDropdown()
        }
    },
    async fetch() {
        try {
            if (this.api !== undefined) {
                this.items = await fetch(this.$config.apiURL + this.api).then(res => res.json())
            } else if (this.data !== undefined) {
                this.items = this.data
            } else {
                this.items = ['No data']
            }
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
