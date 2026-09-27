# Website Overview

This website is an informational page about Vincent Langlois, a software engineer, presented in a more casual manner than on LinkedIn. The site's goal is to communicate who I am to users, including coworkers, recruiters, passersby, and more.

## Architecture

### Components
When a piece of UI appears in three places, extract it into a reusable component. By the third use, we should understand the component's needs and API.

If a component needs custom styling, place the component's `index.tsx` and `styles.css` files in its own folder. Otherwise, a single `<NAME>.tsx` file can be used.

### Styling
Tailwind can be used to reduce the amount of custom styling. However, once an element requires some custom styling, the component should either be 100% custom styling, or use a mix of Tailwind classes and custom styling. The custom styling should do most of the heavy lifting, with Tailwind providing support.

Custom theming uses a mobile-first approach, mirroring Tailwind.

For media queries, prefer to use CSS media queries rather than Tailwind queries when possible.

### Data
If content such as skills and projects is shared across the application, move it into the `src/data` folder. If constant values are needed for components and systems to work with each other, put them in `src/constants/index.ts`.

Data will often also require its own file in `src/types`.


## Design

The site is inspired by Frutiger Aero and similar 2000s internet aesthetics. The overall look of the site is inspired by Bliss, the default wallpaper for Windows XP. This was chosen for the following reasons:
- It creates a fun challenge to build this site. For example, instead of plain sections, Vince had to consider how each section would continue the Bliss theme, leading to the use of hill SVGs for section dividers. Since Vince has a lot of front-end experience, it is worth showcasing that through his portfolio as well.
- It helps set my portfolio apart from others. While Frutiger Aero and 2000s aesthetics are popular amongst Vince's generation and show up on their sites, Vince wants to stand out from sites that use a purely minimalist and/or tech-maximalist design. Vince wants users to walk away remembering the site either as "Vince's website" or "the site that reminded them of rolling green hills."
- Vince really does like the aesthetic, and he grew up with Windows XP with this exact background. Vince also enjoys nature.

### Content

The site is a casual way to get to know me. If a user prefers a professional tone, they can go to my LinkedIn. All content on the site represents things I'm willing to communicate and showcase to a wider audience.

#### Content Constraints
An agent must never invent or implement new experience, projects, or professional claims. An agent may suggest skills based on existing project and experience descriptions, but should not add those skills without evidence.

### Themes

The site has a set of selectable themes. This allows users to see how the rolling hills theme can change based on the color palette. There are three categories of themes:
- Nature: based on natural parts of the world, from green hills to blue oceans, all the way to space itself!
- Internet: based on online aesthetics, particularly those from 2000s to mid-2010s.
- Misc: any theme that is not based on the above.

For now, do not add new production themes without explicit direction.

### User preferences

The website should respect the user's preferences for how they want to experience the website. This includes:
- Allowing users to reduce or turn off motion or animations.
- Allowing users to reduce transparency.
- Allowing users to increase contrast.
- Allowing users to view the site within a wide range of viewports.

Additionally, all themes have a dark mode equivalent. Sometimes a different approach is needed in light mode compared to dark mode. All the above should work in both light and dark modes.

The application does not need to include a settings system to handle this. Use the user's device or browser settings where possible.

### Accessibility Validation

Any UI change should be checked across mobile and desktop viewports, light and dark modes, reduced motion, reduced transparency, and increased contrast. New interactions should remain usable with keyboard navigation and assistive technologies.

### Do Not

- Do not invent portfolio content, professional claims, projects, or experience.
- Do not replace the Frutiger Aero and Bliss-inspired visual direction with a generic minimalist layout.
- Do not add new themes, projects, or experience without explicit direction.
- Do not introduce a settings panel for preferences that can be handled by the user's device or browser.

## Contributing
If a contribution or code change matches with a GitHub issue, always include the issue keyword and number in the commit subject. Use `fix #NUMBER` for bug fixes and `closes #NUMBER` for features (for example, `fix #56`).

Vince wants to check the changes before he tells you to commit. He may also commit it himself