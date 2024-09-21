import { View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { config } from "@repo/common";
import { Button, Icon, Text } from "@components";
import { useGetBibleQuery } from "@repo/common/store/api/bible";

export default function App() {
  const { data, isLoading } = useGetBibleQuery({ book: "gen", chapter: 1 });
  console.log(JSON.stringify(data));
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
    >
      {isLoading && <Text>Loading...</Text>}
      <Text className="text-xl text-justify text-gray-600">
        {data?.map((verse) => (
          <>
            <Text bold className="text-gray-800 text-xs leading-8 align-middle">
              {" "}
              {verse.verseNum}{" "}
            </Text>
            <Text className="text-gray-600">{verse.text}</Text>
          </>
        ))}
      </Text>
    </ScrollView>
  );
}
