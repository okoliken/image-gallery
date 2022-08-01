<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import Navbar from "../src/components/Navbar.vue";
import loading from "../src/components/loading.vue";
// import { watch } from "vue";

import axios from "axios";

const AccessKey = ref<string>("HOqE_XqwI_GRjFs6T1G2hA8LS46sAUFISQOHRCaHmKU");

import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import { watch } from "@vue/runtime-core";

const data = ref([]);
const lightboxImg = ref([]);

// const reactivelightboxImg = toRefs(lightboxImg);

const Search = ref<string>("");

const visibleRef = ref(false);
const indexRef = ref(0);

const error = ref("");

const loader = ref<boolean>(false);

watch(Search, () => {
  if (error.value !== "") {
    error.value = "";
  }
  else return
});

const clear = () => {
  Search.value = "";
  data.value = [];
};

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

const getSearchResult = (search: String) => {
  lightboxImg.value = [];
  indexRef.value = 0;
  loader.value = true;
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${AccessKey.value}`
    )
    .then((res) => {
      res.data.results.forEach((element) => {
        lightboxImg.value.push(element.urls.full);
      });

      if (res.data.results.length <= 0) {
        error.value = "No Search found";
      } else {
        data.value = res.data.results;
      }

      loader.value = false;
    })
    .catch((err) => {
      error.value = err.message;
      loader.value = false;
    });
};
</script>

<template>
  <div>
    <Navbar />
    <h1
      class="text-center text-2xl md:text-3xl lg:text-4xl mt-48 text-gray-800"
    >
      Image gallery made with unsplash Api
    </h1>

    <div class="flex items-center justify-center mx-4 lg:mx-0">
      <form @submit.prevent="getSearchResult(Search)" class="w-full max-w-xl">
        <input
          type="text"
          v-model="Search"
          class="border appearance-none w-full lg:max-w-xl outline-none p-2 lg:p-3 mt-10 rounded-full"
          placeholder="Search for Photo's"
        />
      </form>
    </div>

    <div class="container mx-auto">
      <div
        class="flex items-center justify-between md:justify-around my-20 p-5 md:p-0"
        v-if="data.length"
      >
        <h2 class="text-lg md:text-2xl md:ml-10">
          Search Results: {{ data.length }}
        </h2>

        <button
          @click="clear"
          class="md:py-2 py-1 px-5 md:px-12 bg-gray-700 text-white rounded-md"
        >
          Clear Search
        </button>
      </div>

      <Transition appear>
        <h3 class="text-xl text-red-600 text-center my-3" v-if="error !== ''">
          {{ error }}
        </h3>
      </Transition>

      <div v-if="data.length">
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="lightboxImg"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>
        <masonry-wall
          :items="data"
          :ssr-columns="1"
          :column-width="300"
          :gap="16"
        >
          <template #default="{ item, index }">
            <img
              alt=""
              class="cursor-pointer"
              :src="`${item.urls.full}`"
              @click="() => showImg(index)"
            />
          </template>
        </masonry-wall>
      </div>

      <div
        v-else
        class="flex items-center flex-col space-y-5 justify-center my-20"
      >
        <img src="./assets/magnifier.png" class="w-20" alt="" />
        <p class="text-center text-xl font-semibold">
          Searched results will appear here
        </p>
      </div>
    </div>

    <loading v-if="loader === true"></loading>
  </div>
</template>

<style scoped></style>
