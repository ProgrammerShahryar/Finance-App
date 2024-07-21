import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderColor: '#ddd',
    borderTopWidth: 1,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4
  },
  sTextbox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 15
  },
  sLayout: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  sErrorMessageContainer: {
    backgroundColor: '#ffe6e6',
    padding: 15,
    marginBottom: 15,
    borderColor: '#ff4d4d',
    borderWidth: 1,
    borderLeftWidth: 8,
    borderRadius: 10
  },
  sErrorMessageLabel: {
    color: '#ff4d4d',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  sErrorMessageText: {
    color: '#ff4d4d',
    fontSize: 16
  }
});

export default styles;
