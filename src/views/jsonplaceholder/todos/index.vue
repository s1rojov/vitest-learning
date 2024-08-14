<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Loader from '@/components/Loader/index.vue'
import BaseTodo from '@/components/BaseTodo/index.vue'
import { useTodo } from '@/views/jsonplaceholder/todos/composable'
import { useTodoStore } from './store';
const store = useTodoStore()
const { loading, todos,  deleteloading}:any = storeToRefs(store)
const { name, Delete } = useTodo()
</script>
<template>
    <div class="mt-5">
        <Loader :loading="loading" />
        <h2 class="text-center mb-3">{{ name }}</h2>
        <div class="row justify-content-center gap-4">
            <BaseTodo v-for="todo, index in todos" :key="index" :delete-loading="deleteloading" :data="todo" class="col-3" @delete="Delete(todo.id)"/>
        </div>
    </div>
</template>