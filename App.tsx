import {ScrollView} from 'react-native';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';

function Screen() {
  return (
    <ScrollView>
      {Array.from({length: 100}).map((_, index) => (
        <TextInput key={index} placeholder={`${index}`} />
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen />
    </GestureHandlerRootView>
  );
}
