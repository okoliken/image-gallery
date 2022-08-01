<template>
  <div
    class="bg-white p-3 border fixed w-full top-0 flex items-center justify-between"
  >
    <div class="flex items-center space-x-6">
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
          fill="#000000"
          fill-rule="nonzero"
        />
      </svg>
      <p class="text-lg font-medium">Image Gallery</p>
    </div>

    <div class="flex items-center space-x-4">
      <p class="capitalize hidden sm:block">source code</p>
      <a href="https://github.com/okoliken/image-gallery" target="_blank">
        <img src="../assets/github.png" class="w-10" alt="" />
      </a>
    </div>
  </div>
</template>
