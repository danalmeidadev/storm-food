import React, {useState, useCallback} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextInputProps} from 'react-native';
import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  name?: string;
  placeholder?: string;
}

const InputText: React.FC<InputProps> = ({
  value = '',
  placeholder,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused}>
      <Icon
        name="search"
        size={20}
        color={isFocused || isFilled ? '#30BB00' : '#B7B7CC'}
      />

      <TextInput
        placeholderTextColor="#B7B7CC"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        placeholder={placeholder}
        testID="search-input"
        {...rest}
      />
    </Container>
  );
};

export {InputText};
