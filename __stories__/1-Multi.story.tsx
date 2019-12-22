import React, { useCallback } from 'react';
import { Select } from '../src';
import Checkbox from './helpers/Checkbox';
import { storiesOf } from '@storybook/react';
import { CityOption, CITY_OPTIONS } from './helpers/utils';
import { useCallbackState } from './helpers/useCallbackState';
import { Hr, Title, SubTitle, List, ListItem, ListWrapper, Container, SelectContainer, CodeFunction, Code, CheckboxGroup, Card, CardHeader, CardBody } from './helpers/styled';

storiesOf('React Functional Select', module).add('Multi-select', () => {
  const [openMenuOnClick, setOpenMenuOnClick] = useCallbackState(true);
  const [closeMenuOnSelect, setCloseMenuOnSelect] = useCallbackState(true);
  const [blurInputOnSelect, setBlurInputOnSelect] = useCallbackState(false);
  const [hideSelectedOptions, setHideSelectedOptions] = useCallbackState(true);

  const getOptionValue = useCallback((option: CityOption): number => option.id, []);
  const getOptionLabel = useCallback((option: CityOption): string => `${option.city}, ${option.state}`, []);

  return (
    <Container>
      <Title>Multi-select</Title>
      <Hr />
      <ListWrapper>
        Add the <Code>isMulti</Code> property to allow for multiple selections. While 
        in multi-select mode, some properties are now applicable and others become 
        more pertinent.
        <List>
          <ListItem>
            <CodeFunction>hideSelectedOptions?: boolean</CodeFunction> - Hide the 
            selected option from the menu. Default value is false, however, if 
            undefined and <Code>isMulti === true</Code>, then its value defaults to true.
          </ListItem>
          <ListItem>
            <CodeFunction>closeMenuOnSelect?: boolean</CodeFunction> - Close the menu of 
            options when the user selects an option. Default value is false, however, it may 
            be benefical to set this property to true for convenience in multi-select scenarios.
          </ListItem>
        </List>
      </ListWrapper>
      <SubTitle>Demo</SubTitle>
      <Hr />
      <Card>
        <CardHeader>
          <CheckboxGroup>
            <Checkbox
              label='closeMenuOnSelect'
              checked={closeMenuOnSelect}
              onCheck={setCloseMenuOnSelect}
            />
            <Checkbox
              label='blurInputOnSelect'
              checked={blurInputOnSelect}
              onCheck={setBlurInputOnSelect}
            />
            <Checkbox
              label='hideSelectedOptions'
              checked={hideSelectedOptions}
              onCheck={setHideSelectedOptions}
            />
            <Checkbox
              label='openMenuOnClick (click caret if false)'
              checked={openMenuOnClick}
              onCheck={setOpenMenuOnClick}
            />
          </CheckboxGroup>
        </CardHeader>
        <CardBody>
          <SelectContainer>
            <Select
              isMulti
              isClearable
              isSearchable
              options={CITY_OPTIONS}
              getOptionValue={getOptionValue}
              getOptionLabel={getOptionLabel}
              openMenuOnClick={openMenuOnClick}
              blurInputOnSelect={blurInputOnSelect}
              closeMenuOnSelect={closeMenuOnSelect}
              hideSelectedOptions={hideSelectedOptions}
            />
          </SelectContainer>
        </CardBody>
      </Card>
    </Container>
  );
});