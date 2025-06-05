import { faker } from "@faker-js/faker";
import { Stack, useGlobalSearchParams } from "expo-router";
import { Alert, Text, TextInput, View } from "react-native";
import { useState } from "react";

import HeaderRight from "../../../components/HeaderRight";
import Loading from "../../../components/Loading";
import StyledButton from "../../../components/StyledButton";
import useDocument from "../../../firebase/hooks/useDocument";
import globalStyles from "../../../styles/globalStyles";
import Book from "../../../types/Book";

export default function BookDetails() {
  const { id } = useGlobalSearchParams();

  const {
    data: book,
    loading,
    upsert,
  } = useDocument<Book>("books", id as string);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  if (loading || !book) return <Loading />;

  // Initialize form fields with book data
  if (!title && !author && !pages) {
    setTitle(book.title);
    setAuthor(book.author);
    setPages(book.pages.toString());
  }

  const handleUpdate = async () => {
    try {
      await upsert({
        ...book,
        title,
        author,
        pages: parseInt(pages, 10),
      });
      Alert.alert("Success", "Book updated successfully!");
    } catch (error: any) {
      Alert.alert("Update Book error", error.toString());
    }
  };

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Book",
          headerRight: () => <HeaderRight />,
        }}
      />

      <Text style={[globalStyles.title, { marginVertical: 20 }]}>
        Editar detalhes
      </Text>
      <View style={globalStyles.box}>
        <Text style={{ fontSize: 15 }}>id: {id}</Text>

        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={globalStyles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Author"
            value={author}
            onChangeText={setAuthor}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Pages"
            value={pages}
            keyboardType="numeric"
            onChangeText={setPages}
          />
        </View>

        <StyledButton
          title="Salvar edição"
          onPress={handleUpdate}
          style={{ backgroundColor: "#D84797" }}
        />
      </View>
    </View>
  );
}
