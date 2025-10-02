# From Scratch to Solid — PCF Example

Supporting code for my **South Coast Summit 2025** session:  
**“From Scratch to Solid: A Reusable Framework for PCF Components”**  

This repository contains a simple **HelloWorld PCF control** and an accompanying **Dataverse Custom API**. Together, they illustrate the patterns I talked about in the presentation: **Service Provider, ViewModel, MobX, Fluent UI, and Output Parameters.**  

---

## 📑 What’s Inside  

### PCF Control (`HelloWorldControl`)  
- **React + Fluent UI** interface  
- **MobX ViewModel** for state management  
- **Service Provider** wiring up the ViewModel, Dataverse API service, and utilities  
- Example of calling a **Custom API** and displaying results  
- Demonstrates **input properties** (bound + unbound)  

### Dataverse Custom API (`HelloWorldExample.Api`)  
- C# plugin project exposing a simple Custom API  
- Accepts a JSON payload  
- Returns a JSON response with text + sample GUIDs  
- Shows how to handle complex objects and pass them to PCF  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js 18+  
- Power Platform CLI (`pac`) installed  
- A Dataverse environment with the Custom API deployed  

### Build & Test the PCF Control  
```bash
npm install
npm run build
pac pcf push
```

### Deploy the Custom API  
- Build the C# project in Visual Studio  
- Register the plugin and Custom API in your Dataverse solution  
- Update the PCF control’s service class if your API name differs  

---

## 🧩 Key Concepts Demonstrated  

- **PCF Basics** → how to scaffold, build, and push a control  
- **Fluent UI** → accessible, consistent UI components  
- **MobX ViewModel** → observable state + actions + computed values  
- **Service Provider** → central registry for ViewModel, services, and utilities  
- **Custom API integration** → calling Dataverse logic from PCF via a service layer  
- **Output parameters** → binding PCF values back to the form (shown in the deck; partial in this code)  

---

## 📦 Packaging & Deployment  

- Use `pac pcf push` for quick testing  
- Add the control to a solution and package via `pac solution add-reference` for ALM scenarios  
- The slide deck also covers CI/CD approaches (e.g., Azure DevOps/GitHub Actions)  

---

## ⚠️ Notes  

- This is **demo code** — designed to show the framework approach rather than be production-ready.  
- Error handling, accessibility, and localization are minimal.  
- `node_modules` and build output are intentionally excluded. Run `npm install` before building.  

---

## 📚 Resources  

- [Power Platform CLI docs](https://learn.microsoft.com/power-platform/developer/cli/introduction)  
- [Fluent UI](https://developer.microsoft.com/fluentui)  
- [MobX](https://mobx.js.org/)  

---

## 🙌 Credits  

Built for **South Coast Summit 2025**.  
