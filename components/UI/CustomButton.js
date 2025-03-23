import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/Colors";

export default function CustomButton({ children, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.buttonPressed}
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    buttonPressed: {
        opacity: 0.75,
    },
});
