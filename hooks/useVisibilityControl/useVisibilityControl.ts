import React from 'react';

export type Control = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  visible: boolean;
};

export const useVisibilityControl = (defaultVisible?: boolean) => {
  const [visible, setVisible] = React.useState(!!defaultVisible);

  const open = React.useCallback(() => {
    setVisible(true);
  }, []);

  const close = React.useCallback(() => {
    setVisible(false);
  }, []);

  const toggle = React.useCallback(() => {
    setVisible(prev => {
      return !prev;
    });
  }, []);

  return React.useMemo<Control>(
    () => ({ open, close, visible: visible, toggle }),
    [open, close, visible, toggle]
  );
};
