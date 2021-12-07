# Michael Benzinger - Take Home Test for Designory

December 7, 2021

PDF comp - [**Designory-Project.pdf**](Designory-Project.pdf)

## Planning

The first step in my process was to examine the comp to see if it presented any unique challenges. Here are a few I identified and the solutions I chose to approach them with:

### 1. Hero section's background bleeding into the Article cards section

I chose to recreate this by adding a negative `margin-top` to the Articles section. Because of this and the fact that I chose to set a static image height for the Article cards, the border will always line up with the middle of Article 1's image.

![image](https://user-images.githubusercontent.com/85148502/145110818-d8206698-84e1-47fa-835a-c8617ccd167b.png)

### 2. How and when to reflow the 3-column and 2-column layouts for mobile?

I chose to reflow both of the columned sections into a single column at responsive breakpoints. Because I used styled-components for this project, I could use variables for the breakpoint sizes and insert them into the media queries with the use of template literals. I stored my breakpoints, 768px and 920px, in `breakpoints.js` so that I could easily change them in one place and have it affect the responsiveness of the whole site.

In the image below, I show how I reflowed the Feature section using CSS Grid, `grid-template-areas`, and my template literal breakpoint.

![image](https://user-images.githubusercontent.com/85148502/145111397-b3e6976e-08b4-419d-89b0-acc39adafb07.png)

I also use a few CSS `min`, `max`, and `clamp` functions along with viewport-measurements to assist in keeping the design functional between breakpoints.

## Perfecting the Layout

![process_1](https://user-images.githubusercontent.com/85148502/145111779-55fcbb38-feb2-44cb-99cc-3f28c0612573.png)

Even before writing any code, I brought the design into GIMP to measure out all the colors, font sizes, margins, etc. This ensured I would recreate a pixel-perfect design without any guesswork. And while I measured the sizes in pixels, I converted everything to `rem`s before putting it into the code.

## Other Notes

1. I created a mobile menu by adding a `MobileLinks` component inside of `Nav.js`. I used the `useState` hook to manage whether it is open or closed, which conditionally renders the menu. In addition, I extended `Link` to create `MobileLink`, a feature of styled-components that allows for code reuse, which results in visual consistency between the standard and mobile menus.

![image](https://user-images.githubusercontent.com/85148502/145112604-a2130f79-9d73-425b-8031-e62be7d8b453.png)

2. I used `filter: contrast` to lighten the Designory logo on hover, as I believe the `color` property doesn't work on .svgs.

3. I applied a `max-width` and auto `margin` to a container in each section to keep everything centered and in a width-constrained column on larger screen sizes. This was the same width as in the PDF comp, but is stored in a CSS variable in `App.css`, and can be easily changed.

4. I stored all of the article colors and text in a file called `content.js` - `Articles.js` maps through the articles array to display the articles. I used this approach as opposed to hard coding each article to make it easy to switch to using more dynamic data/fetching from a database etc. later on.
