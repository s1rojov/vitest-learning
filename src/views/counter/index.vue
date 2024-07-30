<script setup lang="ts">
import { counter } from '@/views/counter/composable'
const { incrFunc, decrFunc, reset, count } = counter()
</script>
<template>
  <div class="container mt-5">
    <div class="card w-25">
      <div class="card-body">
        <h5 class="card-title">Counter</h5>
        <p class="card-text text-center">
         <h2>
          {{ count }}
         </h2>
        </p>
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary me-1" type="button" @click="incrFunc">increment</button>
          <button class="btn btn-secondary me-1" type="button" @click="reset">reset</button>
          <button class="btn btn-success" type="button" @click="decrFunc">decriment</button>
        </div>
      </div>
    </div>
  </div>
</template>
