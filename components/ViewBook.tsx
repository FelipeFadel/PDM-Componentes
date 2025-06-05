import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import Book from "../types/Book";
import StyledButton from "./StyledButton";
import globalStyles from "@/styles/globalStyles";

interface ViewBookProps {
  book: Book;
  onDelete: Function;
}

export default function ViewBook({ book, onDelete }: ViewBookProps) {
  const router = useRouter();

  return (
    <View style={[globalStyles.box, { alignSelf: "center", margin: 20 }]}>
      <Text>id: {book.id}</Text>
      <Text>Title: {book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Pages: {book.pages}</Text>

      <View style={{ flexDirection: "row" }}>
        <StyledButton
          title="Ver detalhes"
          onPress={() => {
            if (book.id) {
              router.push(`/home/${book.id}/`);
            } else {
              Alert.alert(
                "View error",
                "cannot access book details because it does not have an id!"
              );
            }
          }}
          style={[
            globalStyles.buttonCollection,
            { backgroundColor: "#03B5AA" },
          ]}
        />

        <StyledButton
          title="Deletar livro"
          onPress={() => {
            if (book.id) {
              Alert.alert("Delete Book", "Are you sure?", [
                {
                  text: "Yes",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete book because it does not have an id!"
              );
            }
          }}
          style={[
            globalStyles.buttonCollection,
            { backgroundColor: "#F86624" },
          ]}
        />
      </View>
    </View>
  );
}
