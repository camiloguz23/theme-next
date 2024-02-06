"use client";

import { SnackOptionInterfaces } from "@/types/interfaces/snack-option.interfaces";
import { useSnackbar } from "notistack";
import { useState } from "react";

interface Props {
  queryFn: () => Promise<any>;
}
export const useQueryAction = ({ queryFn }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const addProduct = async () => {
    setIsLoading(true);
    const response: SnackOptionInterfaces = await queryFn();
    setIsLoading(false);
    enqueueSnackbar(response.message, { variant: response.variant });
  };

  return {
    addProduct,
    isLoading,
  };
};
