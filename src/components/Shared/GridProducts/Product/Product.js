import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scrensName } from "../../../../utils";
import { styles } from "./Product.styles";

export function Product(props) {
    const { product } = props;
    const navigation = useNavigation();
    const baseUrl = "http://192.168.1.6:1337";
    const mainImage = product.main_image.data.attributes.url;

    const fullUrl = baseUrl + mainImage;

    const goToProduct = () => {
        navigation.navigate(scrensName.home.product, { productId: product.id });
    };

    return (
        <TouchableWithoutFeedback onPress={goToProduct}>
            <View style={styles.container}>
                <View style={styles.product}>
                    <Image source={{ uri: fullUrl }} style={styles.image} />
                    <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                        {product.title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}