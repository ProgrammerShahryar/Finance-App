import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import STitle from './src/components/Header/Header';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Nav = createBottomTabNavigator();

export default function App() {
  const [tasks, sTasks] = useState([
    {
      id: uuid(),
      title: "Starbucks",
      price: 5.99
    },



    {
      id: uuid(),
      title: "Apple Store",
      price: 999.99
    },



    {
      id: uuid(),
      title: "Sephora",
      price: 49.99
    },



    {
      id: uuid(),
      title: "Shoppers Drug Mart",
      price: 19.99
    },
  ]);





  const sTransactionChecker = () => {
    return tasks.length;
  };


  const sHighSpendingChecker = () => {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.price)).toFixed(2) : '0.00';
  };





  const sLowSpendingChecker = () => {
    return tasks.length > 0 ? Math.min(...tasks.map(task => task.price)).toFixed(2) : '0.00';
  };





  const sAddTask = (taskTitle, taskPrice) => {
    const changedTasks = [...tasks];
    changedTasks.push({
      id: uuid(),
      title: taskTitle,
      price: taskPrice
    });
    sTasks(changedTasks);
  };








  
  const deleteTask = (id) => {
    const changedTask = tasks.filter((task) => task.id !== id);
    sTasks(changedTask);
  };

  const sBalanceChecker = () => {
    return tasks.reduce((total, task) => total + task.price, 0).toFixed(2);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Nav.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === 'Summary') {
                iconName = 'alert';
              } else if (route.name === 'Transactions') {
                iconName = 'ios-document';
              }
              return <Ionicons name={iconName} size={30} color={color} />;
            },
          })}
        >
          <Nav.Screen name='Transactions'>
            {(props) => (
              <>
                <STitle title="Transactions List" />
                <Tasks {...props} tasks={tasks}
                  onStatusChange={null}
                  onTaskRemoval={deleteTask} />
              </>
            )}
          </Nav.Screen>
          <Nav.Screen name='Summary'>
            {(props) => (
              <>
                <STitle title="Summary" />
                <Form 
                  {...props} 
                  onAddTask={sAddTask} 
                  balance={sBalanceChecker()} 


                  highSpending={sHighSpendingChecker()} 
                  lowSpending={sLowSpendingChecker()} 


                  transactions={sTransactionChecker()} 
                />
              </>
            )}
          </Nav.Screen>
        </Nav.Navigator>
      </View>
    </NavigationContainer>
  );
}
