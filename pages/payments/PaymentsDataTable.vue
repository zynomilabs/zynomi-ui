<template>
  <div>
    <div class="flex">
      <div class="flex-1 bg-gradient-to-r">
        <div class="flex-1 m-1 p-1">
          <v2-table :data="Payments.data" :default-sort="{ prop: 'name', order: 'ascending' }" @sort-change="handleSortChange" :loading="loading" :total="total" :pagination-info="paginationInfo" :shown-pagination="true" @page-change="getPayments" border :row-class-name="getRowClassName" height="450" ref="mydt">
            <v2-table-column type="selection" width="45"> </v2-table-column>

            <v2-table-column label="Date" prop="payment_date" width="100" sortable>
              <template slot-scope="scope">
                <div class="ml-2 text-center text-xs font-medium text-gray-500 tracking-wider">
                  {{ scope.row.payment_date | moment('DD-MMM-YYYY') }}
                </div>
              </template>
            </v2-table-column>
            <v2-table-column label="Description" prop="description">
              <template slot-scope="scope">
                <div class="ml-2 text-left text-xs font-medium text-gray-500 tracking-wider">
                  {{ scope.row.description | truncate(200) }}
                </div>
              </template>
            </v2-table-column>

            <v2-table-column label="Type" prop="payment_type" width="100">
              <template slot-scope="scope">
                <div class="ml-2 text-left text-xs font-medium text-gray-500 tracking-wider">
                  {{ scope.row.payment_type }}
                </div>
              </template>
            </v2-table-column>

            <v2-table-column label="Amount" prop="payment_amount" width="100" sortable>
              <template slot-scope="scope">
                <div class="ml-2 text-right pr-2 text-xs font-medium text-gray-500 tracking-wider">
                  {{ scope.row.payment_amount | numFormat }}
                </div>
              </template>
            </v2-table-column>

            <v2-table-column label="Currency" prop="payment_currency" width="100">
              <template slot-scope="scope">
                <div class="ml-2 text-center text-xs font-medium text-gray-500 tracking-wider">
                  {{ scope.row.payment_currency }}
                </div>
              </template>
            </v2-table-column>

            <v2-table-column label="Exg. Rate" prop="currency_exchange_rate" width="100">
              <template slot-scope="scope">
                <div class="ml-2 pr-2 text-right text-xs font-medium text-gray-500 tracking-wider">
                  {{ scope.row.currency_exchange_rate }}
                </div>
              </template>
            </v2-table-column>

            <v2-table-column label="Status" prop="payment_status" width="100">
              <template slot-scope="scope">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="scope.row.payment_status == 'Complete' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                  {{ scope.row.payment_status }}
                </span>
              </template>
            </v2-table-column>

            <v2-table-column label="" prop="" width="30">
              <template slot-scope="scope">
                <button @click="$nuxt.$emit('evtUpsertPayments', scope.row)" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </template>
            </v2-table-column>
            <v2-table-column label="" prop="" width="30">
              <template slot-scope="scope">
                <button v-if="!scope.row.mark_as_delete" @click="$nuxt.$emit('evtDeletePayments', scope.row)" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </template>
            </v2-table-column>
          </v2-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * PaymentsDataTable.vue
 *
 * @description :: Datatable / grid to list [Payments] records
 *                 Search, filter, pagination, sorting, add, edit, delete, refresh, selectall supported
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
 * Modified at  :: Sun Feb 27 2022 16:44:20 GMT-0500 (Eastern Standard Time)
 */
let pageSize = 10;

export default {
  components: {},
  data() {
    return {
      Payments: {},
      searchCriteria: {},
      currentPage: 1,
      total: 9,
      loading: false,
      paginationInfo: {
        text: "<div class='flex-1'><span class='ml-14 text-sm font-bold text-gray-800'>Total of <strong>198</strong>, <strong>25</strong> per page</span></div>",
        pageSize: pageSize,
      },
    };
  },
  filters: {
    truncate(val, len) {
      let n = len === undefined ? 5 : len;
      return s(val).truncate(n).capitalize().value();
    },
  },
  methods: {
    async getPayments(page) {
      try {
        this.currentPage = page;
        this.loading = false;
        let offset = page == 1 ? 0 : (page - 1) * pageSize;
        offset = isNaN(offset) ? 0 : offset;
        let api = this.$config.apiURL + 'Payments?limit=' + pageSize + '&skip=' + offset;
        if (!this.$_.isEmpty(this.searchCriteria)) {
          api += this.buildSearchQueryCriteria();
        }
        //alert(api)
        console.log(api);
        const { data } = await this.$axios.get(api);
        this.total = data.info.total;
        //Initiate explicit timeout
        setTimeout(() => {
          this.paginationInfo = {
            text: '<div class="flex-1"><span class="ml-14 text-sm font-bold text-gray-800"> Total of <strong>' + this.total + '</strong>, <strong>' + pageSize + '</strong> per page</span></div>',
            pageSize: pageSize,
          };
          this.$refs.mydt.updateScrollbar(true);
          //v2-table__pagination
        }, 10);
        return (this.Payments = data);
      } catch (error) {
        console.log(error);
      }
    },
    buildSearchQueryCriteria() {
      let criteria = '&where={';
      let boolCriteriaExists = false;

      //{"search_payment_type":"","search_description":"","statement_period":""}
      if (!this.$_.isEmpty(this.searchCriteria.search_payment_type)) {
        criteria += '"payment_type" : "' + this.searchCriteria.search_payment_type + '"';
        boolCriteriaExists = true;
      }
      if (!s.isBlank(this.searchCriteria.search_description)) {
        if (boolCriteriaExists) {
          criteria += ',"description" : {"contains":' + '"' + this.searchCriteria.search_description + '"}';
          boolCriteriaExists = true;
        } else {
          criteria += '"description" : {"contains":' + '"' + this.searchCriteria.search_description + '"}';
          boolCriteriaExists = true;
        }
        boolCriteriaExists = true;
      }
      if (!s.isBlank(this.searchCriteria.statement_period)) {
        if (boolCriteriaExists) {
          criteria += ', "and" : [{"payment_date" : { ">=" : "' + this.searchCriteria.statement_period.start + '"}}';
          criteria += ', {"payment_date" : { "<=" : "' + this.searchCriteria.statement_period.end + '"}}]';
          boolCriteriaExists = true;
        } else {
          criteria += ' "and" : [{"payment_date" : { ">=" : "' + this.searchCriteria.statement_period.start + '"}}';
          criteria += ', {"payment_date" : { "<=" : "' + this.searchCriteria.statement_period.end + '"}}]';
          boolCriteriaExists = true;
        }
        boolCriteriaExists = true;
      }
      criteria += '}';
      //alert(criteria)
      console.log(criteria);
      return criteria;
    },
    async handleSortChange() {},
    getRowClassName({ row, rowIndex }) {
      let className = '';
      className = 'bg-gray-50 border-white';
      return className;
      /*End*/
      if (!row.is_enabled) {
        className = 'bg-blue-50 border-blue-200';
      }
      if (row.mark_as_delete) {
        className = 'bg-red-50 border-red-200';
      }
      return className;
    },
  },
  computed: {},
  mounted() {},
  created() {
    //1) Bind Payments Datatable when the view is mounted
    this.getPayments(this.currentPage);

    //2) After successful Insert or update or Delete of the record, rebind the datatable
    this.$nuxt.$on('evtBindPaymentsDatatable', (data) => {
      if (data !== undefined) {
        //After successful update of individual record, rebind the datatable
        this.getPayments(this.currentPage);
      }
    });
    //3) Refresh table
    this.$nuxt.$on('evtRefreshPaymentsDatatable', (data) => {
      this.getPayments(this.currentPage);
    });
    //4) Search
    this.$nuxt.$on('evtSearchPayments', (data) => {
      //console.log(JSON.stringify(data))
      //alert(JSON.stringify(data))
      this.searchCriteria = data;
      this.getPayments(1);
    });
  },
};
</script>

<style>
.v2-table__column-cell {
  @apply text-sm;
}

.v2-table__column-cell {
  @apply font-bold;
}

.v2-table__column-cell {
  @apply text-red-800;
}
</style>
