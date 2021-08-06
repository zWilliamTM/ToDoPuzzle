import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToDoItem } from "../Model";

export const putData = async (key: string, data: ToDoItem) => {
  const str = JSON.stringify(data);
  await AsyncStorage.setItem(key, str);
};

export const editData = async (key: string, data: ToDoItem) => {
  await AsyncStorage.removeItem(key);
  await putData(key, data);
};

export const getData = async (key: string) => {
  const str = await AsyncStorage.getItem(key);
  const data = str && JSON.parse(str);
  return data;
};

export const getAllData = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const data: ToDoItem[] = await Promise.all(keys.map((k) => getData(k)));
  return order(data);
};

export const clearData = async () => {
  await AsyncStorage.clear();
};

function order(array: ToDoItem[]) {
  const old = [...array];
  old.sort((f, s) => toIntKey(s.id) - toIntKey(f.id));
  return [...old];
}

const toIntKey = (key: string): number => parseInt(key.slice(1, key.length));
