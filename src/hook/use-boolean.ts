'use client';

import { useState } from 'react';

interface ReturnState {
  onTrue: () => void;
  onToggle: () => void;
  onFalse: () => void;
  value: boolean | null;
}

export const useBoolean = (): ReturnState => {
  const [value, setValue] = useState<boolean | null>(null);

  const onTrue = (): void => {
    setValue(true);
  };
  const onFalse = (): void => {
    setValue(false);
  };
  const onToggle = (): void => {
    setValue(!(value ?? false));
  };

  return {
    onTrue,
    onToggle,
    onFalse,
    value
  };
};
