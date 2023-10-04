import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useState } from "react";
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { wishlistCtrl } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { fn, scrensName } from "../../../../utils";
import { styles } from "./Product.styles";


export function Product(props) {
    const { product, onReload } = props;
    const productInfo = product.attributes;
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const navigation = useNavigation();
    
    
    const relativeImageUrl = productInfo.main_image.data.attributes.url;
    const baseUrl = "http://192.168.1.6:1337";
    const imageUrl = baseUrl + relativeImageUrl;
    
    const goToProduct = () => {
        // Navega a la pantalla de detalles del producto y pasa el ID del producto
        navigation.navigate(scrensName.home.product, { productId: product.id });
      };
      

    const deleteFavorite = async () => {
    setLoading(true);
    await wishlistCtrl.delete(user.id, product.id);
    onReload();
    setLoading(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image 
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />  
            </View>  
            <View style={styles.info}>
                <View>
                    <Text style={styles.name} numberOfLines={3} ellipsizeMode='tail'>
                        {productInfo.title}
                    </Text>    
                    <View style={styles.prices}>
                        <Text style={styles.currentPrice}>
                            {fn.calcPrice(productInfo.price, productInfo.discount)}$
                        </Text>
                        {productInfo.discount && (
                            <Text style={styles.oldPrice}>{productInfo.price}$</Text>
                        )}
                    </View>
                </View>
                <View style={styles.actions}>
                    <Button 
                        style={styles.btnGotoProduct} 
                        mode="contained" 
                        onPress={goToProduct}
                    >
                        Ver producto
                    </Button>
                    <IconButton 
                        icon="close" 
                        iconColor='#fff' 
                        style={styles.btnDelete} 
                        onPress={deleteFavorite}
                    />
                </View>    
            </View>

            {loading && (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )}
            </View>
    );
}