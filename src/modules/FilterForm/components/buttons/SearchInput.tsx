import TextField, { TextFieldProps } from '@/shared/ui/inputs/TextField';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

interface SearchInputProps extends TextFieldProps {}

const SearchInput = ({ ...props }: SearchInputProps) => {
  return <TextField {...props} endIcon={<AntDesign name="search1" size={22} />} />;
};

export default SearchInput;
