import {
  TypographyProps,
  TypographyStyles,
  fontsWeights,
} from "@/shared/config/styles/typography/typography";
import React from "react";
import { Text } from "react-native";

const Typography = (props: TypographyProps) => {
  const fontStyles = fontsWeights[props.weight || "medium"];
  const typographyStyle = TypographyStyles[props.variant || "body"];

  const mergedStyles = Object.assign(
    {},
    props.style,
    typographyStyle,
    fontStyles
  );

  return (
    <Text {...props} style={mergedStyles}>
      {props.children}
    </Text>
  );
};

export default Typography;
