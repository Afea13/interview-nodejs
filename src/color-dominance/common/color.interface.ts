type RGBColor = [number, number, number];

// Define an interface for a color palette
interface ColorPalette {
  primary: RGBColor;
  secondary: RGBColor;
  background: RGBColor;
}

// Export the types and interfaces
export { RGBColor, ColorPalette };