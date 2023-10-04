import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";
import { orderCtrl } from "../../../api";
import { Layout } from "../../../layouts";
import { LoadingScreen, Separator } from "../../../components/Shared";
import { ProductList, Address } from "../../../components/Orders";
import { styles } from "./OrderScreen.styles";

export function OrderScreen(props) {
  const navigation = useNavigation();
  const [order, setOrder] = useState(null);
  
  // Obtener el orderId de la ruta de navegación
  const { route } = props;
  const { id: dynamicOrderId } = route?.params || {};
  
  useEffect(() => {
    if (dynamicOrderId) {
      console.log("dynamicOrderId recibido:", dynamicOrderId);
      navigation.setOptions({ title: `Pedido ${dynamicOrderId}` });
      getOrder(dynamicOrderId);
      

    } else {
      // Manejar el caso en el que dynamicOrderId no esté definido
      console.log("dynamicOrderId no está definido");
    }
  }, [dynamicOrderId]);

  const getOrder = async (orderId) => {
    try {
      const response = await orderCtrl.getById(orderId);
      setOrder(response);
    } catch (error) {
      Toast.show("Error al obtener el pedido", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <Layout.Basic hideSearch>
      <View style={styles.container}>
        {!order ? (
          <LoadingScreen text="Cargando pedido" />
        ) : (
          <View>
            <Separator height={20} />

            <Text style={styles.title}>Productos</Text>
            <ProductList products={order.products} />

            <Separator height={50} />

            <Text style={styles.title}>Dirección de envio</Text>
            <Separator height={20} />

            <Address address={order.addressShipping.attributes} />

            <Text style={styles.totalPayment}>
              Total: {order?.totalPayment} C$
            </Text>
          </View>
        )}
      </View>
    </Layout.Basic>
  );
}