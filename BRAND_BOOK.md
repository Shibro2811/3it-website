# 3IT Brand Book

A comprehensive guide to maintaining visual consistency across all brand touchpoints.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Logo Usage](#logo-usage)
5. [Visual Elements](#visual-elements)
6. [Components](#components)
7. [Animation & Motion](#animation--motion)
8. [Photography & Imagery](#photography--imagery)
9. [Social Media Guidelines](#social-media-guidelines)
10. [Do's and Don'ts](#dos-and-donts)

---

## Brand Identity

### Design Philosophy

3IT embodies a **developer-first, tech-forward aesthetic** inspired by:
- Terminal and code editor interfaces
- macOS design conventions
- Cyberpunk and neon aesthetics
- Minimalist yet detailed approach

### Brand Attributes

| Attribute | Expression |
|-----------|------------|
| **Innovative** | Cutting-edge animations, modern UI patterns |
| **Technical** | Code-inspired elements, monospace fonts |
| **Professional** | Clean layouts, consistent spacing |
| **Dynamic** | Smooth transitions, interactive elements |
| **Trustworthy** | Dark, stable backgrounds, reliable feel |

### Tone of Voice

- **Technical but accessible** - Speak to developers without alienating others
- **Confident** - We know our craft
- **Forward-thinking** - Always looking ahead
- **Direct** - No fluff, get to the point

---

## Color System

### Primary Palette

Our dark-mode-first design uses these core colors:

#### Background Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Dark Primary** | `#0d1117` | 13, 17, 23 | Main backgrounds |
| **Dark Secondary** | `#161b22` | 22, 27, 34 | Cards, panels |
| **Dark Tertiary** | `#21262d` | 33, 38, 45 | Headers, dividers |
| **Dark Quaternary** | `#30363d` | 48, 54, 61 | Borders, subtle elements |

```css
/* CSS Variables */
--bg-primary: #0d1117;
--bg-secondary: #161b22;
--bg-tertiary: #21262d;
--bg-border: #30363d;
```

#### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Cyan** | `#58a6ff` | 88, 166, 255 | Primary accent, links, CTAs |
| **Green** | `#7ee787` | 126, 231, 135 | Success, highlights, logo |
| **Purple** | `#d2a8ff` | 210, 168, 255 | Secondary accent |
| **Orange** | `#ffa657` | 255, 166, 87 | Warnings, alternative accent |

```css
/* CSS Variables */
--accent-cyan: #58a6ff;
--accent-green: #7ee787;
--accent-purple: #d2a8ff;
--accent-orange: #ffa657;
```

#### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Primary Text** | `#c9d1d9` | Main body text |
| **Secondary Text** | `#8b949e` | Descriptions, labels |
| **Tertiary Text** | `#484f58` | Disabled, hints |

### Extended Neon Palette

For special emphasis and decorative elements:

| Name | Hex | Usage |
|------|-----|-------|
| **Neon Purple** | `#bf5af2` | Glows, highlights |
| **Neon Cyan** | `#5ce1e6` | Accents |
| **Neon Pink** | `#ff6ac1` | Special elements |
| **Neon Blue** | `#5e9eff` | Links, interactions |

### macOS Traffic Light Colors

Used in window-style UI elements:

| Color | Hex | Position |
|-------|-----|----------|
| **Red** | `#ff5f56` | Close (left) |
| **Yellow** | `#ffbd2e` | Minimize (center) |
| **Green** | `#27ca3f` | Maximize (right) |

### Color Usage Rules

1. **Always use dark backgrounds** - Never pure black or white
2. **Accent sparingly** - Use cyan/green for emphasis, not decoration
3. **Maintain contrast** - Ensure text is readable (WCAG AA minimum)
4. **Layer depths** - Use background hierarchy for visual depth

---

## Typography

### Font Families

| Font | Usage | Fallback |
|------|-------|----------|
| **Unbounded** | Headlines, brand name | system-ui, sans-serif |
| **Inter** | Body text, UI | system-ui, sans-serif |
| **JetBrains Mono** | Code, terminal | Fira Code, monospace |

```css
/* CSS Font Variables */
--font-display: 'Unbounded', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| **H1 (Hero)** | 64px / 4rem | 32px / 2rem | 700 |
| **H2 (Section)** | 48px / 3rem | 32px / 2rem | 700 |
| **H3 (Card Title)** | 20px / 1.25rem | 18px / 1.125rem | 600 |
| **Body** | 16px / 1rem | 14px / 0.875rem | 400 |
| **Small** | 14px / 0.875rem | 12px / 0.75rem | 400 |
| **Code/Terminal** | 14px / 0.875rem | 11px | 400 |

### Line Heights

| Type | Value |
|------|-------|
| Headlines | 1.2 |
| Body text | 1.625 (relaxed) |
| Code | 1.5 |

### Typography Rules

1. **Headlines use Unbounded** - Always bold (700)
2. **Body uses Inter** - Regular weight (400)
3. **Code uses JetBrains Mono** - For all technical content
4. **Never underline links** - Use color change instead
5. **Maintain hierarchy** - Clear distinction between levels

---

## Logo Usage

### Primary Logo

The 3IT logo consists of:
- **Icon**: Custom logo mark (`/images/logo-3it.png`)
- **Wordmark**: "3IT" in Unbounded font, Green (`#7ee787`)

### Logo Specifications

| Context | Icon Size | Text Size |
|---------|-----------|-----------|
| **Header** | 24-28px | 18-24px |
| **Footer** | 32px | 20px |
| **Social Media Avatar** | 128px min | N/A |
| **Favicon** | 32x32px | N/A |

### Clear Space

Maintain minimum clear space equal to the height of the "3" character around the logo.

### Logo Backgrounds

| Background | Logo Version |
|------------|--------------|
| Dark (`#0d1117` - `#21262d`) | Standard (green text) |
| Light (if ever needed) | Inverted (dark text) |
| Busy/Photo backgrounds | Add subtle container |

### Logo Don'ts

- Don't stretch or distort
- Don't change the green color
- Don't add effects (shadows, outlines)
- Don't place on low-contrast backgrounds
- Don't rotate or skew

---

## Visual Elements

### Borders & Corners

| Element | Border | Radius |
|---------|--------|--------|
| **Cards** | 1px solid `#30363d` | 8-12px |
| **Buttons** | 1px solid accent | 6-8px |
| **Inputs** | 1px solid `#30363d` | 6-8px |
| **Badges** | 1px solid accent/30% | 4px or full |
| **Avatars** | 2px solid `#30363d` | Full (circle) |

### Shadows & Glows

#### Standard Shadows
```css
/* Card hover glow */
box-shadow: 0 0 30px rgba(88, 166, 255, 0.1);

/* Neon glow (cyan) */
box-shadow:
  0 0 20px rgba(6, 182, 212, 0.5),
  0 0 40px rgba(6, 182, 212, 0.3),
  0 0 60px rgba(6, 182, 212, 0.1);

/* Inner glow */
box-shadow:
  inset 0 0 30px rgba(168, 85, 247, 0.1),
  inset 0 0 60px rgba(6, 182, 212, 0.05);
```

### Background Patterns

#### Grid Pattern (Primary)
```css
background-image:
  linear-gradient(rgba(88, 166, 255, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(88, 166, 255, 0.03) 1px, transparent 1px);
background-size: 40px 40px;
```

#### Dense Grid (Secondary)
```css
background-image:
  linear-gradient(rgba(88, 166, 255, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(88, 166, 255, 0.05) 1px, transparent 1px);
background-size: 20px 20px;
```

### Gradient Orbs

Decorative blur elements for depth:

| Color | Opacity | Blur | Typical Size |
|-------|---------|------|--------------|
| Cyan (`#58a6ff`) | 8% | 100-150px | 400-500px |
| Green (`#7ee787`) | 5-8% | 100-120px | 300-400px |
| Purple (`#d2a8ff`) | 5% | 100px | 300px |

### Dividers

```css
/* Gradient divider */
background: linear-gradient(
  to right,
  transparent,
  #30363d,
  transparent
);
height: 1px;
```

---

## Components

### Buttons

#### Primary Button
```css
background: #7ee787; /* or accent color */
color: #0d1117;
padding: 12px 32px;
border-radius: 8px;
font-weight: 600;
```

#### Secondary Button
```css
background: transparent;
border: 1px solid rgba(88, 166, 255, 0.3);
color: #58a6ff;
padding: 12px 32px;
border-radius: 8px;
```

#### Button States
| State | Change |
|-------|--------|
| Hover | Increase brightness, add glow |
| Active | Scale to 0.98 |
| Focus | 2px cyan outline, 2px offset |
| Disabled | 50% opacity |

### Cards

#### Standard Card
```css
background: #161b22;
border: 1px solid #30363d;
border-radius: 12px;
padding: 24px;
```

#### Card Hover
```css
border-color: #58a6ff; /* or accent */
box-shadow: 0 0 30px rgba(88, 166, 255, 0.1);
```

### macOS Window Style

For terminal/code displays:

```css
/* Header bar */
background: #21262d;
border-bottom: 1px solid #30363d;
padding: 12px 16px;

/* Traffic lights */
.dot { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27ca3f; }

/* Content area */
background: #0d1117;
font-family: 'JetBrains Mono', monospace;
```

### Form Inputs

```css
background: #0d1117;
border: 1px solid #30363d;
border-radius: 8px;
padding: 12px 16px;
color: #c9d1d9;

/* Focus state */
border-color: #58a6ff;
box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
```

### Badges/Tags

```css
background: rgba(88, 166, 255, 0.1);
border: 1px solid rgba(88, 166, 255, 0.3);
border-radius: 4px;
padding: 4px 12px;
font-family: monospace;
font-size: 12px;
```

---

## Animation & Motion

### Timing Functions

| Name | Value | Usage |
|------|-------|-------|
| **Default** | `ease` | General transitions |
| **Smooth** | `ease-out` | Entry animations |
| **Snappy** | `ease-in-out` | Interactive elements |

### Duration Guidelines

| Type | Duration |
|------|----------|
| **Micro-interactions** | 150-200ms |
| **UI transitions** | 200-300ms |
| **Entry animations** | 500-600ms |
| **Continuous loops** | 2-8s |

### Standard Animations

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Glow Pulse
```css
@keyframes glow {
  0% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
  100% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.6); }
}
```

#### Gradient Flow
```css
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Hover Interactions

| Element | Effect |
|---------|--------|
| **Buttons** | Brightness +10%, subtle glow |
| **Cards** | Border color change, inner glow |
| **Links** | Color shift to accent |
| **Images** | Scale 1.02-1.05 |

### Scroll Animations

- Trigger at 20% viewport visibility
- Play once per element
- Stagger children by 50-150ms

---

## Photography & Imagery

### Team Photos

| Aspect | Specification |
|--------|---------------|
| **Shape** | Circular |
| **Size** | 80-112px diameter |
| **Border** | 2px solid `#30363d` |
| **Hover** | Border changes to `#58a6ff` |
| **Style** | Professional, friendly |

### Image Treatment

- **No filters** on photos (maintain natural look)
- **Subtle border** around images
- **Dark overlay** if text needs to appear over image
- **Consistent sizing** within sections

### Icons

- **Style**: Line icons, 1.5-2px stroke
- **Color**: Match text color or accent
- **Size**: 20-24px for UI, 40-48px for feature icons

---

## Social Media Guidelines

### Profile Images

- Use logo icon only
- Minimum 128x128px
- Ensure visibility on dark AND light backgrounds (add subtle dark ring if needed)

### Post Templates

#### Background Colors
| Type | Background |
|------|------------|
| Standard | `#0d1117` |
| Highlight | `#161b22` |
| Feature | Gradient using accent colors |

#### Text Overlay
- Use **Unbounded** for headlines
- Use **Inter** for body
- Maintain contrast ratios

### Content Sizing

| Platform | Size | Safe Area |
|----------|------|-----------|
| **Instagram Post** | 1080x1080px | 100px margins |
| **Instagram Story** | 1080x1920px | 150px top/bottom |
| **Twitter/X** | 1200x675px | 80px margins |
| **LinkedIn** | 1200x627px | 80px margins |
| **OG Image** | 1200x630px | 100px margins |

### Hashtag Style

```
#3IT #WebDevelopment #TechSolutions
```

### Caption Style

- Lead with value or hook
- Technical but approachable
- Include clear CTA
- Use line breaks for readability

---

## Do's and Don'ts

### Do's

- **Use the color system consistently** - Don't invent new colors
- **Maintain dark theme** - It's core to our identity
- **Use proper typography hierarchy** - Headlines distinct from body
- **Add subtle animations** - Brings the brand to life
- **Keep layouts clean** - Generous whitespace
- **Use code/terminal aesthetics** - It's our signature

### Don'ts

- **Don't use light mode** - We're dark-first
- **Don't use bright colors on large areas** - Accents only
- **Don't overcrowd** - Respect spacing
- **Don't use generic stock photos** - Authentic imagery only
- **Don't skip hover states** - Interactivity is expected
- **Don't use Comic Sans** - (Obviously)
- **Don't stretch the logo** - Ever
- **Don't mix font families randomly** - Follow the system

---

## Quick Reference

### Copy-Paste Values

```css
/* Backgrounds */
--bg-dark: #0d1117;
--bg-card: #161b22;
--bg-header: #21262d;
--border: #30363d;

/* Accents */
--cyan: #58a6ff;
--green: #7ee787;
--purple: #d2a8ff;
--orange: #ffa657;

/* Text */
--text-primary: #c9d1d9;
--text-secondary: #8b949e;

/* Fonts */
font-family: 'Unbounded', sans-serif; /* Headlines */
font-family: 'Inter', sans-serif; /* Body */
font-family: 'JetBrains Mono', monospace; /* Code */

/* Border Radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;

/* Transitions */
transition: all 0.2s ease;
```

### Figma/Design Tool Colors

```
Primary BG: 0d1117
Card BG: 161b22
Border: 30363d
Cyan: 58a6ff
Green: 7ee787
Purple: d2a8ff
Text: c9d1d9
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | January 2025 | Initial brand book |

---

*This brand book is a living document. Update it as the brand evolves.*
