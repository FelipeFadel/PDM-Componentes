import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import CardParty from "@/components/cards/CardParty";

export default function index() {
  return (
    <ScrollView>
      <ScreenWrapper title="Your Party">
        <MainCard
          title="Vice Awakens"
          participating={3}
          imgUrl="https://images-ext-1.discordapp.net/external/b6TDq8CbrrGoUiMLnoxo4OYWvgA_9uwVKPc-_PT3t14/https/res.cloudinary.com/duposs86e/image/upload/v1745452062/roqkx7r2c1oal4fopndk.png?format=webp&quality=lossless"
          name="Vice, The Shadow Wyrm"
          hp={1224}
          damageDone={21}
        />

        <Title>MEMBERS</Title>

        <CardParty
          name="Josefa"
          at="@JosefaAhoba"
          imgUrl="https://i.pinimg.com/736x/97/da/1c/97da1c0da341762fcaa0edbc4d259837.jpg"
          itemUrl="https://i.imgur.com/d9NKHv8.png"
          level={12}
          functionP="Leader"
          hp="100%"
          mana="64%"
        />

        <CardParty
          name="Portonza"
          at="@showDebola"
          imgUrl="https://i.pinimg.com/736x/0c/0f/af/0c0faf3dc51eb53801f9be0fa1ef104f.jpg"
          itemUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5097d3c-0134-4059-b20d-e49db25fe6cc/dcwkhj8-30907b15-f856-4f5c-9ea5-8f16475206da.png/v1/fill/w_1024,h_1024/pixel_art_book_by_ens010_dcwkhj8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Q1MDk3ZDNjLTAxMzQtNDA1OS1iMjBkLWU0OWRiMjVmZTZjY1wvZGN3a2hqOC0zMDkwN2IxNS1mODU2LTRmNWMtOWVhNS04ZjE2NDc1MjA2ZGEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-VF0ZshoS-A-bdaFW2mxHgQBSABwNZOWgjmYLsH3xWs"
          level={51}
          functionP="Suport"
          hp="54%"
          mana="90%"
        />

        <CardParty
          name="Marinao"
          at="@ShowShow"
          imgUrl="https://i.pinimg.com/736x/0c/0f/af/0c0faf3dc51eb53801f9be0fa1ef104f.jpg"
          itemUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5097d3c-0134-4059-b20d-e49db25fe6cc/dcwkhj8-30907b15-f856-4f5c-9ea5-8f16475206da.png/v1/fill/w_1024,h_1024/pixel_art_book_by_ens010_dcwkhj8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Q1MDk3ZDNjLTAxMzQtNDA1OS1iMjBkLWU0OWRiMjVmZTZjY1wvZGN3a2hqOC0zMDkwN2IxNS1mODU2LTRmNWMtOWVhNS04ZjE2NDc1MjA2ZGEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-VF0ZshoS-A-bdaFW2mxHgQBSABwNZOWgjmYLsH3xWs"
          level={5}
          functionP="Tanker"
          hp="10%"
          mana="30%"
        />
      </ScreenWrapper>
    </ScrollView>
  );
}
