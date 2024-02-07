import { Color } from './color';

export type ThemeType = 'dark' | 'light';

export interface Theme {
  '--backGroundColor': Color;
  '--textColor': Color;
  '--gradientStartCold': Color;
  '--gradientEndCold': Color;
  '--gradientStartHot': Color;
  '--gradientEndHot': Color;
  '--darkBlue': Color;
  '--searchIcon': Color;
  '--rating': Color;
  '--noteBorder': Color;
  '--opacityBGImage': Color;
  '--boxShadowTB': Color;
  '--boxShadowMB': Color;
  '--cardBG': Color;
  '--cardText': Color;
  '--navListTextColor': Color;
  '--textButton': Color;
  '--breadCrumbColor': Color;
  '--toggleBackGround': Color;
  '--inputBG': Color;
  '--inputText': Color;
  '--cardShadow': Color;
  '--numGradientEnd': Color;
  '--footerBoxShadow': Color;
  '--footerText': Color;
}
