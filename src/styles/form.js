import { StyleSheet } from "react-native";

export const form = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    input: {
        marginBottom: 30,
        borderRadius: 9
    },
    btnSubmit: {
        padding: 5,
        backgroundColor: "#000",
    },
    btnText: {
        marginTop: 13,
        padding: 5,
        backgroundColor: "#0098d3",
    },
    btnTextLabel: {
        color: "#000",
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
});