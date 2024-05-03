import EditProfile from '@/components/HeadersRight/EditProfile';
import HeaderBar from '@/components/HeadersRight/HeaderBar';
import HomePageHeader from '@/components/HeadersRight/HomePageHeader';
import HeaderIcon from '@/components/HeadersTitle/HeaderIcon';
import Car from '@/icons/linear/car.svg';
import Service from '@/icons/linear/category-2.svg';
import Home from '@/icons/linear/home-2.svg';
import Checks from '@/icons/linear/search-status.svg';
import Profile from '@/icons/linear/user-square.svg';

import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { fontWeight } from '@/shared/ui/styles/typography/typography';
import { normalizedSize } from '@/shared/utils/size';
import { Tabs } from 'expo-router';
import React from 'react';

const IconSize = normalizedSize(22);

const TabsLayout = () => {
  const { colors } = useTheme();
  return (
    <Tabs
      initialRouteName="HomePage"
      screenOptions={{
        headerRight: () => <HeaderBar />,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarActiveTintColor: colors.text.primary,
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        tabBarStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTitleStyle: {
          fontSize: normalizedSize(16),
          color: colors.text.primary,
        },
        tabBarLabelStyle: {
          fontFamily: fontWeight.medium,
          fontSize: normalizedSize(10),
        },
      }}
    >
      <Tabs.Screen redirect name="index" />
      <Tabs.Screen
        name="home"
        options={{
          href: 'home',
          headerTitle: () => <HeaderIcon />,
          headerRight: () => <HomePageHeader />,
          tabBarIcon: ({ color, size }) => <Home height={IconSize} width={IconSize} color={color} />,
        }}
      />

      <Tabs.Screen
        name="collections"
        options={{
          title: 'Подборки',
          headerTitle: () => <HeaderIcon />,
          tabBarIcon: ({ color, size }) => <Car height={IconSize} width={IconSize} color={color} />,
        }}
      />
      <Tabs.Screen
        name="checks"
        options={{
          headerTitle: 'Проверка авто',
          title: 'Проверка',
          headerRight: () => null,
          tabBarIcon: ({ color, size }) => <Checks height={IconSize} width={IconSize} color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          headerTitle: 'Сервисы',
          title: 'Сервисы',
          headerRight: () => null,
          tabBarIcon: ({ color, size }) => <Service height={IconSize} width={IconSize} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Профиль',
          title: 'Профиль',
          tabBarIcon: ({ color }) => <Profile height={IconSize} width={IconSize} color={color} />,
          headerRight: ({ tintColor }) => <EditProfile />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
