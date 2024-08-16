import { IContentItem } from "@/app/(tabs)";

export interface ContentItemProps extends IContentItem {
  onPress: () => void;
}
