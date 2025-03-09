import React from 'react'
import { StatusBar } from 'expo-status-bar';

import Image from "@assets/Start investing.svg";

import * as S from "./styles";
import useTypeSafeNavigation from '@hooks/navigation/useTypeSafeNavigation';

export default function Welcome() {
    const { navigate } = useTypeSafeNavigation();

    return (
        <S.Container>
            <StatusBar style="light" />

            <S.Title>
                Track Crypto Prices
            </S.Title>

            <S.WrapperImage>
                <Image />
            </S.WrapperImage>


            <S.WrapperButtons>
                <S.Button onPress={() => navigate("Onboarding")}>
                    <S.ButtonText>
                        Get Started
                    </S.ButtonText>
                </S.Button>

                <S.ButtonOutline onPress={() => navigate("WelcomeBack")}>
                    <S.ButtonOutlineText>
                        Sign In
                    </S.ButtonOutlineText>
                </S.ButtonOutline>
            </S.WrapperButtons>
        </S.Container>
    )
}