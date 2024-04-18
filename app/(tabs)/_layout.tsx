import HeaderIcon from '@/components/HeaderIcon/HeaderIcon';
import Car from '@/icons/linear/car.svg';
import Service from '@/icons/linear/category-2.svg';
import Home from '@/icons/linear/home-2.svg';
import Checks from '@/icons/linear/search-status.svg';
import Profile from '@/icons/linear/user-square.svg';
import HeaderBar from '@/modules/HeaderBar';
import { useTheme } from '@/shared/hooks/stable/useTheme';
import { fontWeight } from '@/shared/ui/styles/typography/typography';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  const { colors } = useTheme();
  return (
    <Tabs
      initialRouteName="HomePage"
      screenOptions={{
        headerRight: () => <HeaderBar />,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarActiveTintColor: colors.text.primary,
        tabBarLabelStyle: {
          fontFamily: fontWeight.medium,
        },
      }}
    >
      <Tabs.Screen redirect name="index" />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Главная',
          href: 'home',
          tabBarIcon: ({ color, size }) => <Home height={size} width={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="collections"
        options={{
          title: 'Подборки',
          headerTitle: () => <HeaderIcon />,
          tabBarIcon: ({ color, size }) => <Car height={size} width={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="checks"
        options={{
          headerTitle: 'Проверка',
          title: 'Проверка',
          tabBarIcon: ({ color, size }) => <Checks height={size} width={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          headerTitle: 'Сервисы',
          title: 'Сервисы',
          headerRight: () => null,
          tabBarIcon: ({ color, size }) => <Service height={size} width={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Профиль',
          title: 'Профиль',
          tabBarIcon: ({ color, size }) => <Profile height={size} width={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
