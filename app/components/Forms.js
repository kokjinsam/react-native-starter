import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  reduxForm,
  Field,
} from 'redux-form';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import TextField from './TextField';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 60,
  },
});

const Form = () => (
  <ScrollView style={styles.form}>
    <Field
      name="email"
      component={TextField}
      label="Email"
      helperText="Some helper text"
    />
    <Field
      name="password"
      component={TextField}
      label="Password"
    />
    <Field
      name="textarea"
      component={TextField}
      label="Textarea"
      fieldType="multi-line"
      options={{
        numberOfLines: 3,
      }}
    />
    <Field
      name="extra"
      component={TextField}
      label="Extra"
    />
    <Field
      name="extra2"
      component={TextField}
      label="Extra 2"
    />
    <Field
      name="name"
      component={TextField}
      label="Name"
      icon={<MDIcon name="call" size={24} />}
    />
    <Field
      name="mail"
      component={TextField}
      label="Mail"
      icon={<MDIcon name="mail" size={24} />}
      helperText="Some helper text"
    />
    <Field
      name="message"
      component={TextField}
      label="Message"
      icon={<MDIcon name="mail" size={24} />}
      helperText="Some helper text"
    />
    <Field
      name="note"
      component={TextField}
      label="Note"
      icon={<MDIcon name="mail" size={24} />}
      helperText="Some helper text"
    />
  </ScrollView>
);

export default reduxForm({
  form: 'form-test',
})(Form);
