// deno-lint-ignore no-empty-interface
export interface Font {}

export interface WezTerm {
  font: (this: void, f: string) => Font;
  gui: WezTermGui;
}

export interface WezTermGui {
  get_appearance: () => WezTermGuiApperance;
}

export interface WezTermGuiApperance {
  find: (part: string) => boolean;
}
// type  WezTermGuiApperance = {
// | "Light"
// | "Dark"
// | "LightHighContrast"
// | "DarkHighContrast";

export interface WezTermConfig {
  color_scheme: string;

  warn_about_missing_glyphs: boolean;

  window_padding: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  font: Font;
  hyperlink_rules: HyperLinkRule[];
}

interface HyperLinkRule {
  regex: string;
  format: string;
}
