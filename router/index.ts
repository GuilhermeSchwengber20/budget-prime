import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Transactions from "../src/views/Dashboard/TransactionsView.vue"
import NewExpense from "../src/views/Expense/NewExpense.vue"
import LoginView from "../src/views/LoginView.vue"
import NewRevenue from '../src/views/Revenue/NewRevenue.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/dashboard',
        children: [
            {
              path: 'transactions',
              name: 'Transactions',
              component: Transactions, 
            },
        ],
    },
    {
        path: "/management",
        name: "Management",
        redirect: "management/expense/new",
        children: [
            {
              path: 'expense',
              name: 'Expense',
              children: [
                {
                  path: 'new',
                  name: 'NewExpense',
                  component: NewExpense,
                },
              ],
            },
            {
              path: 'revenue',
              name: 'Revenue',
              children: [
                {
                  path: 'new',
                  name: 'NewRevenue',
                  component: NewRevenue,
                },
              ],
            },
        ],

    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;