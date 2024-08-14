<script setup lang="ts">
const emit = defineEmits(['delete', 'edit', 'complete'])
defineProps({
    data: {
        type: Object,
        default: {}
    },
    deleteLoading: {
        type: Boolean,
        default: false
    }
})
const Edit = (id: number): void => {
    emit('edit', id)
}
const Delete = (id: number): void => {
    emit('delete', id)
}
const Complete = (id: number): void => {
    emit('complete', id)
}
</script>
<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-capitalize">{{ data.title }}</h5>
            <p class="card-text">Completed: <span class="badge bg-success">{{ data.completed ? 'Yes' : 'No' }}</span>
            </p>

        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-primary" @click="Edit(data.id)">
                    Edit
                </button>
                <button type="button" class="btn btn-danger" @click="Delete(data.id)">
                    <div v-if="deleteLoading" class="spinner-border me-1" style="width: 18px; height: 18px;" role="status">
                        <span class="sr-only"></span>
                    </div>
                    Delete
                </button>
                <button type="button" class="btn btn-success" @click="Complete(data.id)">Complete</button>
            </div>
        </div>
    </div>
</template>