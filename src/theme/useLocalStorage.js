import { useState, useEffect } from "react";

function getFromLocal(key, init) {
  const savedValue = JSON.parse(window.localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (init instanceof Function) return init();
  return init;
}

export default function useLocalStorage(key, init) {
  const [theme, setTheme] = useState(() => {
    return getFromLocal(key, init);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}
