<script lang="ts" setup>
import SideBar from '../../components/SideBar.vue';
import ActiveLayout from '../../components/misc/ActiveLayout.vue';
import HeaderActive from '../../components/misc/HeaderActive.vue';
</script>
<template>
    <SideBar />
    <ActiveLayout>
        <HeaderActive />
        <div>
            Hello World
        </div>
    </ActiveLayout>
</template>