import { StyleSheet, Platform, PixelRatio, Dimensions } from 'react-native';

const isIos = Platform.OS === 'ios';
const SW = Dimensions.get('window').width;

function getRealDP(designPx) {
    return PixelRatio.roundToNearestPixel(designPx / 3);
}

// 验证码输入组件样式
export default StyleSheet.create({
    container: {
        marginTop: getRealDP(50)
    },
    // textInput样式
    textInput: {
        height: isIos ? 0 : getRealDP(1),
        width: SW,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    // 验证码输入框总容器
    verifyContainer: {
        width: SW,
        height: getRealDP(150),
        marginBottom: getRealDP(116)
    },
    // 验证码带下划线输入格
    textInputItem: {
        width: getRealDP(100),
        borderBottomWidth: getRealDP(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    // 输入验证码样式
    verifyText: {
        fontSize: getRealDP(72),
        color: '#282828'
    },
    // 验证码文本框容器
    verifyTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SW,
        height: getRealDP(150),
        paddingHorizontal: getRealDP(74),
        position: 'absolute',
        left: 0,
        top: 0
    },
    // 发送验证码文本容器
    sendVerifyContainer: {
        paddingVertical: getRealDP(20),
        flexDirection: 'row',
        paddingHorizontal: getRealDP(74),
        alignItems: 'center'
    },
    verifyTipText: {
        fontSize: getRealDP(40),
        color: '#686868'
    },
    verifyPhone: {
        fontSize: getRealDP(40),
        color: '#282828'
    },
    getVerifyCode: {
        paddingHorizontal: getRealDP(25),
        height: getRealDP(86),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: getRealDP(2),
        borderRadius: getRealDP(5),
        borderColor: '#ff9814',
        marginLeft: getRealDP(42)
    },
    getVerifyText: {
        fontSize: getRealDP(40),
        color: '#ff9814'
    },
    countDown: {
        marginLeft: getRealDP(42),
        fontSize: getRealDP(42),
        color: '#ff9814'
    },
    countDownContainer: {
        height: getRealDP(86),
        justifyContent: 'center',
    }
});
