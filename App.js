/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import VerifyCode from "./VerifyCodeInput";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        verifyCode: ''
    };
    this.onChangeVerifyCode = this.onChangeVerifyCode.bind(this);
  }

  onChangeVerifyCode(text) {

  }

  render() {
    return (
      <ScrollView style={styles.container}>
          {/* 验证码输入框 */}
        <VerifyCode
            ref={(ref) => { this.verifyCode = ref; }}
            verifyCodeLength={6}
            onChangeText={text => this.onChangeVerifyCode(text)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 200
  }
});
