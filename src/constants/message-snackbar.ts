import { type SnackOptionInterfaces } from '@/types/interfaces/snack-option.interfaces';

export const messageSnacbar: Record<string, SnackOptionInterfaces> = {
  200: {
    message: 'exito',
    variant: 'success'
  },
  404: {
    message: 'error 404',
    variant: 'error'
  }
};
