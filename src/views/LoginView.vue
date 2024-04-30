<script lang="ts" setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleAutenticate = () => {
    router.push({path: "/dashboard/transactions"})
}

</script>
<template>
    <Button @click="handleAutenticate">
        Next Page
    </Button>
</template>