import { View, Text, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { DateTime } from "luxon";
import { scrensName } from "../../../../utils";
import { styles } from "./Order.styles";

export function Order(props) {
    const { order } = props;
    const navigation = useNavigation();
    const data = order.attributes;

    const goToOrder = () => {
        navigation.navigate(scrensName.account.order, { id: order.id});
    };

    return (
        <Pressable onPress={goToOrder} style={styles.container}>
            <View>
                <Text style={styles.title}>
                    <Text>Pedido: </Text>
                    {order.id}
                </Text>

                <Text>
                    <Text style={styles.title}>Total: </Text>
                    {data.totalPayment} C$
                </Text>

                <Text>
                    <Text>Fecha de compra: </Text>
                    {DateTime.fromISO(data.createdAt, { locale: "es" }).toFormat(
                    "dd/MM/yyyy"
                    )}
                </Text>
            </View>
            <IconButton icon="eye" />
        </Pressable>
    );
}