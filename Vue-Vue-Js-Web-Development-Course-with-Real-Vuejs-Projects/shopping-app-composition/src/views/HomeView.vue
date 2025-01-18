<template>
  <div class="filterWrapper">
    <div class="topFlex">
      <div
        @click="activeCategory = activeCategory === item ? '' : item"
        :class="activeCategory === item ? 'activeCategory' : ''"
        v-for="item in categories"
        class="category"
      >
        {{ item }}
      </div>
    </div>
    <div class="box">
      <div class="badge">{{ choseProduct.length }}</div>
      <svg
        @click="onShow"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        ></path>
      </svg>
      <ShopContext
        :item="choseProduct"
        @on-go-basket="show = false"
        v-if="show"
      />
    </div>
  </div>
  <div class="bottomFlex">
    <ProductCard
      @on-item-box="onItemFunc($event)"
      v-for="item in products"
      :item="item"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import ShopContext from "../components/ShopContext.vue";
import ProductCard from "@/components/ProductCard.vue";
const activeCategory = ref(null);
const categories = ref([]);
const products = ref([]);
const choseProduct = ref([]);
const show = ref(false);
const onShow = () => {
  show.value = !show.value;
};
const onItemFunc = (e) => {
  choseProduct.value.push(e);
};
const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const jsonData = await response.json();
    categories.value = jsonData;
  } catch (error) {
    console.log(error);
  }
};
const fetchProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    products.value = jsonData;
    console.log(products.value);
  } catch (error) {
    console.log(error);
  }
};
const fetchProductByCategory = async (product) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + product
    );
    const jsonData = await response.json();
    products.value = jsonData;
  } catch (error) {
    console.log(error);
  }
};
watch(activeCategory, (newVal) => {
  if (newVal === "") {
    fetchProduct();
  } else {
    fetchProductByCategory(newVal);
  }
});
onMounted(fetchCategories);
onMounted(fetchProduct);
</script>
<style scoped>
.filterWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.topFlex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.category {
  cursor: pointer;
  padding: 4px 16px;
  background-color: #fafafa;
  border: 1px solid grey;
  font-size: 12px;
  font-weight: 500;
  border-radius: 16px;
  margin-top: 8px;
}
.activeCategory {
  border: 1px solid red;
  background: red;
  color: white;
  font-weight: 600;
}
.box {
  position: relative;
  cursor: pointer;
  color: #374051;
  transition: all 0.5s;
}
.box:hover {
  color: #1874ff;
}
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 10px;
  background-color: #1874ff;
  border-radius: 100%;
  color: white;
  width: 16px;
  height: 16px;
}
.bottomFlex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 16px;
}
</style>
