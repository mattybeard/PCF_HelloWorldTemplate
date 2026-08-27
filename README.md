# From Scratch to Solid — PCF Example

Supporting code for my **South Coast Summit 2025** session:  
**"From Scratch to Solid: A Reusable Framework for PCF Components"**  

Updated for **Nordic Summit 2026**, with the same core session content plus a new Copilot **skill** (`pcf-standards`) that captures the architecture as reusable AI guidance.

---

## 📍 Workshop Checkpoint: Module 3 — Output Binding & Framework Interaction

**Status:** ✅ Output properties and two-way interaction  
**What's included:**
- ViewModel with `refresh()` callback for notifying framework of output changes
- FieldControl that calls `vm.refresh()` on input changes
- BoundButtonControl demonstrating button-triggered updates
- `getOutputs()` returns `inputValue` as `boundField` output
- Bound field synchronization pattern

**Key Concepts:**
- Two-way binding between PCF and form
- Framework notification via `notifyOutputChanged()`
- Output parameter mapping
- Component coordination through shared ViewModel

**Next:** Move to `module-4-done` to learn Dataverse integration and async data loading

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
- [PCF Output Properties](https://learn.microsoft.com/power-apps/developer/component-framework/manifest-schema-reference/property)

---

## 🙌 Credits  

Built for **South Coast Summit 2025**.  
Updated for **Nordic Summit 2026**.  
Thanks to Carl Cookson for the always incredible assistance!

