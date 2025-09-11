import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-600 mb-4">
        Welcome to Cellex Mobile 🚀
      </Text>
      <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-xl">
        <Text className="text-white font-medium">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
