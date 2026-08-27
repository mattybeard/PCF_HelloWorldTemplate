# From Scratch to Solid — PCF Example

Supporting code for my **South Coast Summit 2025** session:  
**"From Scratch to Solid: A Reusable Framework for PCF Components"**  

Updated for **Nordic Summit 2026**, with the same core session content plus a new Copilot **skill** (`pcf-standards`) that captures the architecture as reusable AI guidance.

---

## 📍 Workshop Checkpoint: Module 0 — Environment Baseline

**Status:** ✅ Environment check setup  
**What's included:**
- Basic Fluent UI greeting component
- Minimal PCF control wiring
- No ViewModel, ServiceProvider, or data loading yet
- Perfect for verifying build environment and dependencies

**Next:** Move to `module-1-done` to learn React state with `useState`

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js 18+  
- Power Platform CLI (`pac`) installed  
- A Dataverse environment (not required for this module)

### Build & Test the PCF Control  
Confirm you are in the PCF Control directory (HelloWorldControl)
```bash
npm install
npm run build
pac pcf push
```

---

## 📚 Resources  

- [Power Platform CLI docs](https://learn.microsoft.com/power-platform/developer/cli/introduction)  
- [Fluent UI](https://developer.microsoft.com/fluentui)  
- [MobX](https://mobx.js.org/)  

---

## 🙌 Credits  

Built for **South Coast Summit 2025**.  
Updated for **Nordic Summit 2026**.  
Thanks to Carl Cookson for the always incredible assistance!

