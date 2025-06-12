import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue"
import EntrepriseListVue from "../pages/Entreprise/Entreprise.List.vue";
import PersonneCreateVue from "../pages/Personne/Personne.Create.vue";
import PersonneDetailVue from "../pages/Personne/Personne.Detail.vue";
import PersonneListVue from "../pages/Personne/Personne.List.vue";
import EntrepriseCreateVue from "../pages/Entreprise/Entreprise.Create.vue";
import EntrepriseDetailVue from "../pages/Entreprise/Entreprise.Detail.vue";


const routes = [
    {
    path: '/',
    name: 'dashboard',
    component: Dashboard
    },
    { path: '/personne', name: 'person.list', component: PersonneListVue },
    { path: '/personne/create', name: 'personne.create', component: PersonneCreateVue },
    { path: '/personne/:id', name: 'personne.detail', component: PersonneDetailVue },
    { path: '/entreprise', name: 'entreprise.list', component: EntrepriseListVue },
    { path: '/entreprise/create', name: 'entreprise.create', component: EntrepriseCreateVue },
    { path: '/entreprise/:id', name: 'entreprise.detail', component: EntrepriseDetailVue },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
