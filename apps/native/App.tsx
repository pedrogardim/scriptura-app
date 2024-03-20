import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { config } from "@repo/common";

export default function Native() {
  return (
    <View className="bg-slate-800 flex-1 justify-center items-center">
      <Text className="font-bold mb-5 text-3xl text-white">Native</Text>
      <TouchableOpacity
        className="bg-slate-900 p-4 rounded-md"
        onPress={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
      >
        <Text className="text-white">{config.test}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
