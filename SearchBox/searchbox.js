import Box from './box';
import React from 'react';
import Text from './text';
import Input from './input';
import {Search, X} from './svg';
import theme from '../utils/theme';
import Button from './button';
import {Keyboard} from 'react-native';
import {Value} from 'react-native-reanimated';

function SearchBox() {
  const [Value, setValue] = React.useState("");
  const [isFocus, setFocus] = React.useState(false);
 
  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };
  const onClear = () => {
    setValue('')
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1} p={2}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          bg="white"
          height={52}
          color="textDark"
          placeholder="Ürün,Marka,Satıcı Ara"
          placeholdeTextColor="textMedium"
          borderRadius="full"
          borderWidth={0.3}
          paddingLeft={52}
          value={Value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {Value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <X color={theme.colors.textDark} />
          </Button>
        )}

        <Button>
          <Search
            position="absolute"
            left={16}
            bottom={14}
            color={theme.colors.textMedium}
          />
        </Button>
      </Box>

      {isFocus && (
        <Button height={52} px={14} onPress={onCancel}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}
export default SearchBox;
