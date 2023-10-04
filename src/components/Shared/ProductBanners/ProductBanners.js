import { useState } from "react";
import { View, Image, Pressable, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { size } from "lodash";
import { scrensName } from "../../../utils";
import { styles } from "./ProductBanners.styles";

const width = Dimensions.get("window").width;

export function ProductBanners(props) {
    const { banners } = props;
    //console.log(banners); no borrar el comentario
    const [bannerActive, setBannerActive] = useState(0);
    const navigation =useNavigation();

    const goToProducto = (id) => {
        navigation.navigate(scrensName.home.product, { productId: id });
        //console.log(id); no borrar el comentario
    };

    const renderItem = ({ item }) => {
        // Supongo que tu servidor Strapi tiene la base URL correcta
        const baseUrl = "http://192.168.1.6:1337"; // Reemplaza con la base URL de tu servidor Strapi
        const relativeUrl = item.attributes.banner.data.attributes.url;
      
        // Convierte la URL relativa en una URL completa
        const fullUrl = baseUrl + relativeUrl;
      
        // console.log(fullUrl); // Esto mostrará la URL completa en la consola
      
        return (
          <Pressable onPress={() => goToProducto(item.id)}>
            <Image source={{ uri: fullUrl }} style={styles.carousel} />
          </Pressable>
        );
      };
      
    return (
        <View style={styles.container}>
            <Carousel
                layout="default"
                data={banners}
                sliderWidth={width}
                itemWidth={width}
                renderItem={renderItem}
                onSnapToItem={(index) => setBannerActive(index)}
            />

            <Pagination
                dotsLength={size(banners)}
                activeDotIndex={bannerActive}
                inactiveDotOpacity={0.6}
                inactiveDotScale={0.6}
                containerStyle={styles.dotsContainer}
                dotStyle={styles.dot}
                inactiveDotStyle={styles.dot}
            />
        </View>
    );

    
}



