# Framer Motion Animation System

This project uses **Framer Motion** (via the `motion` package) to create seamless, scroll-triggered animations throughout the portfolio website.

## Animation Components

All animation components are located in `/src/components/animations/` and can be imported from the index:

```tsx
import { FadeContent, TextReveal, BlurText, Magnet, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations";
```

### 1. **FadeContent**
Fades in content with optional blur effect when it enters the viewport.

**Props:**
- `blur?: boolean` - Enable blur effect (default: true)
- `duration?: number` - Animation duration in seconds (default: 0.8)
- `delay?: number` - Delay before animation starts (default: 0)
- `y?: number` - Vertical offset in pixels (default: 40)
- `threshold?: number` - Intersection threshold (default: 0.2)
- `scale?: number` - Initial scale (default: 1)

**Usage:**
```tsx
<FadeContent delay={0.2} y={60}>
  <div>Your content here</div>
</FadeContent>
```

### 2. **TextReveal**
Reveals text with a smooth animation, perfect for headings.

**Props:**
- `delay?: number` - Delay before animation starts (default: 0)
- `duration?: number` - Animation duration (default: 0.8)
- `threshold?: number` - Intersection threshold (default: 0.2)

**Usage:**
```tsx
<TextReveal delay={0.2}>
  <h1>Your Heading</h1>
</TextReveal>
```

### 3. **BlurText**
Animates text word-by-word or character-by-character with blur effect.

**Props:**
- `text: string` - The text to animate
- `delay?: number` - Delay in milliseconds (default: 50)
- `animateBy?: 'words' | 'characters'` - Animation unit (default: 'words')
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
<BlurText 
  text="Your text content here"
  delay={80}
  animateBy="words"
  className="text-xl font-mono"
/>
```

### 4. **StaggerContainer & StaggerItem**
Creates staggered animations for lists and grids.

**StaggerContainer Props:**
- `staggerDelay?: number` - Delay between items (default: 0.15)
- `initialDelay?: number` - Initial delay (default: 0.1)
- `threshold?: number` - Intersection threshold (default: 0.2)

**Usage:**
```tsx
<StaggerContainer className="grid md:grid-cols-3 gap-8">
  {items.map((item, i) => (
    <StaggerItem key={i}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 5. **Magnet**
Creates a magnetic hover effect that pulls elements toward the cursor.

**Props:**
- `padding?: number` - Activation distance in pixels (default: 50)
- `magnetStrength?: number` - Strength of magnetic effect (default: 3)

**Usage:**
```tsx
<Magnet padding={80} magnetStrength={2}>
  <Button>Hover me!</Button>
</Magnet>
```

### 6. **PageTransition**
Provides smooth page transitions when navigating between routes.

**Usage:**
This is automatically applied in the Layout component, wrapping all page content.

## Implementation Pattern

### Page Structure
Each page follows this pattern:

```tsx
import { Layout } from "@/components/layout/Layout";
import { FadeContent, TextReveal, BlurText, StaggerContainer, StaggerItem, Magnet } from "@/components/animations";

const YourPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section>
        <FadeContent delay={0.1}>
          <span>Badge/Label</span>
        </FadeContent>
        
        <TextReveal delay={0.2}>
          <h1>Main Heading</h1>
        </TextReveal>
        
        <BlurText 
          text="Your description text"
          delay={80}
          animateBy="words"
        />
      </section>

      {/* Content Grid */}
      <section>
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="card">{item.content}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section>
        <TextReveal>
          <h2>Call to Action</h2>
        </TextReveal>
        
        <FadeContent delay={0.3}>
          <Magnet padding={80} magnetStrength={2}>
            <Button>Click Me</Button>
          </Magnet>
        </FadeContent>
      </section>
    </Layout>
  );
};
```

## Animation Timing Guidelines

For optimal user experience, follow these timing patterns:

1. **Hero Section:**
   - Badge/Label: `delay={0.1}`
   - Main Heading: `delay={0.2}`
   - Description: `delay={80}` (for BlurText)
   - Image/Visual: `delay={0.4}`, `y={60}`, `scale={0.95}`
   - CTA Buttons: `delay={0.6}`

2. **Content Sections:**
   - Section Header: `delay={0}` (triggers on scroll)
   - Grid Items: Use `StaggerContainer` with default delays

3. **CTA Sections:**
   - Heading: `delay={0}` (TextReveal)
   - Description: `delay={0.3}`
   - Button: `delay={0.5}`

## Performance Considerations

- All animations use `useInView` with `once: true` to trigger only on first view
- Animations use GPU-accelerated properties (opacity, transform)
- Intersection Observer threshold is set to 0.2 (20%) for early triggering
- Blur effects are removed after animation completes

## Pages with Animations

All pages now have comprehensive animations:

- ✅ **Index (Home)** - Full animations
- ✅ **About** - Full animations
- ✅ **Services** - Full animations
- ✅ **Cases** - Full animations
- ✅ **Contact** - Full animations

## Customization

To adjust animation behavior globally, modify the default values in the component files located in `/src/components/animations/`.

### Example: Changing Default Duration

In `FadeContent.tsx`:
```tsx
duration = 0.8, // Change this value
```

### Example: Adjusting Stagger Delay

In `StaggerContainer.tsx`:
```tsx
staggerDelay = 0.15, // Change this value
```

## Browser Compatibility

Framer Motion is compatible with all modern browsers. For older browsers, animations will gracefully degrade.

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Motion One Documentation](https://motion.dev/)
