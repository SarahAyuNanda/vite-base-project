# Rules

## Structure

- `assets` : images resource as .webp format (*highly recommended*) and general style
- `components` : reusable component that group by atomic design system
- `pages` : main page each features
- `routes` : all registered route each pages either public or private/protected
- `services` : api store and state management list
- `utils` : general configuration and helper, locales and constant, hook

> **Note** : Developer should add folder parent of src to `importOrder` list inisde `.prettierc`, so
> you could sort import based its configuration

> **Tips** : The project's already used absolute path import, so better you use it to implement sort
> import

## Standard Naming

- `Page` and `Component` function should use `PascalCase`, for example: Home, ChartBar, etc.
- `variable` and `utility` function should use `camelCase`, for example: currentDate,
  convertInitial, etc.
- Differentiate your component between its controller or style or model. <br> 
  `view` : *index.tsx*<br>
  `style` : *index.style.tsx*<br> 
  `controller` : *index.controller.ts* or *.tsx* (_as needed_)<br> 
  `model` : *index.model.ts*
- Defining type, you should use `PascalCase` and these keywords:<br>
  `type` : used for literal
  types or specific type; for example: <br>

  ```typescript
  type Size = string | number;
  type GenerateColor = (variant: string) => string;
  ```

  `interface` : used for contract for data or object, with initial letter `I`; for example: <br>

  ```typescript
  interface IUser {
    email: string;
    name: string;
    role: string;
    isActive: boolean;
  }

  // Specifically for mock
  interface IProfileMock {
    photo: string;
    fullName: string;
    address: string;
  }
  ```

> Note : Naming the file or variable or function based on its functionality

## Commit Message
Basically, you just have to write with this format  
```git
type: description
```
These references below might be useful  
| Commit Type | Title            | Description        |
| ------------| -----------------| -------------------|
| `feat`      | Feature          | Add new feature    |
| `fix`       | Bug Fixes        | Fix a bug          |
| `docs`      | Documentation    | Create or update documentation for changelog, readme etc. |
| `style`     | Styles           | Change that don't affect to code like formatting using linter |
| `refactor`  | Code Refactoring | Change code unlike fix bug |
| `chore`     | Chore            | Other changes need to finish later |
| `build`     | Build            | Change the build system or dependency |

## Merging Rules
Steps and rules to follow when merging branches within our repository.

- Before initiating a merge:
  - Ensure your feature branch is up to date with the base branch (usually `development` or `main`).
    - `git checkout <feature-branch>`
    - `git pull origin <base-branch>`
  - Resolve any conflicts locally.

- Code Review
  - All merge requests must be submitted through the repository's platform (GitLab) for review.
  - At least one other team member must review and approve the merge request.
  - Set the **Assignee** to yourself and the **Reviewer** to your tech lead
  - Incorporate or discuss feedback as necessary.

- Merging
  - Once approved, merge the feature branch into the base branch.
  - Use a squash commit.
  - Delete the feature branch from the remote repository after merging.

- Rollback Plan
  - In case of issues with the merge impacting production, have a rollback plan ready.
  - This might include reverting the merge commit or applying a hotfix.