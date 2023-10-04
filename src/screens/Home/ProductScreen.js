import { useState, useEffect } from "react";
import { View } from "react-native";
import { forEach } from "lodash";
import { productCtrl } from "../../api";
import { Layout } from "../../layouts";
import { LoadingScreen, Separator } from "../../components/Shared";
import { Product } from "../../components/Product";

export function ProductScreen(props) {
    const {
        route: { params },
    } = props;
    const productId = params.productId;
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    // Futuro problema

    useEffect(() => {
        getProduct();
    }, [productId]);

    const getProduct = async () => {
        try {
            const response = await productCtrl.getById(productId);
            setProduct({ ...response.data.attributes, id: response.data.id })
            // Las imagenes url

            const baseUrl = "http://192.168.1.6:1337";

            const mainImage = response.data.attributes.main_image.data.attributes.url;
            const mainImageUrl = baseUrl + mainImage;
            
            const images = response.data.attributes.images.data;

            const arrayImages = [mainImageUrl];

            images.forEach((image) => {
                const imageUrl = baseUrl + image.attributes.url;
                arrayImages.push(imageUrl);
                setImages(arrayImages);
                //console.log(imageUrl);
            });
        }   catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <Layout.Basic>
            {!product ? (
                <LoadingScreen text="Cargando producto" size="large" />
            ): (
              <>
                <Product.Title text={product.title} /> 
                <Product.CarouselImages images={images} />

                <View style={{ padding: 10 }}>
                    <Product.Price price={product.price} discount={product.discount}/>
                    <Separator height={30} />
                        <Product.Characteristics text={product.characteristics} />
                    <Separator height={70} />
                </View>
              </>  
            )}    
        </Layout.Basic>
        
        {product && <Product.BottomBar productId={productId} />}
        </>
    );
}