<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
          <LeftNavBar />
          <LeftNavProfileBar />
        </div>
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main class="flex-1 flex overflow-hidden">
          <AdminList />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * index.vue
 *
 * @description :: Landing page for [Navigation]
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Sun May 16 2021 18:31:44 GMT-0400 (Eastern Daylight Time)
 * Modified at  :: Sun May 16 2021 18:31:44 GMT-0400 (Eastern Daylight Time)
 */
import LeftNavBar from "@/components/LeftNavBar.vue";
import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
import AdminList from "@/pages/admin/AdminList.vue";

export default {
  layout: "app",
  components: {
    LeftNavBar,
    LeftNavProfileBar,
    AdminList,
  },
  methods: {},
  created() {},
  beforeDestroy() {},
};
</script>