import {
    View,
    TextInput,
    StyleSheet,
    Alert,
    useWindowDimensions,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import Colors from "../constants/Colors";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import CustomButton from "../components/UI/CustomButton";
import InstructionText from "../components/UI/InstructionText";

export default function StartGame(props) {
    const [guessNumber, setGuessNumber] = useState("");
    const { width, height } = useWindowDimensions();

    function handleChangeText(enteredNumber) {
        setGuessNumber(enteredNumber);
    }

    function handleGameReset() {
        setGuessNumber("");
    }

    function handleGameConfirm() {
        const parsedGuessNumber = parseInt(guessNumber);

        if (
            isNaN(parsedGuessNumber) ||
            parsedGuessNumber <= 0 ||
            parsedGuessNumber > 99
        ) {
            Alert.alert(
                "Invalid Number",
                "Chosen number has to be number between 1 and 99",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: handleGameReset,
                    },
                ]
            );
            return;
        }

        props.onStartGame(parsedGuessNumber);
    }

    const marginTopDistance = height < 400 ? 50 : 100;

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
                <View
                    style={[
                        styles.rootContainer,
                        { marginTop: marginTopDistance },
                    ]}
                >
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput
                            value={guessNumber}
                            onChangeText={handleChangeText}
                            style={styles.numberInput}
                            keyboardType="number-pad"
                            maxLength={2}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <CustomButton onPress={handleGameReset}>
                                    Reset
                                </CustomButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <CustomButton onPress={handleGameConfirm}>
                                    Confirm
                                </CustomButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        fontSize: 32,
        fontWeight: "bold",
        width: 50,
        textAlign: "center",
        color: Colors.accent500,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 16,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
