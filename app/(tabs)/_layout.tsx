import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import Car from "../../assets/icons/car/car.svg";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="HomePage">
      <Tabs.Screen redirect name="index" />
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Главная",

          title: "Главная",
          href: "home",

          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="collections"
        options={{
          headerTitle: "Подборки",
          title: "Подборки",
          tabBarIcon: ({ color, size }) => (
            <Car height={size} width={size} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="checks"
        options={{ headerTitle: "Проверка", title: "Проверка" }}
      />
      <Tabs.Screen
        name="services"
        options={{ headerTitle: "Сервисы", title: "Сервисы" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerTitle: "Профиль", title: "Профиль" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
