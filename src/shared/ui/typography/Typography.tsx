import {
  TypographyProps,
  TypographyStyles,
  fontsWeights,
} from "@/shared/config/styles/typography/typography";
import React from "react";
import { Text, TextProps } from "react-native";

const Typography = (props: TypographyProps) => {
  const fontStyles = fontsWeights[props.weight || "medium"];

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
