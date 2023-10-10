<script setup lang="ts">

import DataTable, { type DataTableRowSelectEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import  {item} from "hoardhog-api"

import {ref} from 'vue'

let isLoading = ref(true);
let items = ref<typeof item[]>([])
const selectedProduct = ref()

item.all().then((itms) => {
    items.value = itms
    isLoading.value = false;
});

const onRowSelect = (event: DataTableRowSelectEvent) => {
    console.log(event.data)
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
