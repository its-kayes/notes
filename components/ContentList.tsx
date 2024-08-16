import { StackNavigationProp } from "@react-navigation/stack";
import { IContentItem } from "@/app/(tabs)";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./navigation/RootStackParamList";
import { ScrollView, StyleSheet } from "react-native";
import ContentItem from "./ContentItem";

type NavigationProp = StackNavigationProp<RootStackParamList, "ContentDetail">;

interface ContentListProps {
  contentItems: IContentItem[];
}

const ContentList: React.FC<ContentListProps> = ({ contentItems }) => {
  const navigation = useNavigation<NavigationProp>();

  const handleItemPress = (item: IContentItem) => {
    navigation.navigate("ContentDetail", {
      title: item.title,
      des: item.des,
      tag: item.tag,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {contentItems.map((item, index) => (
        <ContentItem
          key={index}
          {...item}
          onPress={() => handleItemPress(item)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default ContentList;
