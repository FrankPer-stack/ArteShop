import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#dadde1",
    },
    imageContainer: {
        width: "40%",
        height: 170,
        backgroundColor: "#ebebeb",
        padding: 5,
    },
    image: {
        height: "100%",
        resizeMode: "cover",
    },
    infoContainer: {
        padding: 10,
        width: "60%",
        justifyContent: "space-between",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    prices: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "flex-end",
    },
    currentPrice: {
        fontSize: 18,
        color: "#b12704",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        width: "106%",
    },
    selectQuantity: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnQuantity: {
        backgroundColor: "#0098d3",
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
    },
    inputQuantity: {
        width: "70px", 
        textAlign: "center",
        fontSize: 22,
        margin: "0 5px",
    },
    btnDelete: {
        backgroundColor: "#b12704",
        borderRadius: 5,
        margin: "0 0 0 5px",
    },
});