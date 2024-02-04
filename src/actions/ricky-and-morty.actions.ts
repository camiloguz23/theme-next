"use serve";

import { ENDPOINT } from "@/constants";

export const getOnlyProducts = async (number: number) => {
  fetch(ENDPOINT.getProducts, {
    method: "POST",
    body: JSON.stringify({
      title: "test camilo",
      price: 23.5,
      description: "lorem ipsum set jeyson",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  });
};
