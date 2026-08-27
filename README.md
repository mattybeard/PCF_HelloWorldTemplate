# From Scratch to Solid — PCF Example

Supporting code for my **South Coast Summit 2025** session:  
**"From Scratch to Solid: A Reusable Framework for PCF Components"**  

Updated for **Nordic Summit 2026**, with the same core session content plus a new Copilot **skill** (`pcf-standards`) that captures the architecture as reusable AI guidance.

---

## 📍 Workshop Checkpoint: Module 2 — ViewModel + MobX + ServiceProvider

**Status:** ✅ Centralized state management  
**What's included:**
- ViewModel class with MobX observables (`inputValue`, `boundValue`)
- ServiceProvider for dependency injection and service registration
- ServiceProviderContext for passing services to components
- Observer pattern with `mobx-react-lite`
- FieldControl now gets state from ViewModel via context
- Foundation for scalable, testable architecture

**Key Concepts:**
- Separation of state from component logic
- MobX actions and observables
- Service registry pattern
- React Context API integration

**Next:** Move to `module-3-done` to learn output binding and framework interaction

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js 18+  
- Power Platform CLI (`pac`) installed  

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
- [React Context API](https://react.dev/reference/react/createContext)

---

## 🙌 Credits  

Built for **South Coast Summit 2025**.  
Updated for **Nordic Summit 2026**.  
Thanks to Carl Cookson for the always incredible assistance!

