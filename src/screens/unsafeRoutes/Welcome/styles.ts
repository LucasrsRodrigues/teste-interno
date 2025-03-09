import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 24px;
    padding-top: 100px;
`;

export const Title = styled.Text`
    font-size: 36px;
    font-family: ${({ theme }) => theme.typography.bold};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    min-height: 58px;
    padding: 16px 24px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.typography.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const ButtonOutline = styled.Pressable`
    align-items: center;
    justify-content: center;
`;

export const ButtonOutlineText = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.typography.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const WrapperImage = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const WrapperButtons = styled.View`
    gap: 30px;
    padding-bottom: 48px;
`;