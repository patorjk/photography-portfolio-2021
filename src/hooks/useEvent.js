// POLYFILL
import { useRef, useInsertionEffect, useCallback } from 'react';

// The useEvent API has not yet been added to React,
// so this is a temporary shim to make this sandbox work.
// You're not expected to write code like this yourself.

const useEvent = (fn) => {
  const ref = useRef(null);
  useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => {
    const f = ref.current;
    return f(...args);
  }, []);
};

export { useEvent };
export default useEvent;
