<template>
    <div>
        <div class="bg-white pt-20 pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <div class="relative max-w-lg mx-auto lg:max-w-7xl">
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                    Recent Posts
                </h2>

                <div class="mt-6 pt-5 grid gap-4 place-self-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">
                    <div
                        v-for="article of articles"
                        :key="article.slug"
                        class="shadow-lg flex-col flex-direction: column"
                    >
                        <a :href="'/casestudy/' + article.slug">
                            <div class="flex flex-1 h-48 xxlmin:w-1/2 xxlmax:w-full object-center">
                                <img
                                    v-if="article.coverimage"
                                    class="w-full object-center overflow-hidden"
                                    :src="article.coverimage"
                                />
                            </div>
                        </a>
                        <div class="flex flex-1 flex-col justify-evenly bg-white p-3">
                            <div class="flex-1">
                                <a
                                    href="#"
                                    class="inline-block"
                                >
                                    <span
                                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                                        :class="article.type=='Blog' && 'bg-indigo-100 text-indigo-800' || article.type=='Article' && 'bg-pink-100 text-pink-800' || article.type=='Case Study' && 'bg-green-100 text-green-800'"
                                    >
                                        {{article.type}}
                                        </span>
                                        </a>
                                        <a :href="'/casestudy/' + article.slug">
                                            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                                {{article.title | prune(50)}}
                                            </h3>
                                            <p class="mt-3 text-base leading-6 text-gray-500">
                                                {{article.description | prune(100)}}
                                            </p>
                                        </a>
                                        <!-- <NuxtLink  :to="{ name: 'casestudy-slug', params: { slug: article.slug } }" class="block" no-prefetch>
                                        <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                            {{article.title | prune(50)}}
                                        </h3>
                                        <p class="mt-3 text-base leading-6 text-gray-500">
                                            {{article.description | prune(100)}}
                                        </p>
                                    </NuxtLink> -->
                            </div>
                            <div class="mt-3 flex items-center">

                                <p class="text-sm leading-5 font-medium text-gray-900">
                                    {{article.author | prune(20)}}
                                </p>
                                <span class="mx-1">
                                    &middot;
                                </span>
                                <div class="flex text-sm leading-5 text-gray-500">

                                    {{article.date | moment("DD-MMM-YYYY")}}

                                    <span class="mx-1">
                                        &middot;
                                    </span>
                                    <span>

                                    </span>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    articles: Array,
  },
  filters: {
    prune(val, len) {
      val = val.replace("Executive Summary", "");
      let n = len === undefined ? 100 : len;
      return s(val)
        .prune(n)
        .value();
    },
  },
};
</script>

<style>
.article-card {
  border-radius: 8px;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}

.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>