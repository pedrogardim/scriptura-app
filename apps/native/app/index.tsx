import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { config } from "@repo/common";
import { Button } from "@/components";

export default function App() {
  return (
    <View className="bg-slate-800 flex-1 justify-center items-center">
      <Text className="font-bold mb-5 text-3xl text-white">Native</Text>
      <Button label={config.test} />
      <StatusBar style="auto" />
    </View>
  );
}
