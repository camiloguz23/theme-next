'use client';

import { useState } from 'react';

interface ReturnState {
  onTrue: () => void;
  onToggle: () => void;
  onFalse: () => void;
}

export const useBoolean = (): ReturnState => {
  const [value, setValue] = useState<boolean>(false);

  const onTrue = (): void => {
    setValue(true);
  };
  const onFalse = (): void => {
    setValue(false);
  };
  const onToggle = (): void => {
    setValue(!value);
  };

  return {
    onTrue,
    onToggle,
    onFalse,
    value
  };
};
