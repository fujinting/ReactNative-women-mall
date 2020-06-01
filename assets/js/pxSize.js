import {Dimensions} from 'react-native';

// 58 app只有竖屏模式，所以可以只获取一次width
const deviceWidthDp = Dimensions.get('window').width;
// UI默认给图是750
const uiWidthPx = 750;

function pxSize(uiElementPx) {

    return uiElementPx * deviceWidthDp / uiWidthPx;

}

export default pxSize;