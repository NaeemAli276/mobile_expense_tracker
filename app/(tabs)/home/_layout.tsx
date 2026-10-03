import { Stack } from 'expo-router';

export default function HomeLayout() {

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="allExpenses"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
