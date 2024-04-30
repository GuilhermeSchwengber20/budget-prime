<script lang="ts" setup>
import Button from "primevue/button";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Breadcrumb from "primevue/breadcrumb";

import { useRoute } from "vue-router";
import { MenuItem } from "primevue/menuitem";

const route = useRoute();
const routes: MenuItem[]  = route.path.split("/").map(part => {
  return {
    label: part.charAt(0).toUpperCase() + part.slice(1)
  }
});

const handleSidebar = () => {
  const sidebar = document.getElementById("layout-sidebar")
  const layoutActive = document.getElementById("layout-active-content");
  if(sidebar) {
    console.log("aqui")
    sidebar?.classList.toggle("layout-sidebar-inactive")
    if(layoutActive) {
      layoutActive.classList.toggle("ml-[16rem]")
    }
  }
}
</script>
<template>
  <div class="flex layout-content-header justify-between items-center h-16 mb-5">
    <div class="flex items-center gap-1">
      <Button
        text
        icon="pi pi-bars"
        severity="secondary"
        rounded
        @click="handleSidebar"
      />
      <Breadcrumb :model="routes">
        <template #separator> / </template>
      </Breadcrumb>
    </div>
    <div class="flex items-center gap-3">
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search"> </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
      <Button text icon="pi pi-cog" severity="secondary" rounded />
      <Avatar icon="pi pi-user" shape="circle" />
    </div>
  </div>
</template>