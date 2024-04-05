interface LocalStorageItem {
  key: string;
  value: string;
}

export class LocalStorageService {
  static getItem(key: string): string | null {
    const item = localStorage.getItem(key);
    return item !== null ? item : null;
  }

  static setItem(item: LocalStorageItem): void {
    localStorage.setItem(item.key, item.value);
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
