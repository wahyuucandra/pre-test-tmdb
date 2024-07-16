
// store data
export const setItem = (key: string, value: any) => {
    let dataStorage: any
    if (typeof window !== 'undefined') {
      dataStorage = localStorage.setItem(key, JSON.stringify(value))
    }
  
    return dataStorage
  }
  
  // get data
  export const getItem = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
  }
  
  export const parseJson = (data: string) => {
    let item
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      item = JSON.parse(data)
    }
    return item
  }
  
  export const removeStorageItem = (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
  
  export const getObjectItem = (key: string) => {
    if (typeof window !== 'undefined') {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue) return parseJson(parseJson(jsonValue))
    }
  }
  