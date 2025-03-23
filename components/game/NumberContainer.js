import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function NumberContainer({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    numberText: {
        fontFamily: "open-sans-bold",
        fontSize: 36,
        fontWeight: "bold",
        color: Colors.accent500,
    },
});
