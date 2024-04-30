<script lang="ts" setup>

import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import Button from "primevue/button";


import { ref } from 'vue';
const categories = ["Pessoal", "Familia", "Viagem", "Mercado"]
const category = ref("");
const value = ref(0);
const num = ref(0);
const ingredient = ref("");
const icondisplay = ref(new Date());
</script>
<template>
    <div class="flex items-center gap-5">
        <div class="flex flex-col gap-2">
            <label for="description">
                Descrição
            </label>
            <InputText
                id="description"
                aria-describedby="description-help"
            />
            <small id="description-help">
                Entre a descrição da despesa.
            </small>
        </div>
        <div class="flex flex-col gap-2">
            <label for="category">Categoria</label>
            <Dropdown
                v-model="category"
                :options="categories"
                placeholder="Selecione a categoria"
                checkmark
                :highlightOnSelect="false" 
            />
            <small id="category-help">
                &nbsp;
            </small>
        </div>
        <div class="flex flex-col gap-2">
            <label for="valueExpense">Valor</label>
            <InputNumber
                v-model="value"
                inputId="stacked-buttons"
                showButtons
                mode="currency"
                currency="BRL" 
                aria-describedby="value-help"
            />
            <small id="value-help">
                Entre o valor da despesa
            </small>
        </div>
        <div class="flex flex-col gap-2">
            <label for="valuePerInstallment">
                Valor P/ Parcela
            </label>
            <InputNumber
                v-model="value"
                inputId="valuePerInstallment"
                showButtons
                mode="currency"
                currency="BRL" 
                aria-describedby="value-per-installment-help"
            />
            <small id="value-per-installment-help">
                Entre o valor de cada parcela
            </small>
        </div>
    </div>
    <div class="flex items-center gap-5 mt-5">
        <div class="flex flex-col gap-2">
            <label for="currentInstallment">Parcela atual</label>
            <InputNumber
                v-model="num"
                inputId="minmax"
                :min="0"
                :max="100"
            />
            <small id="current-installment-help">
                Entre o número atual da parcela
            </small>
        </div>
        <div class="flex flex-col gap-2">
            <label for="maxInstallments">N° de parcelas</label>
            <InputNumber
                v-model="num"
                inputId="minmax"
                :min="0"
                :max="100"
            />
            <small id="max-installments-help">
                Entre o número máximo de parcelas
            </small>
        </div>
        <div class="flex flex-col gap-2">
            <label>Vencimento</label>
            <Calendar
                v-model="icondisplay"
                showIcon
                iconDisplay="input"
            />
            <small id="max-installments-help">
                Entre a data de vencimento
            </small>
        </div>
    </div>
    <div class="flex flex-col gap-5 mt-5">
        <div class="flex flex-col gap-2">
            <span>
                Esta Pago?
            </span>
            <div class="flex items-center">
                <RadioButton
                    v-model="ingredient"
                    inputId="yes"
                    name="yes"
                    value="true"
                />
                <label
                    for="yes"
                    class="ml-2"
                >
                    Sim
                </label>
            </div>
            <div class="flex items-center">
                <RadioButton
                    v-model="ingredient"
                    inputId="no"
                    name="no"
                    value="false"
                />
                <label
                    for="no"
                    class="ml-2"
                >
                    Não
                </label>
            </div>
        </div>
    </div>
    <div class="flex gap-5 items-center w-full my-5">
        <Button
            label="Cancelar"
            severity="danger"
            outlined
            class="w-1/2 p-ripple"
            v-ripple
        />
        <Button
            label="Cadastrar"
            severity="success"
            outlined
            class="w-1/2 p-ripple"
            v-ripple
        />
    </div>
</template>
<style scoped>

.container-form{
    box-shadow: 0px 4px 30px rgba(221, 224, 255, .54);
}
</style>