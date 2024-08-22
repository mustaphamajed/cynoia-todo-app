import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log(`error saving ${key} `);
    }
  };

  export const getData = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      // saving error
      console.log(`error fetching ${key} `);
    }
  };