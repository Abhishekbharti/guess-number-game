import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/UI/Title";
import CustomButton from "../components/UI/CustomButton";
import Colors from "../constants/Colors";

export default function GameOver({
    numberOfRounds,
    userNumber,
    onRestartGame,
}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/success.png")}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed{" "}
                <Text style={styles.highlight}>{numberOfRounds}</Text> rounds to
                guess the number{" "}
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <CustomButton onPress={onRestartGame}>Start New Game</CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary600,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 36,
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary600,
    },
});
