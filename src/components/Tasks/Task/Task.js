import React, { useState } from 'react';
import { View, Switch, Text, Pressable, Modal, Alert } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Task(props) {
  const [sShowModal, sChangeModal] = useState(false);

  const sModalChange = () => {
    sChangeModal(!sShowModal);
  };


  const sStatusChange = () => {
    props.onStatusChange(props.task.id);
  };






  const sDelete = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Sure',
          onPress: () => {
            props.onTaskRemoval(props.task.id);
            sChangeModal(false);
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return (
    <>
      <Pressable onPress={sModalChange} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
        <View style={styles.sContainer}>
          <View style={styles.sInnerContainer}>
            <Text style={styles.sTitle}>{props.task.title}</Text>
            <View style={styles.sPriceContainer}>
              <Text style={styles.sPriceText}>${props.task.price}</Text>
              <Ionicons name="chevron-forward" size={20} color="blue" />
            </View>
          </View>
        </View>
      </Pressable>





      
      <Modal visible={sShowModal} transparent={true} animationType="fade">
        <View style={styles.sModalOverlay}>
          <View style={styles.sModalContent}>
            <Text style={styles.sModalTitle}>{props.task.title}</Text>
            <Text style={styles.sModalTitle}>${props.task.price}</Text>
            <Pressable onPress={null} style={styles.sModalButton}>
              <Text style={styles.sModalButtonText}>Transaction Date:  Jul 21, 2024</Text>
            </Pressable>
            <Pressable onPress={null} style={styles.sModalButton}>
              <Text style={styles.sModalButtonText}>Address:  London Masonville</Text>
            </Pressable>
            <Pressable onPress={sModalChange} style={styles.sModalCloseButton}>
              <Ionicons name="ios-close" size={30} color="#333" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}