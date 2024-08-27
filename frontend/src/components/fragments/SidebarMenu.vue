<template>
  <aside class="bg-gray-100 p-4 w-64 h-screen">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Kategori</h2>
    <div class="mt-4">
      <ul class="space-y-2">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="hover:bg-gray-200 rounded-lg p-2 transition-colors duration-300 cursor-pointer"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const categories = ["Buah-buahan", "Sayuran", "Rempah"];
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
aside {
  /* Menambahkan radius border jika diinginkan */
  border-radius: 8px;
}
</style>
