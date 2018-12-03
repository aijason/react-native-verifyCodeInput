import React, { PureComponent } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import styles from './VerifyCode.style';

const propTypes = {
    onChangeText: PropTypes.func.isRequired, // 验证码实时变化值
    verifyCodeLength: PropTypes.number.isRequired, // 验证码数
};

const defaultProps = {
    onChangeText: () => {},
    verifyCodeLength: 6, // 默认6位
};

// 验证码组件
class VerifyCode extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            verifyCode: '', // 验证码
        };
        this.onTouchInput = this.onTouchInput.bind(this);
    }

    onTouchInput() {
        const isFocused = this.textInput.isFocused();
        if (!isFocused) {
            this.textInput.focus();
        }
    }

    renderVerifyCode(value) {
        const { verifyCodeLength } = this.props;
        const paddedValue = lodash.padEnd(value, verifyCodeLength, ' ');
        const valueArray = paddedValue.split('');
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.onTouchInput}
                style={styles.verifyTextContainer}
            >
                {valueArray.map((digit, index) => (
                    <View
                        key={index}
                        style={digit === ' ' ? styles.textInputItem : styles.textInputItemIn}
                    >
                        <Text style={styles.verifyText}>{digit}</Text>
                    </View>
                ))}
            </TouchableOpacity>
        );
    }

    render() {
        const { verifyCode } = this.state;
        const { onChangeText, verifyCodeLength } = this.props;
        return (
            <View style={styles.verifyContainer}>
                {this.renderVerifyCode(verifyCode)}
                <TextInput
                    ref={(ref) => { this.textInput = ref; }}
                    underlineColorAndroid="transparent"
                    caretHidden
                    style={styles.textInput}
                    autoFocus={true}
                    keyboardType={'numeric'}
                    maxLength={verifyCodeLength}
                    onChangeText={(text) => {
                        const reg = /^[0-9]*$/;
                        if (reg.test(text)) {
                            this.setState({ verifyCode: text });
                            onChangeText(text);
                        }
                    }}
                    value={verifyCode}
                />
            </View>
        );
    }
}

VerifyCode.propTypes = propTypes;
VerifyCode.defaultProps = defaultProps;

export default VerifyCode;
