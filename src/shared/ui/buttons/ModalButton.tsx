import React from 'react';
import Button, { ButtonProps } from './Button';
import { StyleSheet } from 'react-native';
import Card from '../card/Card';

const ModalButton = ({ ...props }: ButtonProps) => {
  const styles = StyleSheet.flatten([
    {
      borderRadius: 0,
      paddingHorizontal: 1,
    },
    props.style,
  ]);

  return (
    <Card p={0} borderRadius={0}>
      <Button color="black" variant="ghost" style={styles} {...props} />
    </Card>
  );
};

export default ModalButton;
