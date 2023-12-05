import { View, Text, Modal, StyleSheet, Button } from "react-native";

const CustomModal = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp} transparent={true}>
      <View style={styles.modalContainer} >
        <View style={styles.modalMessageContainer}>
          <Text>Se eliminará: </Text>
          <Text style={{ fontSize: 35 }}>{itemSelectedProp.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button
            title="Cancelar"
            color="#414A3B"
            onPress={() => setModalVisibleEvent(!isVisibleProp)}
          />
          <Button
            title="Si, eliminar"
            color="#ef233c"
            onPress={onDeleteItemHandlerEvent}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalMessageContainer: {
    padding: 35,
    alignItems: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  modalContainer: {
    marginTop:250,
    borderRadius: 20,
    width: 300,
    height: 300,
    backgroundColor: "#FAC6D3",
    justifyContent:"center",
    alignSelf:"center",
    shadowOpacity: 10,
    shadowRadius:10
    
  },
});
