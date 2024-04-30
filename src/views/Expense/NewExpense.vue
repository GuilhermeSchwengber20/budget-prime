<script lang="ts" setup>

import SideBar from '../../components/SideBar.vue';
import ActiveLayout from '../../components/misc/ActiveLayout.vue';
import FormContainer from '../../components/misc/FormContainer.vue';
import FormTitle from '../../components/misc/FormTitle.vue';
import FormExpense from '../../components/FormExpense.vue';
import HeaderActive from '../../components/misc/HeaderActive.vue';
</script>
<template>
    <SideBar />
    <ActiveLayout>
        <HeaderActive />
        <FormContainer>  
            <FormTitle>
                Adicionar despesa
            </FormTitle>
            <FormExpense />
        </FormContainer>
    </ActiveLayout>
</template>