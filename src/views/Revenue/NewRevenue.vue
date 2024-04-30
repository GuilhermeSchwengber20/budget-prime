<script lang="ts" setup>

import SideBar from '../../components/SideBar.vue';
import ActiveLayout from '../../components/misc/ActiveLayout.vue';
import FormContainer from '../../components/misc/FormContainer.vue';
import FormTitle from '../../components/misc/FormTitle.vue';
import FormRevenue from '../../components/FormRevenue.vue';
import HeaderActive from '../../components/misc/HeaderActive.vue';
</script>
<template>
    <SideBar />
    <ActiveLayout>
        <HeaderActive />
        <FormContainer>  
            <FormTitle>
                Adicionar receita
            </FormTitle>
            <FormRevenue />
        </FormContainer>
    </ActiveLayout>
</template>