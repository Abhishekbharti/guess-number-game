import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import Colors from "./constants/Colors";

// Components Imports
import StartGame from "./screens/StartGame";
import GameOver from "./screens/GameOver";
import Game from "./screens/Game";

export default function App() {
    const [userNumber, setUserNumber] = useState("");
    const [gameIsOver, setGameIsOver] = useState(true);
    const [numberOfRounds, setNumberOfRounds] = useState(1);

    useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    function handlGameRestart() {
        setUserNumber("");
    }

    function handleGameStart(parsedUserNumber) {
        setUserNumber(parsedUserNumber);
        setNumberOfRounds(1);
        setGameIsOver(false);
    }

    function handleGameOver(numberOfRounds) {
        setGameIsOver(true);
        setNumberOfRounds(numberOfRounds);
    }

    let currentScreen = <StartGame onStartGame={handleGameStart} />;

    if (userNumber) {
        currentScreen = (
            <Game userNumber={userNumber} onGameOver={handleGameOver} />
        );
    }

    if (gameIsOver && userNumber) {
        currentScreen = (
            <GameOver
                numberOfRounds={numberOfRounds}
                userNumber={userNumber}
                onRestartGame={handlGameRestart}
            />
        );
    }

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <LinearGradient
                colors={[Colors.primary600, Colors.accent500]}
                style={styles.background}
            >
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    style={styles.background}
                    resizeMode="cover"
                    imageStyle={styles.imageStyle}
                >
                    <SafeAreaView style={styles.background}>
                        {currentScreen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    imageStyle: {
        opacity: 0.15,
    },
});
