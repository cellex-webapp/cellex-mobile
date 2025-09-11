import { Image, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Image
        source={require("../../assets/images/icon.png")}
        className="w-20 h-20 mb-4"
      />
      <Text className="text-lg font-semibold text-gray-800">
        Profile Screen
      </Text>
    </View>
  );
}
