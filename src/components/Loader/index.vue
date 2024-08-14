<script setup lang="ts">
defineProps({
    loading: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 50px; height: 50px;" role="status">
            <span class="sr-only"></span>
        </div>
    </div>
</template>