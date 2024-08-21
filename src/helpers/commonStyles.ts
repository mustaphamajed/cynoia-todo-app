import {Platform, StyleSheet} from 'react-native';
import { Colors } from './colors';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  alignText: {
    textAlign: 'center',
  },
  overflowHidden: {
    overflow: 'hidden',
  },

  //background color
  bgTransparent: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  bgLightGray: {
    backgroundColor: Colors.lightGray,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgDarkGray98: {
    backgroundColor: Colors.darkGray98,
  },
  bgDark: {
    backgroundColor: Colors.dark,
  },
  bgArcticLime: {
    backgroundColor: Colors.arcticLime,
  },
  bggrayFA: {
    backgroundColor: Colors.grayFA,
  },
  bggray62: {
    backgroundColor: Colors.gray62,
  },
  bgLightRed: {
    backgroundColor: Colors.lightRed,
  },
  bgNavyBlue: {
    backgroundColor: Colors.navyBlue,
  },
  
  //lineHeigh
  lineHeight12: {
    lineHeight: 12,
  },
  lineHeight14: {
    lineHeight: 14,
  },
  lineHeight16: {
    lineHeight: 16,
  },
  lineHeight18: {
    lineHeight: 18,
  },
  lineHeight20: {
    lineHeight: 20,
  },
  lineHeight24: {
    lineHeight: 24,
  },
  lineHeight28: {
    lineHeight: 28,
  },
  lineHeight30: {
    lineHeight: 30,
  },
  lineHeight40: {
    lineHeight: 40,
  },
  darText: {
    color: Colors.darkText,
  },
  grayText: {
    color: Colors.grayText,
  },
  //border radius
  br5: {
    borderRadius: 5,
  },
  br8: {
    borderRadius: 8,
  },
  br10: {
    borderRadius: 10,
  },
  br15: {
    borderRadius: 15,
  },
  br20: {
    borderRadius: 20,
  },
  br30: {
    borderRadius: 30,
  },
  br50: {
    borderRadius: 50,
  },
  //margin
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  ml30: {
    marginLeft: 30,
  },
  ml40: {
    marginLeft: 40,
  },
  ml50: {
    marginLeft: 50,
  },

  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },
  mr30: {
    marginRight: 30,
  },
  mr40: {
    marginRight: 40,
  },
  mr50: {
    marginRight: 50,
  },

  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  mb50: {
    marginBottom: 50,
  },

  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mt50: {
    marginTop: 50,
  },
  mx10: {
    marginHorizontal: 10,
  },
  mx5: {
    marginHorizontal: 5,
  },
  mx20: {
    marginHorizontal: 20,
  },
  mx30: {
    marginHorizontal: 30,
  },
  mx40: {
    marginHorizontal: 40,
  },
  mx50: {
    marginHorizontal: 50,
  },
  my5: {
    marginVertical: 5,
  },
  my10: {
    marginVertical: 10,
  },
  my20: {
    marginVertical: 20,
  },
  my30: {
    marginVertical: 30,
  },
  my40: {
    marginVertical: 40,
  },
  my50: {
    marginVertical: 50,
  },
  //padding
  pl10: {
    paddingLeft: 10,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl30: {
    paddingLeft: 30,
  },
  pl40: {
    paddingLeft: 40,
  },
  pl50: {
    paddingLeft: 50,
  },

  pr10: {
    paddingRight: 10,
  },
  pr20: {
    paddingRight: 20,
  },
  pr30: {
    paddingRight: 30,
  },
  pr40: {
    paddingRight: 40,
  },
  pr50: {
    paddingRight: 50,
  },

  pb10: {
    paddingBottom: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb30: {
    paddingBottom: 30,
  },
  pb40: {
    paddingBottom: 40,
  },
  pb50: {
    paddingBottom: 50,
  },

  px10: {
    paddingHorizontal: 10,
  },
  px20: {
    paddingHorizontal: 20,
  },
  px30: {
    paddingHorizontal: 30,
  },
  px40: {
    paddingHorizontal: 40,
  },
  px50: {
    paddingHorizontal: 50,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  pt30: {
    paddingTop: 30,
  },
  pt40: {
    paddingTop: 40,
  },
  pt50: {
    paddingTop: 50,
  },
  pt60: {
    paddingTop: 60,
  },
  pt70: {
    paddingTop: 70,
  },
  py5: {
    paddingVertical: 5,
  },
  py10: {
    paddingVertical: 10,
  },
  py20: {
    paddingVertical: 20,
  },
  py30: {
    paddingVertical: 30,
  },
  py40: {
    paddingVertical: 40,
  },
  py50: {
    paddingVertical: 50,
  },
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p15: {
    padding: 10,
  },
  p20: {
    padding: 20,
  },
  p30: {
    padding: 30,
  },
  p40: {
    padding: 40,
  },
  p50: {
    padding: 50,
  },

  //fontSize
  fs8: {
    fontSize: 8,
  },
  fs10: {
    fontSize: 10,
  },
  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fs17: {
    fontSize: 17,
  },
  fs18: {
    fontSize: 18,
  },
  fs20: {
    fontSize: 20,
  },
  fs24: {
    fontSize: 24,
  },
  fs26: {
    fontSize: 26,
  },
  fs32: {
    fontSize: 32,
  },

  //font family
  bold: {
    fontFamily: 'Urbanist-Bold',
  },
  extraBold: {
    fontFamily: 'Urbanist-ExtraBold',
  },
  semiBold: {
    fontFamily: 'Urbanist-SemiBold',
  },
  medium: {
    fontFamily: 'Urbanist-Medium',
  },
  regular: {
    fontFamily: 'Urbanist-Regular',
  },

  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontWeightNormal: {
    fontWeight: 'normal',
  },

  // font weight
  fw100: {
    fontWeight: '100',
  },
  fw200: {
    fontWeight: '200',
  },
  fw300: {
    fontWeight: '300',
  },
  fw400: {
    fontWeight: '400',
  },
  fw500: {
    fontWeight: '500',
  },
  fw600: {
    fontWeight: '600',
  },
  fw700: {
    fontWeight: '700',
  },
  fw800: {
    fontWeight: '800',
  },

  //text align
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },

  //text decoration
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },

  //text transform
  textUppercase: {
    textTransform: 'uppercase',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textLowercase: {
    textTransform: 'lowercase',
  },

  //text color
  textWhite: {
    color: Colors.white,
  },
  textBlack: {
    color: Colors.black,
  },
  textGrayEE: {
    color: Colors.grayEE,
  },
  textGrayText: {
    color: Colors.grayText,
  },
  textDarkText: {
    color: Colors.darkText,
  },
  textGray62: {
    color: Colors.gray62,
  },
  textDark: {
    color: Colors.dark,
  },
  textLightGray: {
    color: Colors.lightGray,
  },
  textLightRed: {
    color: Colors.lightRed,
  },
  textRed: {
    color: Colors.red,
  },
  // borderColor
  borderGrayEE: {
    borderColor: Colors.grayEE,
  },
  borderGrayEO: {
    borderColor: Colors.grayEO,
  },
  borderGray42: {
    borderColor: Colors.gray42,
  },
  borderGray62: {
    borderColor: Colors.gray62,
  },
  borderArcticLime: {
    borderColor: Colors.arcticLime,
  },
  borderDark: {
    borderColor: Colors.dark,
  },
  borderWhite: {
    borderColor: Colors.white,
  },
  borderRed: {
    borderColor: Colors.red,
    borderWidth: 1,
  },

  // border width
  borderW1: {
    borderWidth: 1,
  },
  borderW2: {
    borderWidth: 2,
  },
  borderW3: {
    borderWidth: 3,
  },
  borderW4: {
    borderWidth: 4,
  },

  btWidth1: {
    borderTopWidth: 1,
  },
  bbWidth1: {
    borderBottomWidth: 1,
  },
  blWidth1: {
    borderLeftWidth: 1,
  },
  brWidth1: {
    borderRightWidth: 1,
  },
  //width
  w5: {
    width: '5%',
  },
  w10: {
    width: '10%',
  },
  w15: {
    width: '15%',
  },
  w20: {
    width: '20%',
  },
  w30: {
    width: '30%',
  },
  w40: {
    width: '40%',
  },
  w45: {
    width: '45%',
  },
  w46: {
    width: '47%',
  },
  w47: {
    width: '47%',
  },
  w48: {
    width: '48%',
  },
  w49: {
    width: '49%',
  },
  w50: {
    width: '50%',
  },
  w60: {
    width: '60%',
  },
  w70: {
    width: '70%',
  },
  w80: {
    width: '80%',
  },
  w90: {
    width: '90%',
  },
  w95: {
    width: '95%',
  },
  w100: {
    width: '100%',
  },
  //height
  h10: {
    height: '10%',
  },
  h20: {
    height: '20%',
  },
  h30: {
    height: '30%',
  },
  h40: {
    height: '40%',
  },
  h50: {
    height: '50%',
  },
  h60: {
    height: '60%',
  },
  h70: {
    height: '70%',
  },
  h80: {
    height: '80%',
  },
  h90: {
    height: '90%',
  },
  h95: {
    height: '95%',
  },
  h100: {
    height: '100%',
  },
  hr: {
    borderBottomColor: Colors.grayEE,
    borderBottomWidth: 1,
  },
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  positionAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  
});
