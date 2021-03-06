/*
 * SonarQube
 * Copyright (C) 2009-2020 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { shallow } from 'enzyme';
import * as React from 'react';
import { AlmSettingsBinding } from '../../../../../types/alm-settings';
import { AlmDefinitionFormField, AlmDefinitionFormFieldProps } from '../AlmDefinitionFormField';

it('should render correctly', () => {
  expect(shallowRender()).toMatchSnapshot();
  expect(shallowRender({ help: 'help' })).toMatchSnapshot();
  expect(shallowRender({ isTextArea: true })).toMatchSnapshot();
});

it('should call onFieldChange', () => {
  const onInputChange = jest.fn();
  shallowRender({ onFieldChange: onInputChange })
    .find('input')
    .simulate('change', { currentTarget: { value: '' } });
  expect(onInputChange).toBeCalled();

  const onTextAreaChange = jest.fn();
  shallowRender({ isTextArea: true, onFieldChange: onTextAreaChange })
    .find('textarea')
    .simulate('change', { currentTarget: { value: '' } });
  expect(onTextAreaChange).toBeCalled();
});

function shallowRender(props: Partial<AlmDefinitionFormFieldProps<AlmSettingsBinding>> = {}) {
  return shallow(
    <AlmDefinitionFormField
      id="key"
      isTextArea={false}
      maxLength={40}
      onFieldChange={jest.fn()}
      propKey="key"
      value="key"
      {...props}
    />
  );
}
