import { createRouter, createWebHistory } from "vue-router";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import HomePage from "./pages/HomePage.vue";
import ProductDetails from "./pages/ProductDetails.vue";
import ProductList from "./pages/ProductList.vue";
import ProductForm from "./pages/ProductForm.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "",
        component: HomePage,
        name: "Home",
      },
      {
        path: "/products",
        component: ProductList,
        name: "ProductList",
      },
      {
        path: "/products/add",
        component: ProductForm,
        name: "AddProduct",
      },
      {
        path: "/products/edit/:id",
        component: ProductForm,
        name: "EditProduct",
      },
      {
        path: "/products/:id",
        component: ProductDetails,
        name: "ProductDetails",
      },
    ],
  },
  {
    path: "/:notFound(.*)*",
    component: EmptyLayout,
    name: "NotFound",
    children: [
      {
        path: "",
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
