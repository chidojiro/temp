import React from 'react';

export type Control = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  visible: boolean;
};

export const useVisibilityControl = () => {
  const [isActive, setIsActive] = React.useState(false);

  const open = React.useCallback(() => {
    setIsActive(true);
  }, []);

  const close = React.useCallback(() => {
    setIsActive(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsActive(prev => {
      return !prev;
    });
  }, []);

  return React.useMemo<Control>(() => ({ open, close, visible: isActive, toggle }), [open, close, isActive, toggle]);
};
