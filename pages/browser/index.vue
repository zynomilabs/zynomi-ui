<template>
  <div>
    <div class="bg-gray-100 border rounded shadow">
      <div class="flex">
        <client-only placeholder="Codemirror Loading...">
          <codemirror
            ref="cmEditor"
            :value="code"
            :options="cmOptions"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"
          />
        </client-only>
      </div>
      <footer class="border-t flex justify-end px-5 py-4">
        <button
          @click="clear"
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear
          </button>
          &nbsp;
          <button
            @click="execute"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Execute
            </button>
      </footer>
    </div>
    <br />
    <div
      class=""
      v-if="this.dml"
    >
      <v2-table
        :data="list"
        id="tab_bro"
        border
        :key="componentKey"
        height="500"
        :total="total"
        :loading="loading"
        @page-change="execute"
        @select-change="handleSelectChange"
        :pagination-info="paginationInfo"
        :shown-pagination="true"
        ref="mydt"
      >
        <v2-table-column
          v-for="(item, index) in items"
          v-bind:label="item.prop"
          v-bind:prop="item.prop"
          :key="index"
        >
          </v2-table-column>
          </v2-table>
  </div>
  </div>
</template>
<script>
var s = require("underscore.string");
export default {
  layout: "app",
  components: {},
  data() {
    return {
      componentKey: 0,
      code:
        'SELECT *, Count(*) OVER (partition BY 1) AS count  FROM "Customer"',
      cmOptions: {
        tabSize: 4,
        mode: "text/x-pgsql",
        theme: "rubyblue",
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      },
      currentPage: 1,
      total: 0,
      loading: false,
      paginationInfo: {
        text:
          "<span>Total of <strong>198</strong>, <strong>25</strong> per page</span>",
        pageSize: 25,
      },
      dml: true,
      list: [],
      items: [
        { prop: "nuts" },
        { prop: "john" },
        { prop: "hai" },
        { prop: "bai" },
      ],
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    onCmReady(cm) {
      console.log("the editor is ready!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
    pageChange() {},
    handleSelectChange() {},
    clear() {
      this.code = "";
    },
    async execute(page) {
      //alert(page)
      setTimeout(() => {
        this.componentKey += 1;
        this.loading = true;
      }, 100);

      let pageSize = 25;
      //let start = (page - 1) * pageSize + 1;
      let offset = page == 1 ? 0 : (page - 1) * pageSize;
      offset = isNaN(offset) ? 0 : offset;
      //let query = "SELECT \"Title\", Count(*) OVER (partition BY 1) AS count  FROM \"Album\" limit " + pageSize + " OFFSET " + offset
      //let query = "SELECT *, Count(*) OVER (partition BY 1) AS count  FROM \"Customer\" limit " + pageSize + " OFFSET " + offset

      //Example for underscore.string
      //s.humanize("  capitalize dash-CamelCase_underscore trim  ")
      //End
      //_.includes(this.code.toLowerCase(), "select ")
      let query = this.code;
      if (
        !s(this.code).isBlank() &&
        (s.startsWith(this.code.toLowerCase(), "select") ||
          this.code.toLowerCase().indexOf("select ") > 0)
      ) {
        //query = this.code + " limit " + pageSize + " OFFSET " + offset;
        this.dml = true;
      } else {
        this.dml = false;
      }
    },
  },
  computed: {
    codemirror() {
      //return this.$refs.cmEditor.codemirror
    },
  },
  mounted() {
   
  },
  created() {
    this.execute(1);
  },
  
};
</script>
<style>
.vue-codemirror {
  width: 100%;
}
</style>
  