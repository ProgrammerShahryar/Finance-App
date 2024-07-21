import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';
import styles from './styles';

export default function Form({ onAddTask, balance,
   highSpending, lowSpending,
    transactions }) {

  return (
    <View style={styles.sContainer}>


        <Text style={styles.sLayout}>Transactions: {transactions}</Text>


        <Text style={styles.sLayout}>Balance: ${balance}</Text>


        <Text style={styles.sLayout}>High Spending: ${highSpending}</Text>


        <Text style={styles.sLayout}>Low Spending: ${lowSpending}</Text>



    </View>
  );
}
