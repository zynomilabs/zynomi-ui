<template>
  <div class="pt-10 bg-gray-900 lg:pt-8 lg:pb-14 ">
    <div class="mx-auto max-w-7xl">
      <div class="w-full flex flex-shrink place-self-center sm:flex-row flex-col flex-direction: column lg:overflow-hidden">
        <div class="flex flex-1 flex-col justify-evenly p-6">
          <div class="lg:py-2">
            <h1 class="
                mt-4
                text-3xl
                tracking-tight
                font-extrabold
                text-white
                sm:mt-5
                sm:text-5xl
                lg:mt-3
                xl:text-5xl
              ">
              <span class="block">{{ menuitems.hero.span3 }}</span>
              <span class="
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-green-200
                  to-cyan-400
                  block
                ">{{ menuitems.hero.span4 }}</span>

            </h1>
            <p class="
                mt-3
                text-base text-gray-300
                sm:mt-5
                sm:text-xl
                lg:text-lg
                xl:text-xl
              ">
              {{ menuitems.hero.description }}
            </p>
            <div class="mt-10 sm:mt-12">
              <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    @click="$nuxt.$emit('evtShowContactSales')"
                    href="#"
                    class="
                      inline-flex
                      items-center
                      px-6
                      py-3
                      border border-transparent
                      text-base
                      font-medium
                      rounded-full
                      shadow-sm
                      text-white
                      bg-green-500
                      hover:bg-green-700
                      focus:outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                    "
                  >
                    Schedule a consultation
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-6 sm:-mb-48 lg:m-0 lg:relative">
          <div class="flex flex-1">
            <img
              class="pt-6 object-cover overflow-hidden "
              src="https://res.cloudinary.com/nathansweb/image/upload/v1639915726/www.zynomi.com/Architecture/zynomi-x-bot-workforce_e2jma1.svg"
              alt="zynomi-x"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
  components: {},
  data() {
    return {
      menuitems,
    };
  },
  methods: {},
};
</script>
