<script setup lang="ts">

import Button from 'primevue/button';
import Card from 'primevue/card';
import { useItemStore } from '@/stores/item'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import { storeToRefs } from 'pinia'


const route = useRoute();
const itemStore = useItemStore()
const itemId = parseInt(route.params.id as string)
const item = ref(itemStore.empty)
const loading = ref(false)

onMounted(async () => {
    try {
        item.value = await itemStore.findItem(itemId);
    } catch (err) {
        console.log(err)
    }
});

async function save() {
    loading.value = true
    await item.value.update()
    loading.value = false
}



</script>


<template>


<Card>
    <template #title>
        <div class="formgrid grid">
            <InputText v-model="item.name" type="text" class="bg-black-alpha-10" size="large"/>
        </div>
        </template>
    <template #content>
    <div class="formgrid grid">
    <div class="field col-12 md:col-1">
        <label for="quantity">Quantity</label>
        <InputNumber v-model="item.quantity" inputId="quantity" mode="decimal" showButtons :min="0" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
    </div>

    <div class="field col-12">
        <label for="description">Description</label>
        <textarea v-model="item.description" id="description" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
    </div>
    <div class="field col-12 md:col-3">
        <label for="state">Category</label>
        <select id="state" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style="appearance: auto">
            <option>Arizona</option>
            <option>California</option>
            <option>Florida</option>
            <option>Ohio</option>
            <option>Washington</option>
        </select>
    </div>
    <div class="field col-12 md:col-3">
        <label for="state">Location</label>
        <select id="state" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style="appearance: auto">
            <option>Arizona</option>
            <option>California</option>
            <option>Florida</option>
            <option>Ohio</option>
            <option>Washington</option>
        </select>
    </div>
    </div>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" :loading="loading" @click="save"/>
        <!-- <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
    </template>
</Card>

</template>
