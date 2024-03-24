import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { config } from "@repo/common";
import { Button } from "@components";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Text className="font-bold mb-5 text-3xl text-white font-sans-bold">
        Native
      </Text>
      <Button label={config.test} />
      <StatusBar style="auto" />
    </View>
  );
}
