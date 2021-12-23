import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const setOpen = useCallback(state => setIsOpen(state), []);

  const toggle = useCallback(val => setIsOpen(state => val ?? !state), []);

  return { isOpen, toggle, setOpen };
};

export default useToggle;
