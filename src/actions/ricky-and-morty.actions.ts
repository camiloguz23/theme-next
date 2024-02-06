"use server";

import { ENDPOINT } from "@/constants";
import { messageSnacbar } from "@/constants/message-snackbar";
import { revalidateTag } from "next/cache";
import { resolve } from "path";

export const getOnlyProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(ENDPOINT.getProducts, {
    method: "POST",
    body: JSON.stringify({
      title: "test camilo",
      price: 23.5,
      description: "lorem ipsum set jeyson",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  });
  const data = response;
  if (data.ok) {
    revalidateTag("products");
  }
  return messageSnacbar[data.status];
};
