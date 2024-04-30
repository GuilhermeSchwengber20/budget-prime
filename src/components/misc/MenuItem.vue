<script lang="ts" setup>
interface Props {
    icon: string,
    label: string,
    navigateTo: string
}
const { label, icon, navigateTo } = defineProps<Props>();
</script>
<template>
    <router-link
        :to="navigateTo"
        activeClass="bg-slate-50 font-bold"
        exactActiveClass="bg-slate-50 font-bold"
        v-ripple class="flex items-center gap-2 py-2 pl-5 hover:bg-slate-50 cursor-pointer p-ripple"
    >
        <i
            :class="icon"
            style="color: var(--primary-color)"
        />
        <label :class="`text-slate-500 text-sm capitalize`">
            {{ label }}
        </label>
    </router-link>
</template>
