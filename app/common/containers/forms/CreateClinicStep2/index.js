import React from 'react';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import { RadioInputGroup } from 'components/RadioInput';
import Input, { MaskedInput, SelectInput } from 'components/Input';
import Datepicker from 'components/Datepicker';
import Button, { ButtonsGroup } from 'components/Button';

import Form, { FormBlock, FormRow, FormColumn, FormButtons } from 'components/Form';

// import add from 'public/images/add.svg';

const country = ['ua', 'ru', 'en'];

@reduxForm({
  form: 'clinicRegistrationStep2',
})
@connect(state => ({
  values: getFormValues('clinicRegistrationStep2')(state),
}))
export default class CreateClinicStep2 extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <FormBlock title="Перелік засновників (учасників)" border>
          <FormRow>
            <FormColumn>
              <Field theme="medium" placeholder="найменування або ПІБ" type="text" name="name" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field theme="medium" placeholder="Місцезнаходження" type="text" name="place" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field theme="medium" placeholder="ідентифікаційний код або ЄДРПОУ" type="text" name="code" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        {/* <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати засновника</span>
          </a>
        </div>*/}
        <FormBlock title="Керівник підписант">
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
              <Field placeholder="По-батькові" type="text" name="second_name" component={Input} />
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
        </FormBlock>
        <FormRow>
          <FormColumn>
            <Field
              theme="medium"
              component={Input}
              name="city"
              placeholder="Місто народження"
            />
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
              theme="medium"
              component={SelectInput}
              name="passport"
              placeholder="Паспорт"
              disabled={true}
              options={country.map(item => ({
                title: item, name: item,
              }))}
            />
          </FormColumn>
          <FormColumn>
            <Field placeholder="Серія та номер" type="text" name="number" component={Input} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field theme="medium" placeholder="ІНН" type="number" name="INN" component={Input} />
          </FormColumn>
          <FormColumn>
            <Field placeholder="номер ID карти" type="text" name="cardID" component={Input} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput} />
          </FormColumn>
          <FormColumn>
            <Field theme="medium" placeholder="Адреса електронної пошти" name="email" component={Input} />
          </FormColumn>
        </FormRow>
        {
          // <div className={styles.form__plus} />
        }
        <FormButtons>
          <ButtonsGroup>
            <Button type="/clinic">Назад</Button>
            <Button type="submit">Зберегти зміни</Button>
            <Button to="/clinicStep3" theme="blue">Далі</Button>
          </ButtonsGroup>
        </FormButtons>
      </Form>
    );
  }
}

