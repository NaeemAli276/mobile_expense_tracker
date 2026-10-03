import "../global.css";
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { useFonts } from 'expo-font'

export default function RootLayout() {

  const [fontsLoaded, error] = useFonts({
    'Poppins-ExtraLight':    require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Light':         require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Thin':          require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-Regular':       require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium':        require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold':      require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Bold':          require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Black':         require('../assets/fonts/Poppins/Poppins-Black.ttf'),
  })

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
