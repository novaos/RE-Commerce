enum LocalStorageKeys {
  comparison = 'comparison'
}

const LocalStorageApi = {
  set: (name: LocalStorageKeys, data: any) => localStorage.setItem(name, JSON.stringify(data)),
  get: (name: LocalStorageKeys) => localStorage.getItem(name)
};

export { LocalStorageKeys, LocalStorageApi };
