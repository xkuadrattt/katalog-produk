import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import apple from "@/assets/img/apple.webp";
import banana from "@/assets/img/banana.webp";
import orange from "@/assets/img/orange.webp";
import carrot from "@/assets/img/wortel.webp";
import paprika from "@/assets/img/paprika.webp";
import bayam from "@/assets/img/bayam.webp";
import ketumbar from "@/assets/img/ketumbar.webp";
import bawang from "@/assets/img/bawang.webp";
import jahe from "@/assets/img/jahe.webp";
import {
  type UserProducts,
  type Categories,
  type Users,
} from "@/model/ProductsModels";

export const useProductStore = defineStore("productStore", () => {
  const categories = reactive<Categories>(["fruits", "spices", "vegetables"]);

  const user = reactive<Users>([
    {
      idUser: "user001",
      username: "John",
      email: "john@mail.com",
    },
    {
      idUser: "user002",
      username: "Maria",
      email: "maria@mail.com",
    },
  ]);

  const userProducts = reactive<UserProducts>({
    user001: [
      {
        id: "produk001",
        title: "Original Apple",
        img: apple,
        desc: "fruits that contain antioxidants",
        price: 2000,
        category: "fruits",
      },
      {
        id: "produk002",
        title: "Banana Ambon",
        img: banana,
        desc: "Bananas can provide extra energy",
        price: 1000,
        category: "fruits",
      },
      {
        id: "produk003",
        title: "Orange Lembang",
        img: orange,
        desc: "one of the fruits that has the best vitamin C",
        price: 1000,
        category: "fruits",
      },
      {
        id: "produk004",
        title: "Carrot Maluku",
        img: carrot,
        desc: "Crunchy and sweet, carrots are rich in beta-carotene, which supports eye health. They add vibrant color and nutrition to a variety of dishes",
        price: 4000,
        category: "vegetables",
      },
      {
        id: "produk005",
        title: "Paprika New Zealand",
        img: paprika,
        desc: "Sweet and crisp, bell peppers come in various colors and are high in vitamins A and C. They enhance flavor and texture in both raw and cooked dishes",
        price: 4000,
        category: "vegetables",
      },
      {
        id: "produk006",
        title: "Spinach Popeye Edition",
        img: bayam,
        desc: "Tender and nutrient-dense, spinach is loaded with vitamins and minerals. It's a versatile green that boosts the nutritional value of salads, soups, and smoothies",
        price: 4000,
        category: "vegetables",
      },
      {
        id: "produk007",
        title: "Coriander since 350y ago",
        img: ketumbar,
        desc: "Fresh and citrusy, coriander leaves (cilantro) are often used as a garnish to enhance flavor. Its seeds have a warm, spicy",
        price: 4000,
        category: "spices",
      },
      {
        id: "produk008",
        title: "Ginger",
        img: jahe,
        desc: "Ginger is a spicy, aromatic root with a warm, zesty flavor that enhances both sweet and savory dishes. It's renowned for its digestive benefits and unique, pungent taste",
        price: 4000,
        category: "spices",
      },
      {
        id: "produk009",
        title: "Garlic",
        img: bawang,
        desc: "Garlic is a pungent, flavorful bulb used to infuse dishes with a robust taste. It is renowned for its health benefits and ability to enhance the flavor of both simple and complex dishes",
        price: 4000,
        category: "spices",
      },
    ],
    user002: [
      {
        id: "produk008",
        title: "Ginger",
        img: jahe,
        desc: "Ginger is a spicy, aromatic root with a warm, zesty flavor that enhances both sweet and savory dishes. It's renowned for its digestive benefits and unique, pungent taste",
        price: 4000,
        category: "spices",
      },
      {
        id: "produk009",
        title: "Garlic",
        img: bawang,
        desc: "Garlic is a pungent, flavorful bulb used to infuse dishes with a robust taste. It is renowned for its health benefits and ability to enhance the flavor of both simple and complex dishes",
        price: 4000,
        category: "spices",
      },
    ],
  });

  return {
    user,
    userProducts,
    categories,
  };
});
