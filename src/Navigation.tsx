import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screen/Home";
import { MakeTask } from "./screen/MakeTask";
import { CustomHeader } from "./components/organisms/CustomHeader";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "To-Do App",
        }}
      />
      <Stack.Screen
        name="edit"
        component={MakeTask}
        options={{
          title: "Add task",
        }}
      />
    </Stack.Navigator>
  );
}
