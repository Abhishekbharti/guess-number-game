import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary600,
        marginTop: 36,
        marginHorizontal: 24,
        padding: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});
