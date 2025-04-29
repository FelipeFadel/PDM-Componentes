import { View, Text, StyleSheet, Image, DimensionValue } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";
import Entypo from "@expo/vector-icons/Entypo";

type CardPartyProps = {
  name: string;
  at: string;
  imgUrl: string;
  itemUrl: string;
  level: number;
  functionP: string;
  hp: DimensionValue | undefined;
  mana: DimensionValue | undefined;
};

export default function CardParty({
  name,
  at,
  imgUrl,
  itemUrl,
  level,
  functionP,
  hp,
  mana,
}: CardPartyProps) {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={{ uri: imgUrl }} style={styles.image} />

          <View style={styles.infoContainer}>
            <Text style={styles.textBold}>{name}</Text>

            <View style={styles.rowBetween}>
              <Text style={styles.textGray}>{at}</Text>

              <View style={styles.rightBox}>
                <Image source={{ uri: itemUrl }} style={styles.smallIcon} />
                <View style={styles.smallBox}>
                  <Entypo name="arrow-up" size={12} color="#A885F2" />
                </View>
              </View>
            </View>

            <View style={styles.barContainer}>
              <View style={{ ...styles.barHp, width: hp }} />
            </View>
            <View style={styles.barContainer}>
              <View style={{ ...styles.barMana, width: mana }} />
            </View>
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <Text style={styles.textGrayStr}>Level {level}</Text>
              <Text style={styles.textGrayStr}>{functionP}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statsRight: {
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
    marginTop: 8,
  },
  barHp: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  barMana: {
    backgroundColor: "rgb(79 181 233)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  footer: {
    backgroundColor: "rgb(255 166 36)",
    width: "100%",
    alignItems: "center",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 17,
  },
  textGray: {
    color: "rgb(180, 180, 180)",
  },
  textGrayStr: {
    color: "rgb(150, 150, 150)",
    marginTop: 5,
  },
  smallIcon: {
    width: 16,
    height: 16,
  },
  smallBox: {
    width: 16,
    height: 16,
    borderRadius: 2,
    backgroundColor: "rgb(230, 230, 230)",
    alignItems: "center",
    justifyContent: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  rightBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4, // espaço entre a espada e o box
  },
});
