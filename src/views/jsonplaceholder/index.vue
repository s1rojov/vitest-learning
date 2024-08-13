<script setup lang="ts">
import { ref } from 'vue'
const components = ref<string[]>(['todos', 'comments', 'posts'])
</script>
<template>
    <div class="mb-3">
        <RouterLink v-for="item in components" :key="item" :to="`/jsonplaceholder/${item}`" v-slot="{isActive}">
            <button class="me-2 btn btn-primary" :class="[isActive ? 'active' : '']">{{ item }}</button>
        </RouterLink>
    </div>
    <router-view></router-view>
</template>