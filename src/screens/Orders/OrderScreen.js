import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { orders } from "../../fakers";
import OrderCard from "../../components/OrderCard";
import { styles } from "./style";

export default function OrderScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/salad.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.orderContainer}>
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <OrderCard item={item} navigation={navigation} />
          )}
        />
      </View>
    </ScrollView>
  );
}
