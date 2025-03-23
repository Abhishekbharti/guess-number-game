import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.accent500,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.primary600,
        borderRadius: 24,
        margin: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOffset: 0.25,
        shadowRadius: 3,
    },
    text: {
        fontFamily: "open-sans",
        color: Colors.primary600,
    },
});
