import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";


const routes = [
    {
    path: '/',
    name: 'dashboard',
    component: Dashboard
    },
    // { path: 'person', name: 'person.list', component: PersonList },
    // { path: 'person/create', name: 'person.create', component: PersonCreate },
    // { path: 'person/:id', name: 'person.detail', component: PersonDetail },
    // { path: 'company', name: 'company.list', component: CompanyList },
    // { path: 'company/create', name: 'company.create', component: CompanyCreate },
    // { path: 'company/:id', name: 'company.detail', component: CompanyDetail },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
