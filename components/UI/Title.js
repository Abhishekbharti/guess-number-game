import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        color: "#fff",
        textAlign: "center",
        padding: 12,
        borderColor: "#fff",
        borderWidth: 2,
    },
});
