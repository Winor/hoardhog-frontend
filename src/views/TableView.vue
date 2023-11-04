<script setup lang="ts">

import DataTable, { type DataTableRowSelectEvent } from 'primevue/datatable'
import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup'
// import Row from 'primevue/row'

import { useItemStore } from '@/stores/item'

import {computed, onMounted, ref} from 'vue'
import router from '@/router';

let isLoading = ref(true);
let store = useItemStore()

const selectedProduct = ref()

const items = computed(() => {
  return store.itemList;
});

onMounted(async () => {
  await store.fetchItems();
  isLoading.value = false
});

const onRowSelect = (event: DataTableRowSelectEvent) => {
    router.push(`/item/${event.data.id}`)
};
const onRowUnselect = (event: DataTableRowSelectEvent) => {
    console.log(event.data)
}

</script>


<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="items" :loading=isLoading tableStyle="min-width: 50rem" selectionMode="single" @rowSelect="onRowSelect" @rowUnselect="onRowUnselect">
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>
