/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Animated,
  Easing,
} from 'react-native';

const styles = StyleSheet.create({
  textField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  icon: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  label: {
    position: 'absolute',
    left: 8,
  },
  helperText: {
    position: 'absolute',
    left: 8,
  },
});

class TextField extends Component {
  static propTypes = {
    input: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      touch: PropTypes.bool,
      error: PropTypes.string,
      dirty: PropTypes.bool,
      active: PropTypes.bool,
      invalid: PropTypes.bool,
      valid: PropTypes.bool,
    }),
    options: PropTypes.shape({
      numberOfLines: PropTypes.number,
    }),

    fieldType: PropTypes.oneOf([
      'single-line',
      'multi-line',
    ]).isRequired,

    icon: PropTypes.element,

    fieldHeight: PropTypes.number.isRequired,

    inputFontSize: PropTypes.number.isRequired,
    inputHeight: PropTypes.number.isRequired,

    labelFontSize: PropTypes.number.isRequired,
    activeLabelFontSize: PropTypes.number.isRequired,

    labelPosition: PropTypes.number.isRequired,
    activeLabelPosition: PropTypes.number.isRequired,

    labelColor: PropTypes.string.isRequired,
    activeLabelColor: PropTypes.string.isRequired,

    underlineColor: PropTypes.string.isRequired,
    activeUnderlineColor: PropTypes.string.isRequired,

    helperText: PropTypes.string,
    helperTextColor: PropTypes.string.isRequired,
    helperTextFontSize: PropTypes.number.isRequired,
    helperTextPosition: PropTypes.number.isRequired,
  };

  static defaultProps = {
    fieldType: 'single-line',

    fieldHeight: 80,

    inputFontSize: 16,
    inputHeight: 56,

    labelFontSize: 16,
    activeLabelFontSize: 12,

    labelPosition: 28,
    activeLabelPosition: 10,

    labelColor: '#939393',
    activeLabelColor: '#5DB0F1',

    underlineColor: '#DBDBDB',
    activeUnderlineColor: '#2196F3',

    helperTextFontSize: 12,
    helperTextColor: '#939393',
    helperTextPosition: 2,
  };

  constructor(props) {
    super(props);

    const {
      labelPosition,
      labelFontSize,
    } = this.props;

    this.state = {
      active: false,
      labelPosition: new Animated.Value(labelPosition),
      labelFontSize: new Animated.Value(labelFontSize),
    };
  }

  componentWillReceiveProps({
    meta,
  }) {
    if (meta.active !== this.state.active) {
      if (meta.active || meta.dirty) {
        this.animateLabelUp();
        this.decreaseLabelSize();
      } else {
        this.animateLabelDown();
        this.inscreaseLabelSize();
      }

      this.setState({
        active: meta.active,
      });
    }
  }

  animateLabelUp = () => {
    const {
      activeLabelPosition,
    } = this.props;

    Animated.timing(
      this.state.labelPosition,
      {
        toValue: activeLabelPosition,
        duration: 100,
        easing: Easing.elastic(1),
      }
    ).start();
  }

  animateLabelDown = () => {
    const {
      labelPosition,
    } = this.props;

    Animated.timing(
      this.state.labelPosition,
      {
        toValue: labelPosition,
        duration: 100,
        easing: Easing.elastic(1),
      }
    ).start();
  }

  inscreaseLabelSize = () => {
    const {
      labelFontSize,
    } = this.props;

    Animated.timing(
      this.state.labelFontSize,
      {
        toValue: labelFontSize,
        duration: 100,
      }
    ).start();
  }

  decreaseLabelSize = () => {
    const {
      activeLabelFontSize,
    } = this.props;

    Animated.timing(
      this.state.labelFontSize,
      {
        toValue: activeLabelFontSize,
        duration: 100,
      }
    ).start();
  }

  renderHelperText = () => {
    const {
      helperText,
      helperTextColor,
      helperTextFontSize,
      helperTextPosition,
    } = this.props;

    return (
      <Text
        style={[
          styles.helperText,
          helperTextColor && { color: helperTextColor },
          helperTextFontSize && { fontSize: helperTextFontSize },
          helperTextPosition && { bottom: helperTextPosition },
        ]}
      >
        {helperText.toLowerCase()}
      </Text>
    );
  }

  renderIcon = () => {
    const {
      icon,
    } = this.props;

    return (
      <View style={styles.icon}>
        {icon}
      </View>
    );
  }

  render() {
    const {
      input,
      label,
      meta,
      fieldHeight,
      inputFontSize,
      inputHeight,
      underlineColor,
      activeUnderlineColor,
      labelColor,
      activeLabelColor,
      helperText,
      icon,
      options,
      fieldType,
    } = this.props;

    const {
      active,
      labelPosition,
      labelFontSize,
    } = this.state;

    const underlineColorAndroid = active ? activeUnderlineColor : underlineColor;
    const numberOfLines = (options && options.numberOfLines) || 1;
    const computeHeight = () => {
      switch (fieldType) {
        case 'single-line':
          return fieldHeight;
        case 'multi-line':
          return (numberOfLines * inputHeight) + 24;
        default:
          return fieldHeight;
      }
    };
    const computedHeight = computeHeight();

    return (
      <View
        style={[
          styles.textField,
          fieldHeight && { height: computedHeight },
        ]}
      >
        {
          icon
          ? this.renderIcon()
          : null
        }
        <View
          style={[
            styles.inputWrapper,
            // a workaround to get 100% height to textField working
            fieldHeight && { height: computedHeight },
          ]}
        >
          <TextInput
            {...input}
            {...options}
            numberOfLines={numberOfLines}
            underlineColorAndroid={underlineColorAndroid}
            multiline={fieldType === 'multi-line'}
            style={[
              styles.input,
              inputFontSize && { fontSize: inputFontSize },
              inputHeight && { height: inputHeight * numberOfLines },
            ]}
          />
          {
            active && helperText && !meta.error
            ? this.renderHelperText()
            : null
          }
          <Animated.Text
            style={[
              styles.label,
              { color: labelColor },
              active && { color: activeLabelColor },
              {
                top: labelPosition,
                fontSize: labelFontSize,
              },
            ]}
          >
            {label}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

export default TextField;
