import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashbaord.vue";
import CreateCustomer from "../views/CreateCustomer.vue";
import Customer from "../views/Customer.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/createcustomer",
    name: "createCustomer",
    component: CreateCustomer,
  },
  {
    path: "/customer/:id",
    name: "customer",
    component: Customer,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
