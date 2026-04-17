export interface TypographyPairing {
  id: string;
  name: string;
  headingFont: string;
  bodyFont: string;
  description: string;
  tags: string[];
}

export interface SpacingScale {
  id: string;
  name: string;
  description: string;
  density: 'compact' | 'balanced' | 'relaxed' | 'airy';
  baseUnitPx: number;
  steps: number[];
}

export interface RadiusScale {
  id: string;
  name: string;
  description: string;
  values: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export interface DepthStyle {
  id: string;
  name: string;
  description: string;
  emphasis: 'flat' | 'crisp' | 'layered' | 'dramatic';
  cardShadow: string;
  raisedShadow: string;
  overlayShadow: string;
  outlineColor: string;
}

export interface ButtonStyle {
  id: string;
  name: string;
  description: string;
  borderRadius: string;
  fontWeight: string;
  paddingX: string;
  paddingY: string;
  outlined: boolean;
}

export interface CardStyle {
  id: string;
  name: string;
  description: string;
  borderRadius: string;
  padding: string;
  border: string;
  shadow: string;
}

export type NavigationVariant =
  | 'top-bar'
  | 'sidebar'
  | 'tab-bar'
  | 'floating'
  | 'bottom-bar';

export interface NavigationStyle {
  id: string;
  name: string;
  description: string;
  variant: NavigationVariant;
}

export interface ContrastProfile {
  id: string;
  name: string;
  description: string;
  bodyTextContrast: number;
  uiContrast: 'soft' | 'balanced' | 'strong';
}

export interface IntensityProfile {
  id: string;
  name: string;
  description: string;
  chroma: 'restrained' | 'focused' | 'vivid';
  accentCoverage: 'minimal' | 'moderate' | 'high';
}

export interface ThemeGuidance {
  id: string;
  name: string;
  summary: string;
  defaultMode: 'light' | 'dark';
  typographyPairingId: string;
  spacingScaleId: string;
  radiusScaleId: string;
  depthStyleId: string;
  buttonStyleId: string;
  cardStyleId: string;
  navigationStyleId: string;
  contrastProfileId: string;
  intensityProfileId: string;
}

export interface ThemeGuidanceBundle {
  guidance: ThemeGuidance;
  typography: TypographyPairing;
  spacing: SpacingScale;
  radius: RadiusScale;
  depth: DepthStyle;
  button: ButtonStyle;
  card: CardStyle;
  navigation: NavigationStyle;
  contrast: ContrastProfile;
  intensity: IntensityProfile;
}

export interface ThemeTokenDefault {
  name: string;
  value: string;
  description?: string;
}
