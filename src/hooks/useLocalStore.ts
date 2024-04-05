import { useState, useEffect } from 'react';
import { storage } from '@/services/storage';

export const useLocalStorage = <T>(
  keyName: string,
  defaultValue: T
): [T, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value !== null) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value !== null) {
        setStoredValue(JSON.parse(value));
      }
    } catch (err) {
      throw new Error(`Error accessing storage: ${err}`);
    }
  }, [keyName]);

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error('Error setting localStorage:', err);
    }
  };

  return [storedValue, setValue];
};
