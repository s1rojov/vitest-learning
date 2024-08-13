<script setup lang="ts">
import { ref } from 'vue';

const apps = ref<string[]>(['counter', 'jsonplaceholder'])
</script>
<template>
    <div class="m-3">
        <div class="mb-3">
            <router-link v-for="item in apps" :key="item" :to="item" v-slot="{ isActive }">
                <button class="btn btn-danger me-2" :class="[isActive ? 'active' : '']">{{ item }}</button>
            </router-link>
        </div>
        <RouterView />
    </div>
</template>