import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Car from "@/icons/linear/car.svg";
import Profile from "@/icons/linear/user-square.svg";
import Service from "@/icons/linear/category-2.svg";
import Checks from "@/icons/linear/search-status.svg";
import Home from "@/icons/linear/home-2.svg";

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
            <Home height={size} width={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="collections"
        options={{
          headerTitle: "Подборки",
          title: "Подборки",
          tabBarIcon: ({ color, size }) => (
            <Car height={size} width={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="checks"
        options={{
          headerTitle: "Проверка",
          title: "Проверка",
          tabBarIcon: ({ color, size }) => (
            <Checks height={size} width={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          headerTitle: "Сервисы",
          title: "Сервисы",
          tabBarIcon: ({ color, size }) => (
            <Service height={size} width={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Профиль",
          title: "Профиль",
          tabBarIcon: ({ color, size }) => (
            <Profile height={size} width={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
