# Lab 2 — Forms & Website Navigation (HTML & CSS)

## Task Description
Extend the website from **Lab 1** by adding registration and login forms, improving navigation, and applying styling.

## Requirements

### 1) Registration Form
Create a registration form that includes:

- First name (text)
- Last name (text)
- Email (email input)
- Password (password input)
- Gender (radio buttons)
- Country (dropdown grouped by continent)
- Birthday selection:
  - Month (dropdown)
  - Day (text or number field)
  - Year (text or number field)
- Interests (check boxes: sports, music, reading, etc.)
- Bio (textarea, **non-resizable**)
- Each label must be bound to its input (`for` + `id`)
- Buttons: Submit + Reset
- Form must be designed **inside a table**
- Use external CSS for styling

### 2) Login Form
Create a login form with the following:

- Username (text)
- Password (password)
- Remember Me checkbox
- **Accesskey attributes** for all fields
- Bind every label to its input
- Method: **GET**
- Login button redirects to **Main Page (page2)**

### 3) Redirect from Home Page
- After **5 seconds**, automatically redirect to the **Registration Form**

### 4) Image Navigation on Home Page
- Clicking the **enter image** on the Home Page redirects to the **Login Form**

### 5) Styling
- Apply suitable CSS styling for both forms:
  - Organized layout
  - Visible labels and inputs
  - Buttons styled
  - Form table styled for clarity

---

## Deliverables
- `registration.html`
- `login.html`
- Updated Home Page with:
  - Auto redirect script
  - Image link to login page
- Updated CSS file


---

## Learning Objectives
- HTML form creation & input types
- Form validation basics (HTML attributes)
- Using POST and GET form methods
- Binding form labels with `for`
- Grouping dropdown options
- Adding redirects and navigation links
- Styling forms and tables with CSS

