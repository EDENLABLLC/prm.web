import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Form, { FormBlock, FormRow, FormColumn } from 'components/Form';
import Datepicker from 'components/Datepicker';
import { RadioInputGroup } from 'components/RadioInput';
import Input, { MaskedInput, SelectInput } from 'components/Input';

const document = ['Паспорт', 'Cвідоцтво про народження', 'ІД картка', 'Посвідка'];

@reduxForm({
  form: 'doctorCreate1',
  initialValues: {
    gender: 'FEMALE',
  },
})
export default class DoctorCreate1Form extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <FormBlock title="Персональні дані">
          <FormRow>
            <FormColumn>
              <Field placeholder="Прізвище" type="text" name="last_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Ім’я" type="text" name="first_name" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="По батькові" type="text" name="second_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                theme="space-between"
                label="Дата народження"
                placeholder="ДД/ММ/РР"
                name="birth_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="ІПН" type="number" name="national_id" component={Input} />
            </FormColumn>
            <FormColumn />
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Місце народження" type="text" name="birth_place" component={Input} />
            </FormColumn>
            <FormColumn>
              <RadioInputGroup
                name="gender"
                label="Стать"
                items={[
                  {
                    value: 'FEMALE',
                    label: 'Жінка',
                  },
                  {
                    value: 'MALE',
                    label: 'Чоловік',
                  },
                ]}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                component={SelectInput}
                name="passport"
                placeholder="Паспорт"
                options={document.map(item => ({
                  title: item, name: item,
                }))}
              />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Серія та номер" type="text" name="documents.number" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Адреса електронної пошти" name="email" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Посада" type="text" name="birth_place" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field theme="space-between" label="Працює з:" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
            </FormColumn>
          </FormRow>
        </FormBlock>
      </Form>
    );
  }
}
