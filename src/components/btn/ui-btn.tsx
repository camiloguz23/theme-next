"use client";

import { getOnlyProducts } from "@/actions/ricky-and-morty.actions";
import { useQueryAction } from "@/hooks";

function UiBtn() {
  const { addProduct, isLoading } = useQueryAction({
    queryFn: getOnlyProducts,
  });

  return (
    <button onClick={addProduct}>{isLoading ? "cargando" : "crear"}</button>
  );
}

export default UiBtn;
