# AGENTS.md

# Travel Time Atlas
**Explore History Through Travel**

## 1. Project Overview

### 1.1 Project Description

Travel Time Atlas is a historical travel knowledge platform that helps travelers understand the history behind historical places and important figures.

The platform connects historical knowledge with real-world travel experiences. Instead of providing only general travel information, it explains how historical events, people, and places are connected and how the past shaped the present.

The platform supports two main content types:

- **Historical Places**: Historical buildings, monuments, landmarks, archaeological sites, and other historically significant locations.
- **Historical Figures**: People whose lives, decisions, and contributions influenced historical events or places.

### 1.2 Core Concept

The platform provides two different ways to explore the same historical subject.

**The Story — Reading Mode**

Designed for travelers who want to understand a subject before visiting.

- Present historical information through chronological storytelling.
- Explain historical background, important events, consequences, and long-term significance.
- Use timelines to help readers understand historical development.
- Organize events into meaningful historical chapters rather than displaying disconnected dates.

**The Highlights — Quick Exploration Mode**

Designed for travelers who are visiting a place or exploring a subject on the go.

- Present essential information in a concise and accessible format.
- Highlight what a place or person is best known for.
- Help users recognize important features and understand why they matter.
- Do not display a historical timeline in this mode.

### 1.3 Core Design Principle

**One historical record, two different experiences.**

Both modes must use the same underlying historical record.

Reading Mode uses detailed historical storytelling and timeline information.

Quick Exploration Mode uses curated highlights and essential information.

Do not create two independent datasets for the same subject. Historical facts must remain consistent across both modes.

### 1.4 Project Goals

1. Provide accurate and understandable historical information.
2. Present history through meaningful chronological storytelling.
3. Support both pre-trip learning and on-site exploration.
4. Use reusable components and consistent data structures.
5. Allow new historical places and figures to be added without redesigning existing pages.
6. Maintain a responsive interface suitable for desktop and mobile devices.
7. Produce a website that can be uploaded directly through the GitHub website interface and deployed using GitHub Pages.

---

## 2. Technology and Output Requirements

### 2.1 Required Technology Stack

Use only:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

Do not use:

- React
- Vue
- Angular
- Vite
- Node.js
- npm
- Build tools or bundlers
- Backend services
- Database systems

The website must work as a static website without installing software or running a local development server.

### 2.2 GitHub Pages Compatibility

The final project must be directly deployable through GitHub Pages using the following settings:

- Branch: `main`
- Folder: `/(root)`

The main entry point must be named exactly:

`index.html`

The `index.html` file must be located directly in the project root.

Do not place `index.html` inside another folder such as `src/`, `dist/`, or `public/`.

### 2.3 Required Output Structure

The final project must follow this structure:

```text
travel-time-atlas/
├── index.html
├── AGENTS.md
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── data/
    │   │   ├── places.js
    │   │   ├── figures.js
    │   │   └── events.js
    │   ├── components/
    │   │   ├── timeline.js
    │   │   ├── cards.js
    │   │   └── views.js
    │   └── app.js
    └── images/
        ├── places/
        └── figures/
```

This structure may be simplified when the project is small.

For example, if separate JavaScript modules are unnecessary, the AI may place the JavaScript directly inside `index.html`.

However, the following requirements are mandatory:

1. `index.html` must exist in the project root.
2. All external CSS, JavaScript, and image files must be stored inside `assets/`.
3. All file paths must work after deployment to a GitHub Pages project URL.
4. Do not require a build or compilation step.
5. Do not generate a nested project folder that users must manually reorganize.

### 2.4 File Naming Rules

Use English filenames containing:

- Lowercase letters
- Numbers
- Hyphens or underscores

Examples:

- `index.html`
- `style.css`
- `places.js`
- `colosseum.jpg`

Avoid:

- Chinese filenames
- Spaces in filenames
- Inconsistent capitalization
- Special characters

GitHub Pages is case-sensitive. File references must match the actual filenames exactly.

---

## 3. Architecture and Code Organization

### 3.1 HTML

`index.html` is the main entry point.

Responsibilities:

- Define the page structure.
- Load CSS files.
- Load JavaScript files.
- Provide the root containers for website content.
- Support navigation and page rendering.

All website functionality must be accessible through this entry point.

### 3.2 CSS

`assets/css/style.css`

Responsibilities:

- Define global styles.
- Control typography, colors, spacing, and layouts.
- Style reusable components.
- Support responsive desktop and mobile layouts.
- Provide consistent visual styles across the website.

### 3.3 JavaScript Data

Store historical content separately from interface logic.

Recommended files:

- `places.js`: historical place records.
- `figures.js`: historical figure records.
- `events.js`: historical event records.

Use JavaScript modules when appropriate.

For example:

```js
export const places = [
  {
    id: "colosseum",
    type: "place",
    name: {
      en: "Colosseum",
      local: "Colosseo"
    }
  }
];
```

If using JavaScript modules, load them through `index.html` using:

```html
<script type="module" src="./assets/js/app.js"></script>
```

Use relative paths for all local resources.

Do not use root-relative paths such as `/assets/js/app.js`, because GitHub Pages project websites are hosted under a repository-specific path.

### 3.4 JavaScript Components and Logic

Separate reusable interface logic from historical content.

Recommended responsibilities:

- `timeline.js`: timeline rendering and chronological sorting.
- `cards.js`: reusable place and figure cards.
- `views.js`: Reading Mode and Quick Exploration Mode rendering.
- `app.js`: application initialization, navigation, and event handling.

These files are recommendations. Do not create unnecessary files just to follow the folder structure.

### 3.5 Reusability

The website must use reusable JavaScript functions to render different historical subjects.

Do not hardcode an entirely separate HTML page for every historical place or figure.

For example:

- One place detail template should support multiple historical places.
- One figure detail template should support multiple historical figures.
- One timeline rendering function should support different historical subjects.
- One mode-switching mechanism should work across all detail pages.

Adding new content should primarily require adding structured data, not rewriting the website.

---

## 4. Data Schema

All historical content must follow a consistent data structure.

The platform has three main data entities:

1. Historical Places
2. Historical Figures
3. Historical Events

### 4.1 Historical Place Schema

Each historical place must be stored as one structured record.

Example:

```js
{
  id: "colosseum",
  type: "place",

  name: {
    en: "Colosseum",
    local: "Colosseo"
  },

  country: "Italy",
  city: "Rome",

  summary: "A famous amphitheatre of Ancient Rome.",

  image: "./assets/images/places/colosseum.jpg",

  // Reading Mode
  story: [
    {
      id: "origin",
      heading: "The Origin",

      content: "Historical background and the events that led to the creation of the Colosseum.",

      timelineEventIds: [
        "rome-great-fire",
        "colosseum-construction"
      ]
    },

    {
      id: "development",
      heading: "The Development of the Colosseum",

      content: "The construction, opening, and development of the amphitheatre.",

      timelineEventIds: [
        "colosseum-opening",
        "hypogeum-development"
      ]
    },

    {
      id: "transformation",
      heading: "From Ancient Arena to Historical Landmark",

      content: "How the building's function and condition changed over time.",

      timelineEventIds: [
        "gladiatorial-games-end",
        "colosseum-medieval-use"
      ]
    }
  ],

  // Quick Exploration Mode
  highlights: {
    introduction: "A brief introduction to the place.",

    famousFor: {
      title: "Gladiatorial Games",
      description: "What makes this place widely recognized."
    },

    mustSee: [
      {
        id: "exterior-arches",
        title: "Exterior Arches",
        description: "What visitors can observe and why it is significant.",
        image: "./assets/images/places/colosseum-arches.jpg"
      }
    ],

    didYouKnow: "An interesting and historically supported fact.",

    takeaway: "One memorable sentence that summarizes the place."
  },

  timelineEventIds: [
    "rome-great-fire",
    "colosseum-construction",
    "colosseum-opening",
    "hypogeum-development",
    "gladiatorial-games-end",
    "colosseum-medieval-use"
  ],

  relatedFigureIds: [
    "vespasian",
    "titus",
    "domitian"
  ],

  sources: []
}
```

### Historical Place Data Rules

- Every place must have a unique `id`.
- `type` must be `"place"`.
- `name.en` must contain the English name.
- `name.local` should contain the local name when available.
- `country` and `city` should identify the location.
- `summary` must provide a concise introduction.
- `story` contains detailed historical chapters.
- `highlights` contains concise exploration information.
- `timelineEventIds` references events stored in the shared events dataset.
- `relatedFigureIds` references related historical figures.
- `sources` records references used to verify historical information.

Do not duplicate full timeline event content inside a place record.

### 4.2 Historical Figure Schema

Historical figures use a separate structure because biographies require different information from historical places.

Example:

```js
{
  id: "vespasian",
  type: "figure",

  name: {
    en: "Vespasian",
    local: "Vespasian"
  },

  birthYear: 9,
  deathYear: 79,

  nationality: "Roman",
  role: "Roman Emperor",

  image: "./assets/images/figures/vespasian.jpg",

  summary: "The founder of the Flavian dynasty and initiator of the Colosseum's construction.",

  // Reading Mode
  story: [
    {
      id: "early-life",
      heading: "Early Life and Political Career",
      content: "Background information about the figure's early life and rise to power.",
      timelineEventIds: []
    },

    {
      id: "reign",
      heading: "Becoming Emperor",
      content: "Important decisions and events during the person's rule.",
      timelineEventIds: []
    },

    {
      id: "legacy",
      heading: "Historical Legacy",
      content: "The person's long-term influence on history.",
      timelineEventIds: []
    }
  ],

  // Quick Exploration Mode
  highlights: {
    introduction: "Who this person was.",

    famousFor: {
      title: "Founder of the Flavian Dynasty",
      description: "The person's most recognized historical contribution."
    },

    achievements: [
      {
        title: "Construction of the Colosseum",
        description: "A brief explanation of the achievement."
      }
    ],

    didYouKnow: "An interesting and historically supported fact.",

    takeaway: "One memorable sentence about the person's historical significance."
  },

  timelineEventIds: [],

  relatedPlaceIds: [
    "colosseum"
  ],

  sources: []
}
```

### Historical Figure Data Rules

- Every figure must have a unique `id`.
- `type` must be `"figure"`.
- Use `story` for chronological biography and historical context.
- Use `highlights` for concise biographical information.
- Use `timelineEventIds` to reference shared historical events.
- Use `relatedPlaceIds` to connect figures with relevant historical places.
- Do not force place-specific fields into figure records.
- If birth or death dates are uncertain, represent the uncertainty rather than inventing an exact date.

### 4.3 Historical Event Schema

Historical events are stored separately and referenced by places and figures.

Example:

```js
{
  id: "colosseum-construction",

  date: {
    year: 72,
    era: "AD",
    precision: "approximate",
    display: "Around AD 72"
  },

  title: "Construction Begins",

  context: "The Flavian dynasty sought to establish a new public space in Rome.",

  event: "Emperor Vespasian initiated the construction of the amphitheatre.",

  outcome: "The former site of Nero's private complex was transformed into a public monument.",

  significance: "The project symbolized a shift from imperial private space to public entertainment.",

  sources: []
}
```

### Historical Event Field Definitions

| Field | Purpose |
|---|---|
| `id` | Unique event identifier |
| `date` | Historical date information |
| `title` | Short event title |
| `context` | Historical background before the event |
| `event` | What actually happened |
| `outcome` | Immediate consequences |
| `significance` | Historical importance and long-term influence |
| `sources` | References supporting the event |

### Date Rules

The `date` object must support:

- `year`: a positive integer.
- `era`: `"BC"` or `"AD"`.
- `precision`: `"year"`, `"approximate"`, `"decade"`, or `"century"`.
- `display`: a human-readable date label.

Examples:

```js
{
  year: 64,
  era: "AD",
  precision: "year",
  display: "AD 64"
}
```

```js
{
  year: 72,
  era: "AD",
  precision: "approximate",
  display: "Around AD 72"
}
```

Do not sort events using the `display` string.

Historical sorting must follow chronological order:

1. BC events come before AD events.
2. Within BC, larger year values come earlier.
3. Within AD, smaller year values come earlier.

Example:

```text
500 BC
100 BC
1 BC
AD 1
AD 50
AD 100
```

If dates are uncertain, do not imply a more precise chronological relationship than the historical evidence supports.

---

## 5. Content and Presentation Rules

### 5.1 Reading Mode — The Story

Purpose: Help users understand how a historical place or person's life developed over time.

Reading Mode must:

- Present history through connected storytelling.
- Organize content into meaningful chronological chapters.
- Explain the background leading to important events.
- Describe what happened during each event.
- Explain immediate consequences and long-term influence.
- Connect historical events to the development of a place or a person's legacy.
- Use timelines to reinforce the historical narrative.

Avoid presenting a list of dates without explaining why the events matter.

#### Historical Place Story Structure

A historical place's story should generally follow:

1. Historical background
2. Origin or construction
3. Important developments and major events
4. Changes in function or historical role
5. Long-term influence and present-day significance

#### Historical Figure Story Structure

A historical figure's story should generally follow:

1. Early life and background
2. Rise to influence or power
3. Important decisions and historical events
4. Major achievements or controversies
5. Death, legacy, and historical influence

These are guidelines, not mandatory chapter titles.

The actual structure should reflect the subject's historical development.

#### Timeline Requirements

- Display events in chronological order.
- Each event should have a clear title and date.
- Show context, event, outcome, and significance when reliable information is available.
- Help users understand the relationships between events.
- Avoid unnecessary repetition between story chapters and timeline cards.
- Distinguish established facts from approximate dates and historical debates.

### 5.2 Quick Exploration Mode — The Highlights

Purpose: Help users quickly understand the most important features of a historical subject while exploring it.

Quick Exploration Mode is not a shortened version of Reading Mode.

It is a different content experience designed around recognition, observation, and memorable facts.

#### Historical Places

Every place's Quick Exploration Mode must include:

**1. Introduction**

A short explanation of what the place is and why it matters.

**2. Famous For**

Explain what the place is most widely known for.

**3. Must-See Highlights**

Show important areas, structures, objects, or visual features that visitors should pay attention to.

Each highlight should explain:

- What the visitor is looking at.
- What makes it distinctive.
- Why it is historically or architecturally important.

Use images when available.

Only include features supported by reliable information.

Do not claim that a visitor can enter a restricted area or access a specific facility without verifying current visitor information.

**4. Did You Know**

Provide an interesting, memorable, and historically supported fact.

**5. Takeaway**

End with one memorable sentence that helps users understand the essence of the place.

#### Historical Figures

Every figure's Quick Exploration Mode must include:

**1. Introduction**

A brief explanation of who the person was.

**2. Famous For**

Explain the person's most recognized historical contribution or role.

**3. Major Achievements**

Present important achievements or contributions in concise sections.

**4. Did You Know**

Provide an interesting and historically supported fact.

**5. Historical Legacy**

Summarize why the person remains historically significant.

#### Quick Exploration Experience

- Do not display a historical timeline.
- Prioritize concise and scannable content.
- Use clear section headings.
- Highlight recognizable features and important facts.
- Use images to help users identify important visual elements.
- Optimize the layout for mobile devices.
- Avoid long paragraphs and unnecessary historical background.
- Do not repeat the full historical narrative from Reading Mode.

### 5.3 Mode Switching

Provide a clear way for users to switch between:

- The Story
- The Highlights

Rules:

- Both modes must use the same underlying place or figure record.
- Switching modes must not create a new data record.
- Each mode must display its own content structure.
- Quick Exploration Mode must never render the timeline.
- The selected mode should be visually distinguishable.
- Switching modes should preserve the current subject.

---

## 6. Reusable Interface and JavaScript Rules

### 6.1 Timeline Rendering

The timeline rendering function must:

- Receive historical event data.
- Display events in chronological order.
- Present historical dates and event titles.
- Render event details consistently.
- Support BC and AD sorting.
- Handle missing or incomplete information gracefully.

The timeline must not contain hardcoded historical content.

### 6.2 Timeline Event Rendering

Each event should display:

- Date
- Title
- Context
- Event
- Outcome
- Significance

Only display fields that contain available information.

### 6.3 Reading View

Responsibilities:

- Display the subject's historical story chapters.
- Render the associated timeline.
- Present long-form content in a readable layout.
- Support both place and figure content where appropriate.

### 6.4 Quick View

Responsibilities:

- Display concise exploration information.
- Render content based on the subject type.
- Use place-specific highlights for historical places.
- Use figure-specific highlights for historical figures.

Important:

- Quick View must not render the Timeline.
- Do not automatically generate a timeline from story data.
- Do not simply truncate Reading Mode content and treat it as Quick Mode content.

### 6.5 Cards

Place and figure cards should:

- Display an image when available.
- Display the subject's name.
- Display location or role.
- Display a short summary.
- Link to the corresponding detail view.

Use reusable rendering functions instead of writing separate card markup for each subject.

### 6.6 Page Navigation

The website should provide:

**Home**

- Introduce the platform.
- Display featured historical places and figures.
- Provide navigation to browse available content.

**Place Detail**

- Display the selected historical place.
- Support switching between Reading Mode and Quick Exploration Mode.
- Connect related historical figures when available.

**Figure Detail**

- Display the selected historical figure.
- Support switching between Reading Mode and Quick Exploration Mode.
- Connect related historical places when available.

These views may be rendered dynamically inside `index.html`. Separate physical HTML files are not required.

### 6.7 Navigation and URL Compatibility

The website must work under a GitHub Pages project URL.

For example:

`https://username.github.io/travel-time-atlas/`

Do not assume the website is hosted at the domain root.

Use relative paths for local resources.

If using URL parameters or hash-based navigation, ensure refreshing or opening a copied link does not cause a 404 error.

---

## 7. Historical Content Guidelines

Historical accuracy is essential.

### 7.1 Research and Sources

When creating or updating historical content:

- Prefer reliable sources such as museums, archaeological parks, government institutions, universities, academic publications, and established historical organizations.
- Use official sources when available.
- Cross-check important dates and claims.
- Record source URLs in the corresponding `sources` array.
- Do not invent historical events, dates, quotations, or relationships.
- Do not present uncertain interpretations as established facts.

### 7.2 Historical Context

Explain relevant context whenever it helps users understand:

- Why an event happened.
- Who was involved.
- What changed as a result.
- How the event influenced later developments.

Historical events should not be presented as isolated facts.

### 7.3 Causality and Interpretation

Do not invent causal relationships.

Distinguish between:

- Confirmed historical facts
- Widely accepted historical interpretations
- Approximate dates
- Disputed historical interpretations

### 7.4 Writing Style

If not specified, present the website in Traditional Chinese.

The writing should be:

- Informative but accessible.
- Historically accurate.
- Concise where appropriate.
- Detailed enough to explain important historical developments.
- Free from unnecessary academic jargon.

Do not oversimplify complex historical events to the point of becoming misleading.

### 7.5 Images

- Use images relevant to the subject.
- Store local image assets inside `assets/images/`.
- Use descriptive English filenames.
- Provide meaningful alternative text.
- Do not use unrelated or misleading images.
- Respect image licenses and attribution requirements.
- Handle missing images gracefully.

---

## 8. Data Consistency and Validation

### 8.1 Data Integrity

- Every record must have a unique ID.
- Every referenced event ID must exist.
- Every related figure ID must exist.
- Every related place ID must exist.
- Avoid duplicate historical events.
- Avoid repeating identical content across records when a shared reference can be used.

### 8.2 Required Fields

Historical places:

- `id`
- `type`
- `name`
- `country`
- `city`
- `summary`
- `story`
- `highlights`
- `timelineEventIds`
- `sources`

Historical figures:

- `id`
- `type`
- `name`
- `summary`
- `story`
- `highlights`
- `timelineEventIds`
- `sources`

Historical events:

- `id`
- `date`
- `title`
- `context`
- `event`
- `outcome`
- `significance`
- `sources`

Optional fields may be omitted when information is unavailable.

Do not fabricate values to satisfy a schema.

### 8.3 Validation

When adding or modifying data, check:

1. All IDs are unique.
2. All referenced IDs exist.
3. Dates use valid values.
4. Events are displayed in chronological order.
5. Both display modes have the required content.
6. Quick Exploration Mode contains no timeline.
7. Sources are included for historical claims.
8. Missing optional information does not break the page.
9. All local asset paths point to existing files.

---

## 9. UI and UX Guidelines

### 9.1 Overall Design

The website should feel like a modern historical knowledge platform rather than a generic travel booking website.

The design should communicate:

- Exploration
- Historical depth
- Curiosity
- Cultural discovery
- Readability

Avoid excessive decorative elements that distract from historical content.

### 9.2 Responsive Design

The website must support:

- Desktop
- Tablet
- Mobile

On mobile:

- Use a single-column layout where appropriate.
- Keep navigation and mode switching easy to access.
- Avoid horizontal scrolling.
- Ensure timeline content remains readable.
- Make interactive elements large enough to tap comfortably.

### 9.3 Accessibility

- Use semantic HTML elements.
- Provide meaningful image alt text.
- Maintain sufficient color contrast.
- Ensure interactive elements are keyboard accessible.
- Do not rely on color alone to communicate important information.
- Use descriptive labels for buttons and navigation links.

---

## 10. Development Workflow for AI Agents

When receiving a development request, follow this workflow.

### Step 1: Understand the Request

Before modifying the project:

- Read this `AGENTS.md`.
- Inspect the existing project structure.
- Identify relevant data, JavaScript functions, HTML elements, and styles.
- Understand existing conventions and functionality.

Do not assume the project is empty or recreate existing functionality without checking.

### Step 2: Identify the Scope

Determine whether the request involves:

- Adding a historical place.
- Adding a historical figure.
- Adding historical events.
- Modifying existing content.
- Creating a reusable JavaScript function.
- Updating a page or layout.
- Fixing a bug.
- Improving styling or responsiveness.

Prefer the smallest change that correctly fulfills the requirement.

### Step 3: Plan the Changes

Before implementation:

- Identify which files need to be added or modified.
- Reuse existing functions where possible.
- Check whether the existing data schema already supports the requirement.
- Avoid unnecessary changes to unrelated files.
- Preserve the GitHub Pages-compatible project structure.

### Step 4: Implement

- Follow the project structure.
- Follow the data schemas.
- Follow the content guidelines.
- Reuse existing JavaScript functions.
- Keep historical data separate from UI implementation.
- Ensure both content modes remain consistent.
- Keep `index.html` in the project root.
- Keep external resources inside `assets/`.

### Step 5: Validate

After implementation:

- Verify that `index.html` exists in the project root.
- Verify that all CSS and JavaScript paths are correct.
- Verify that all referenced images exist.
- Check for JavaScript syntax errors.
- Verify that the website works without npm or a build process.
- Verify that navigation and mode switching work.
- Check that the timeline is chronological.
- Check that Quick Exploration Mode does not display a timeline.
- Check responsive layouts.
- Check that existing pages and features still work.

Do not claim that a test passed unless it was actually performed.

### Step 6: Report

After completing the task, provide:

1. What was changed.
2. Which files were added or modified.
3. The final project directory structure.
4. How to preview the website.
5. Confirmation that the project follows the GitHub Pages upload requirements.
6. Any remaining issues or limitations.

---

## 11. Rules for Extending the Platform

New content should be added through structured data rather than creating a completely new page for every subject.

### 11.1 Adding a Historical Place

When asked to add a historical place:

1. Research the place using reliable historical sources.
2. Create a new record in `places.js`.
3. Follow the Historical Place Schema.
4. Write a connected historical story with meaningful chapters.
5. Add relevant historical events to `events.js`.
6. Reference those events through `timelineEventIds`.
7. Create concise Quick Exploration Mode highlights.
8. Add related figures when relevant.
9. Verify all referenced IDs.
10. Ensure the existing place rendering functions can display the new record without creating a separate HTML page.

### 11.2 Adding a Historical Figure

When asked to add a historical figure:

1. Research the person's life and historical influence.
2. Create a new record in `figures.js`.
3. Follow the Historical Figure Schema.
4. Write a chronological biography with meaningful chapters.
5. Add relevant historical events to `events.js`.
6. Reference those events through `timelineEventIds`.
7. Create concise Quick Exploration Mode highlights.
8. Add related places when relevant.
9. Verify all referenced IDs.
10. Ensure the existing figure rendering functions can display the new record without creating a separate HTML page.

### 11.3 Adding a Historical Event

When asked to add an event:

1. Create a unique event ID.
2. Provide a valid date object.
3. Write a clear event title.
4. Explain the historical context.
5. Describe what happened.
6. Explain the outcome and significance.
7. Include reliable sources.
8. Connect the event to relevant places and figures.
9. Verify chronological sorting.

### 11.4 Adding a New Feature

When asked to add a feature:

- Check whether an existing JavaScript function can be extended.
- Keep the feature compatible with both content types when appropriate.
- Avoid duplicating existing functionality.
- Maintain responsive behavior.
- Preserve GitHub Pages compatibility.
- Update this document if the feature changes the project's architecture, data schema, or development conventions.

---

## 12. GitHub Pages Deployment Requirements

The final output must be ready for direct upload through the GitHub website.

### 12.1 Required Final Files

At minimum, the project must contain:

```text
travel-time-atlas/
├── index.html
└── assets/
```

Additional files such as `AGENTS.md`, `README.md`, CSS files, JavaScript files, and images are allowed.

### 12.2 Upload Compatibility

The project must satisfy these requirements:

- `index.html` is located at the top level.
- The `assets/` directory is located at the top level.
- All local resource paths are correct.
- The website does not require a build step.
- The website does not require a backend.
- The website does not require npm installation.
- The website does not depend on local absolute file paths.
- The website does not depend on a local development server.

The user should be able to select the contents of the project folder and upload them directly into a GitHub repository.

Do not package the project inside an additional nested folder.

### 12.3 Resource Path Requirements

Use relative paths.

Correct:

```html
<link rel="stylesheet" href="./assets/css/style.css">
<script type="module" src="./assets/js/app.js"></script>
<img src="./assets/images/places/colosseum.jpg" alt="The Colosseum">
```

Avoid:

```html
<link rel="stylesheet" href="/assets/css/style.css">
<img src="C:/Users/username/Desktop/colosseum.jpg" alt="The Colosseum">
```

The website must work under a repository-specific URL such as:

`https://username.github.io/travel-time-atlas/`

### 12.4 Final Delivery to the User

When completing a website generation task, provide:

1. The complete project files.
2. The exact directory structure.
3. The `index.html` file in the project root.
4. All required assets and dependencies.
5. Clear instructions for uploading the project to GitHub Pages.

If the AI environment supports file creation, provide the complete project as a downloadable ZIP file.

The ZIP file must contain `index.html` directly at its root, not inside an additional project folder.

Also provide the individual files when possible.

Do not provide only code snippets or isolated JavaScript files when the user requested a complete website.

---

## 13. Testing and Reusability Requirements

The project must demonstrate that its development rules can be reused.

When adding new content, verify that existing templates and functions can render it without subject-specific implementation.

Examples:

- Add a second historical place and verify that the existing place detail view displays it.
- Add a second historical figure and verify that the existing figure detail view displays it.
- Add new historical events and verify that the shared timeline renders them in the correct order.
- Switch between Reading Mode and Quick Exploration Mode and verify that each mode uses the correct content structure.
- Verify that the website still works after being deployed under a GitHub Pages repository path.

### Acceptance Criteria

A development task is considered complete when:

- The requested content or feature is implemented.
- Existing project conventions are followed.
- Data structures remain consistent.
- Existing functionality is not unintentionally broken.
- Relevant validation checks pass.
- New content can be displayed through reusable functions.
- Both content modes follow their respective presentation rules.
- `index.html` remains in the project root.
- The website can be uploaded and deployed through GitHub Pages without a build process.

---

## 14. Final Development Principles

Always prioritize:

1. **Historical Accuracy** — Never invent historical facts or unsupported relationships.
2. **Meaningful Storytelling** — Explain how historical events connect and influence one another.
3. **Different User Experiences** — Reading Mode and Quick Exploration Mode must serve different purposes.
4. **Data Consistency** — Use one shared historical record for both modes.
5. **Reusable Architecture** — New places and figures should work with existing templates.
6. **Maintainability** — Keep code organized and avoid unnecessary complexity.
7. **GitHub Pages Compatibility** — Always produce a directly uploadable static website with `index.html` at the root.
8. **User Experience** — Make historical information easy to explore on both desktop and mobile.

**The goal is not simply to build a website about historical places. It is to create a reusable platform that helps travelers understand history through the places and people they discover.**
