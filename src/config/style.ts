import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Reference Iphone 6
const ReferenceSize = {
  WIDTH: 375,
  HEIGHT: 667,
};

export const scale = (size: number) => (width / ReferenceSize.WIDTH) * size;

export const Color = {
  primaryColor: '#fff',
  backgroundColor: '#1a1a1a',
  contrastColor: '#222222',
  purpleColor: '#BB86FC',
  grayColor: '#ABABAB',
  redColor: '#ec2027',
};

export const FontSize = {
  headline: scale(45),
  title: scale(30),
  button: scale(28),
  medium: scale(20),
  small: scale(15),
};
