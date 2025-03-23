// Import React Native Components
import { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Alert,
    FlatList,
    useWindowDimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Importing Custom Components
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import CustomButton from "../components/UI/CustomButton";
import GuessLogItem from "../components/game/GuessLogItem";
import InstructionText from "../components/UI/InstructionText";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [guessNumber, setGuessNumber] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (guessNumber === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [guessNumber, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHander(direction) {
        if (
            (direction === "lower" && guessNumber < userNumber) ||
            (direction === "higher" && guessNumber > userNumber)
        ) {
            Alert.alert("Don't Lie!", "You know that is wrong..", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = guessNumber;
        } else {
            minBoundary = guessNumber + 1;
        }

        const nextRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            guessNumber
        );

        setGuessNumber(nextRndNumber);
        setGuessRounds((current) => [nextRndNumber, ...current]);
    }

    const guessRoundsListLength = guessRounds.length;

    let content = (
        <>
            <NumberContainer style={styles.guessNumber}>
                {guessNumber}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower?
                </InstructionText>
                <View style={styles.actionButton}>
                    <CustomButton onPress={() => nextGuessHander("lower")}>
                        <Ionicons name="remove" size={24} color="#fff" />
                    </CustomButton>
                    <CustomButton onPress={() => nextGuessHander("higher")}>
                        <Ionicons name="add" size={24} color="#fff" />
                    </CustomButton>
                </View>
            </Card>
        </>
    );

    if (width > height) {
        content = (
            <View style={styles.landscapeActionButton}>
                <CustomButton onPress={() => nextGuessHander("lower")}>
                    <Ionicons name="remove" size={24} color="#fff" />
                </CustomButton>
                <NumberContainer style={styles.guessNumber}>
                    {guessNumber}
                </NumberContainer>
                <CustomButton onPress={() => nextGuessHander("higher")}>
                    <Ionicons name="add" size={24} color="#fff" />
                </CustomButton>
            </View>
        );
    }

    const marginTopDistance = width > height ? 0 : 24;

    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            {content}
            <View
                style={[styles.listContainer, { marginTop: marginTopDistance }]}
            >
                <FlatList
                    data={guessRounds}
                    renderItem={(data) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - data.index}
                            guess={data.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingBottom: 2,
        flex: 1,
    },
    guessNumber: {
        alignSelf: "center",
    },
    actionButton: {
        flexDirection: "row",
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        marginTop: 24,
        padding: 8,
    },
    landscapeActionButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
