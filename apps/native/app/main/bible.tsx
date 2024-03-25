import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { config } from "@repo/common";
import { Button, Icon, Text } from "@components";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text bold className="text-black text-4xl">
        This is bible
      </Text>
      <Button label={config.test} />
      <StatusBar style="auto" />
      <Icon name="book-cross" />
    </View>
  );
}
