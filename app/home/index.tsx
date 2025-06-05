import { useCallback, useState } from "react";
import { Stack, useFocusEffect } from "expo-router";
import { Alert, FlatList, Text, TextInput, View } from "react-native";

import HeaderRight from "../../components/HeaderRight";
import Loading from "../../components/Loading";
import StyledButton from "../../components/StyledButton";
import ViewBook from "../../components/ViewBook";
import useCollection from "../../firebase/hooks/useCollection";
import globalStyles from "../../styles/globalStyles";
import Book from "../../types/Book";

export default function Home() {
  useFocusEffect(
    useCallback(() => {
      refreshData();
    }, [])
  );

  const { data, create, remove, refreshData, loading } =
    useCollection<Book>("books");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const handleCreateBook = async () => {
    try {
      await create({
        title,
        author,
        pages: parseInt(pages, 10),
      });

      await refreshData();
      setTitle("");
      setAuthor("");
      setPages("");
    } catch (error: any) {
      Alert.alert("Create Book error", error.toString());
    }
  };

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Biblioteca",
          headerRight: () => <HeaderRight />,
        }}
      />

      <Text style={globalStyles.titleColletion}>Coleção de livros</Text>

      <View style={globalStyles.box}>
        <TextInput
          style={globalStyles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Autor"
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Páginas"
          value={pages}
          onChangeText={setPages}
          keyboardType="numeric"
        />
        <StyledButton title="Criar Livro" onPress={handleCreateBook} />
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ViewBook
              book={item}
              onDelete={async () => {
                await remove(item.id!);
                await refreshData();
              }}
            />
          )}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
}
