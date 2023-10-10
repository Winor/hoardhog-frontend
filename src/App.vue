<script setup lang="ts">
import {RouterView } from 'vue-router'
import Menubar from 'primevue/menubar';
import type { MenuItem } from 'primevue/menuitem';
let items: MenuItem[] = [{label: "hi", url: "/items"}]
</script>

<template>

<Menubar :model="items">
  <template #start>
        <img alt="logo" src="@/assets/logo.svg" height="50" class="mr-2" />
    </template>
    <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
        </a>
    </template>
</Menubar>
<router-view></router-view>
</template>

<style scoped>

</style>
