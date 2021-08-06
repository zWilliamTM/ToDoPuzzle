import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToDoProvider } from "./src/Context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ToDoProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ToDoProvider>
    </SafeAreaProvider>
  );
}
