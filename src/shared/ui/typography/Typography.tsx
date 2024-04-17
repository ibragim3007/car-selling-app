import React from "react";
import { Text, TextProps } from "react-native";

type TypographyVariants =
  | "largeTitle"
  | "title_1"
  | "title_2"
  | "title_3"
  | "headline"
  | "body"
  | "callout";

type TypographyWeight = "regular" | "bold" | "medium";

interface TypographyProps extends TextProps {
  variant?: TypographyVariants;
  weight?: TypographyWeight;
}

const fontsWeights: Record<TypographyWeight, TextProps["style"]> = {
  regular: {
    fontFamily: "Montserrat_400Regular",
  },
  bold: {
    fontFamily: "Montserrat_700Bold",
  },
  medium: {
    fontFamily: "Montserrat_500Medium",
  },
};

const Typography = (props: TypographyProps) => {
  const fontStyles = fontsWeights[props.weight || "medium"];

  const TypographyStyles: Record<TypographyVariants, TextProps["style"]> = {
    largeTitle: { fontSize: 34 },
    title_1: { fontSize: 28 },
    title_2: { fontSize: 22 },
    title_3: { fontSize: 20 },
    headline: { fontSize: 17 },
    body: { fontSize: 17 },
    callout: { fontSize: 15 },
  };

  const mergedStyles = Object.assign(
    {},
    props.style,
    TypographyStyles[props.variant || "body"],
    fontStyles
  );

  return (
    <Text {...props} style={mergedStyles}>
      {props.children}
    </Text>
  );
};

export default Typography;
