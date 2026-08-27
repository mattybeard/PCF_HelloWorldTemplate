# From Scratch to Solid — PCF Example

Supporting code for my **South Coast Summit 2025** session:  
**"From Scratch to Solid: A Reusable Framework for PCF Components"**  

Updated for **Nordic Summit 2026**, with the same core session content plus a new Copilot **skill** (`pcf-standards`) that captures the architecture as reusable AI guidance.

---

## 📍 Workshop Checkpoint: Module 4 — Complete API Integration

**Status:** ✅ Full PCF control with Dataverse integration  
**What's included:**
- Full ViewModel with `displayValues`, `loading`, `inputValue`, `boundValue`
- DataverseService integrated for Dataverse Web API calls
- ListControl component for displaying loaded account data
- `updateView()` includes async data loading logic with loading state
- Complete PCF control pattern with async data handling
- Error handling and conditional rendering
- Shows how to load data from Dataverse and display it in PCF

**Key Concepts:**
- Dataverse Web API integration via ServiceProvider
- Async/await patterns with promises
- Loading state management
- Error handling in data operations
- Rendering patterns for async data (loading, empty, populated states)

**Next:** Workshop complete! Explore extending with additional features or alternative patterns.

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js 18+  
- Power Platform CLI (`pac`) installed  
- A Dataverse environment (to test data loading)

### Build & Test the PCF Control  
Confirm you are in the PCF Control directory (HelloWorldControl)
```bash
npm install
npm run build
pac pcf push
```

### Testing Data Loading
The control will automatically load the first 5 accounts from your Dataverse environment on initialization. Verify you have appropriate security roles and API permissions.

---

## 📚 Resources  

- [Power Platform CLI docs](https://learn.microsoft.com/power-platform/developer/cli/introduction)  
- [Fluent UI](https://developer.microsoft.com/fluentui)  
- [MobX](https://mobx.js.org/)  
- [Dataverse Web API](https://learn.microsoft.com/power-apps/developer/data-platform/webapi/overview)  
- [PCF Web API](https://learn.microsoft.com/power-apps/developer/component-framework/reference/context/webapi)

---

## 🙌 Credits  

Built for **South Coast Summit 2025**.  
Updated for **Nordic Summit 2026**.  
Thanks to Carl Cookson for the always incredible assistance!

