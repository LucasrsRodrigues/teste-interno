import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ITokenDetailParams = {
    tokenId: string;
};


export type RouteParams = {
    ConfirmPin: undefined;
    Dashboard: undefined;
    Exchange: undefined;
    ListTokens: undefined;
    TokenDetail: ITokenDetailParams;
    WelcomeBack: undefined;
    Onboarding: undefined;
    Welcome: undefined;
    CreatePin: undefined;
    RegisterAddress: undefined;
    RegisterConfirmPhone: undefined;
    RegisterPersonalInfo: undefined;
    RegisterPhone: undefined;
};

export type RouteComponent = FC<NativeStackScreenProps<RouteParams>>;