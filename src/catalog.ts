import type {
  ButtonStyle,
  CardStyle,
  ContrastProfile,
  DepthStyle,
  IntensityProfile,
  NavigationStyle,
  RadiusScale,
  SpacingScale,
  ThemeGuidance,
  ThemeGuidanceBundle,
  ThemeTokenDefault,
  TypographyPairing,
} from './types.js';

export const TYPOGRAPHY_PAIRINGS: TypographyPairing[] = [
  {
    id: 'precision-grotesk',
    name: 'Precision Grotesk',
    headingFont: 'Space Grotesk',
    bodyFont: 'Source Sans 3',
    description: 'Compact and exacting without feeling cold.',
    tags: ['technical', 'finance', 'product'],
  },
  {
    id: 'editorial-sans',
    name: 'Editorial Sans',
    headingFont: 'DM Sans',
    bodyFont: 'Source Sans 3',
    description: 'Readable, calm, and suited to content-heavy flows.',
    tags: ['minimal', 'editorial', 'docs'],
  },
  {
    id: 'humanist-warm',
    name: 'Humanist Warm',
    headingFont: 'Nunito Sans',
    bodyFont: 'Source Sans 3',
    description: 'Friendly curves with strong day-to-day readability.',
    tags: ['friendly', 'consumer', 'health'],
  },
  {
    id: 'builder-grotesk',
    name: 'Builder Grotesk',
    headingFont: 'Outfit',
    bodyFont: 'Inter',
    description: 'Product-led and energetic with a clean UI baseline.',
    tags: ['bold', 'technology', 'marketing'],
  },
  {
    id: 'editorial-serif',
    name: 'Editorial Serif',
    headingFont: 'Playfair Display',
    bodyFont: 'Inter',
    description: 'Expressive display rhythm balanced by neutral body text.',
    tags: ['elegant', 'fashion', 'luxury'],
  },
  {
    id: 'mono-sans',
    name: 'Mono Sans',
    headingFont: 'IBM Plex Sans',
    bodyFont: 'IBM Plex Mono',
    description: 'Operational, dense, and ideal for utilitarian surfaces.',
    tags: ['technical', 'ops', 'developer'],
  },
];

export const SPACING_SCALES: SpacingScale[] = [
  {
    id: 'compact',
    name: 'Compact',
    description: 'Tighter spacing for dashboards and dense workflows.',
    density: 'compact',
    baseUnitPx: 4,
    steps: [4, 8, 12, 16, 24, 32],
  },
  {
    id: 'balanced',
    name: 'Balanced',
    description: 'Default spacing for general-purpose product UI.',
    density: 'balanced',
    baseUnitPx: 8,
    steps: [8, 12, 16, 24, 32, 48],
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    description: 'More breathing room for consumer and marketing surfaces.',
    density: 'relaxed',
    baseUnitPx: 10,
    steps: [10, 16, 24, 32, 40, 56],
  },
  {
    id: 'airy',
    name: 'Airy',
    description: 'Wide gutters and larger section rhythm for editorial layouts.',
    density: 'airy',
    baseUnitPx: 12,
    steps: [12, 20, 28, 36, 48, 64],
  },
];

export const RADIUS_SCALES: RadiusScale[] = [
  {
    id: 'restrained',
    name: 'Restrained',
    description: 'Low-radius corners for precise UI.',
    values: { sm: 2, md: 6, lg: 10, xl: 14 },
  },
  {
    id: 'balanced',
    name: 'Balanced',
    description: 'Moderate radius with a broad fit across product surfaces.',
    values: { sm: 4, md: 8, lg: 12, xl: 18 },
  },
  {
    id: 'soft',
    name: 'Soft',
    description: 'Noticeably rounded forms for approachable interfaces.',
    values: { sm: 8, md: 12, lg: 18, xl: 24 },
  },
];

export const DEPTH_STYLES: DepthStyle[] = [
  {
    id: 'whisper',
    name: 'Whisper',
    description: 'Mostly flat with subtle edge separation.',
    emphasis: 'flat',
    cardShadow: '0 0 0 1px rgba(255,255,255,0.08)',
    raisedShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
    overlayShadow: '0 20px 50px rgba(15, 23, 42, 0.16)',
    outlineColor: 'rgba(148, 163, 184, 0.22)',
  },
  {
    id: 'crisp',
    name: 'Crisp',
    description: 'Defined edges with controlled elevation.',
    emphasis: 'crisp',
    cardShadow: '0 0 0 1px rgba(100, 116, 139, 0.22), 0 12px 24px rgba(15, 23, 42, 0.08)',
    raisedShadow: '0 18px 36px rgba(15, 23, 42, 0.14)',
    overlayShadow: '0 24px 64px rgba(15, 23, 42, 0.2)',
    outlineColor: 'rgba(100, 116, 139, 0.28)',
  },
  {
    id: 'layered',
    name: 'Layered',
    description: 'Visible stacking for richer previews and hero surfaces.',
    emphasis: 'layered',
    cardShadow: '0 14px 32px rgba(15, 23, 42, 0.16)',
    raisedShadow: '0 22px 52px rgba(15, 23, 42, 0.22)',
    overlayShadow: '0 36px 80px rgba(15, 23, 42, 0.28)',
    outlineColor: 'rgba(148, 163, 184, 0.18)',
  },
];

export const BUTTON_STYLES: ButtonStyle[] = [
  {
    id: 'tight-rounded',
    name: 'Tight Rounded',
    description: 'Precise corners with enough warmth for everyday actions.',
    borderRadius: '0.5rem',
    fontWeight: '600',
    paddingX: '1rem',
    paddingY: '0.625rem',
    outlined: false,
  },
  {
    id: 'pill',
    name: 'Pill',
    description: 'Friendly, high-signal CTA shape.',
    borderRadius: '9999px',
    fontWeight: '600',
    paddingX: '1.25rem',
    paddingY: '0.625rem',
    outlined: false,
  },
  {
    id: 'sharp-solid',
    name: 'Sharp Solid',
    description: 'Angular call-to-action for assertive interfaces.',
    borderRadius: '0.125rem',
    fontWeight: '700',
    paddingX: '1rem',
    paddingY: '0.625rem',
    outlined: false,
  },
  {
    id: 'outline-strong',
    name: 'Outline Strong',
    description: 'High-contrast outline treatment with minimal fill.',
    borderRadius: '0.5rem',
    fontWeight: '600',
    paddingX: '1rem',
    paddingY: '0.625rem',
    outlined: true,
  },
];

export const CARD_STYLES: CardStyle[] = [
  {
    id: 'outline-panel',
    name: 'Outline Panel',
    description: 'Low-drama container that relies on border and spacing.',
    borderRadius: '0.75rem',
    padding: '1.25rem',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    shadow: '0 0 0 1px rgba(148, 163, 184, 0.08)',
  },
  {
    id: 'data-panel',
    name: 'Data Panel',
    description: 'Crisp dashboard card with stronger definition.',
    borderRadius: '0.875rem',
    padding: '1.25rem',
    border: '1px solid rgba(100, 116, 139, 0.28)',
    shadow: '0 14px 30px rgba(15, 23, 42, 0.12)',
  },
  {
    id: 'soft-surface',
    name: 'Soft Surface',
    description: 'Rounded consumer card with gentle separation.',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    shadow: '0 18px 38px rgba(15, 23, 42, 0.1)',
  },
  {
    id: 'tinted-stack',
    name: 'Tinted Stack',
    description: 'More expressive card treatment for branded previews.',
    borderRadius: '1.125rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    shadow: '0 22px 52px rgba(15, 23, 42, 0.16)',
  },
];

export const NAVIGATION_STYLES: NavigationStyle[] = [
  {
    id: 'top-bar',
    name: 'Top Bar',
    description: 'Horizontal navigation for familiar desktop flows.',
    variant: 'top-bar',
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    description: 'Left-anchored navigation for dashboard and app shells.',
    variant: 'sidebar',
  },
  {
    id: 'tab-bar',
    name: 'Tab Bar',
    description: 'Section switching below the primary header.',
    variant: 'tab-bar',
  },
  {
    id: 'floating',
    name: 'Floating Nav',
    description: 'Detached navigation for lighter visual weight.',
    variant: 'floating',
  },
  {
    id: 'bottom-bar',
    name: 'Bottom Bar',
    description: 'Mobile-first navigation pinned to the lower edge.',
    variant: 'bottom-bar',
  },
];

export const CONTRAST_PROFILES: ContrastProfile[] = [
  {
    id: 'balanced',
    name: 'Balanced Contrast',
    description: 'Comfortable text contrast with restraint on large surfaces.',
    bodyTextContrast: 4.5,
    uiContrast: 'balanced',
  },
  {
    id: 'strong',
    name: 'Strong Contrast',
    description: 'Sharper separation for data-dense or dark experiences.',
    bodyTextContrast: 7,
    uiContrast: 'strong',
  },
];

export const INTENSITY_PROFILES: IntensityProfile[] = [
  {
    id: 'restrained',
    name: 'Restrained',
    description: 'Most surfaces stay neutral and accents are sparse.',
    chroma: 'restrained',
    accentCoverage: 'minimal',
  },
  {
    id: 'focused',
    name: 'Focused',
    description: 'Color stays concentrated in key actions and highlights.',
    chroma: 'focused',
    accentCoverage: 'moderate',
  },
  {
    id: 'vivid',
    name: 'Vivid',
    description: 'Higher color energy across interactive moments and support surfaces.',
    chroma: 'vivid',
    accentCoverage: 'high',
  },
];

export const THEME_GUIDANCES: ThemeGuidance[] = [
  {
    id: 'fintech-precision',
    name: 'Fintech Precision',
    summary: 'Tight hierarchy, compact spacing, disciplined radius, and strong contrast.',
    defaultMode: 'light',
    typographyPairingId: 'precision-grotesk',
    spacingScaleId: 'balanced',
    radiusScaleId: 'restrained',
    depthStyleId: 'crisp',
    buttonStyleId: 'tight-rounded',
    cardStyleId: 'data-panel',
    navigationStyleId: 'top-bar',
    contrastProfileId: 'strong',
    intensityProfileId: 'focused',
  },
  {
    id: 'editorial-minimal',
    name: 'Editorial Minimal',
    summary: 'Airy structure, quiet depth, and content-first typography.',
    defaultMode: 'light',
    typographyPairingId: 'editorial-sans',
    spacingScaleId: 'airy',
    radiusScaleId: 'balanced',
    depthStyleId: 'whisper',
    buttonStyleId: 'outline-strong',
    cardStyleId: 'outline-panel',
    navigationStyleId: 'top-bar',
    contrastProfileId: 'balanced',
    intensityProfileId: 'restrained',
  },
  {
    id: 'immersive-dark',
    name: 'Immersive Dark',
    summary: 'Layered elevation, deliberate contrast, and a more cinematic shell.',
    defaultMode: 'dark',
    typographyPairingId: 'editorial-serif',
    spacingScaleId: 'relaxed',
    radiusScaleId: 'balanced',
    depthStyleId: 'layered',
    buttonStyleId: 'sharp-solid',
    cardStyleId: 'tinted-stack',
    navigationStyleId: 'floating',
    contrastProfileId: 'strong',
    intensityProfileId: 'focused',
  },
  {
    id: 'ops-control',
    name: 'Ops Control',
    summary: 'Dense operational UI with mono support text, sharp buttons, and strong borders.',
    defaultMode: 'dark',
    typographyPairingId: 'mono-sans',
    spacingScaleId: 'compact',
    radiusScaleId: 'restrained',
    depthStyleId: 'crisp',
    buttonStyleId: 'sharp-solid',
    cardStyleId: 'data-panel',
    navigationStyleId: 'sidebar',
    contrastProfileId: 'strong',
    intensityProfileId: 'restrained',
  },
  {
    id: 'warm-hospitality',
    name: 'Warm Hospitality',
    summary: 'Friendly type, generous spacing, soft radius, and approachable cards.',
    defaultMode: 'light',
    typographyPairingId: 'humanist-warm',
    spacingScaleId: 'relaxed',
    radiusScaleId: 'soft',
    depthStyleId: 'layered',
    buttonStyleId: 'pill',
    cardStyleId: 'soft-surface',
    navigationStyleId: 'top-bar',
    contrastProfileId: 'balanced',
    intensityProfileId: 'focused',
  },
  {
    id: 'builder-energized',
    name: 'Builder Energized',
    summary: 'Product-led rhythm with bolder type, rounded controls, and higher intensity.',
    defaultMode: 'light',
    typographyPairingId: 'builder-grotesk',
    spacingScaleId: 'balanced',
    radiusScaleId: 'soft',
    depthStyleId: 'layered',
    buttonStyleId: 'pill',
    cardStyleId: 'tinted-stack',
    navigationStyleId: 'tab-bar',
    contrastProfileId: 'strong',
    intensityProfileId: 'vivid',
  },
  {
    id: 'monochrome-ink',
    name: 'Monochrome Ink',
    summary: 'Neutral-forward structure with strong text contrast and restrained accents.',
    defaultMode: 'light',
    typographyPairingId: 'precision-grotesk',
    spacingScaleId: 'balanced',
    radiusScaleId: 'restrained',
    depthStyleId: 'whisper',
    buttonStyleId: 'outline-strong',
    cardStyleId: 'outline-panel',
    navigationStyleId: 'top-bar',
    contrastProfileId: 'strong',
    intensityProfileId: 'restrained',
  },
  {
    id: 'neon-developer',
    name: 'Neon Developer',
    summary: 'Technical typography, compact rhythm, crisp panels, and vivid accent usage.',
    defaultMode: 'dark',
    typographyPairingId: 'mono-sans',
    spacingScaleId: 'compact',
    radiusScaleId: 'balanced',
    depthStyleId: 'layered',
    buttonStyleId: 'outline-strong',
    cardStyleId: 'data-panel',
    navigationStyleId: 'sidebar',
    contrastProfileId: 'strong',
    intensityProfileId: 'vivid',
  },
];

function byId<T extends { id: string }>(items: T[], id: string, label: string): T {
  const item = items.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`Unknown ${label} id: ${id}`);
  }
  return item;
}

export function resolveThemeGuidance(guidanceId: string): ThemeGuidanceBundle {
  const guidance = byId(THEME_GUIDANCES, guidanceId, 'theme guidance');
  return {
    guidance,
    typography: byId(TYPOGRAPHY_PAIRINGS, guidance.typographyPairingId, 'typography pairing'),
    spacing: byId(SPACING_SCALES, guidance.spacingScaleId, 'spacing scale'),
    radius: byId(RADIUS_SCALES, guidance.radiusScaleId, 'radius scale'),
    depth: byId(DEPTH_STYLES, guidance.depthStyleId, 'depth style'),
    button: byId(BUTTON_STYLES, guidance.buttonStyleId, 'button style'),
    card: byId(CARD_STYLES, guidance.cardStyleId, 'card style'),
    navigation: byId(NAVIGATION_STYLES, guidance.navigationStyleId, 'navigation style'),
    contrast: byId(CONTRAST_PROFILES, guidance.contrastProfileId, 'contrast profile'),
    intensity: byId(INTENSITY_PROFILES, guidance.intensityProfileId, 'intensity profile'),
  };
}

export function buildThemeGuidanceTokens(guidanceId: string): ThemeTokenDefault[] {
  const resolved = resolveThemeGuidance(guidanceId);
  return [
    {
      name: 'font-heading',
      value: resolved.typography.headingFont,
      description: 'Preferred heading font family',
    },
    {
      name: 'font-body',
      value: resolved.typography.bodyFont,
      description: 'Preferred body font family',
    },
    {
      name: 'spacing-base',
      value: `${resolved.spacing.baseUnitPx}px`,
      description: 'Base spacing unit',
    },
    {
      name: 'radius-sm',
      value: `${resolved.radius.values.sm}px`,
      description: 'Small radius',
    },
    {
      name: 'radius-md',
      value: `${resolved.radius.values.md}px`,
      description: 'Medium radius',
    },
    {
      name: 'radius-lg',
      value: `${resolved.radius.values.lg}px`,
      description: 'Large radius',
    },
    {
      name: 'radius-xl',
      value: `${resolved.radius.values.xl}px`,
      description: 'Extra large radius',
    },
    {
      name: 'elevation-card',
      value: resolved.depth.cardShadow,
      description: 'Card elevation',
    },
    {
      name: 'elevation-raised',
      value: resolved.depth.raisedShadow,
      description: 'Raised elevation',
    },
    {
      name: 'button-border-radius',
      value: resolved.button.borderRadius,
      description: 'Primary button radius',
    },
    {
      name: 'button-font-weight',
      value: resolved.button.fontWeight,
      description: 'Primary button font weight',
    },
    {
      name: 'button-padding-x',
      value: resolved.button.paddingX,
      description: 'Primary button horizontal padding',
    },
    {
      name: 'button-padding-y',
      value: resolved.button.paddingY,
      description: 'Primary button vertical padding',
    },
    {
      name: 'card-border-radius',
      value: resolved.card.borderRadius,
      description: 'Card radius',
    },
    {
      name: 'card-padding',
      value: resolved.card.padding,
      description: 'Card internal padding',
    },
    {
      name: 'card-shadow',
      value: resolved.card.shadow,
      description: 'Card shadow',
    },
    {
      name: 'nav-variant',
      value: resolved.navigation.variant,
      description: 'Preferred navigation pattern',
    },
    {
      name: 'contrast-body',
      value: String(resolved.contrast.bodyTextContrast),
      description: 'Preferred body text contrast target',
    },
    {
      name: 'contrast-ui',
      value: resolved.contrast.uiContrast,
      description: 'Preferred UI contrast level',
    },
    {
      name: 'color-intensity',
      value: resolved.intensity.chroma,
      description: 'Recommended color intensity',
    },
    {
      name: 'accent-coverage',
      value: resolved.intensity.accentCoverage,
      description: 'Recommended accent color coverage',
    },
  ];
}
