# Wix app - React JSX Demo Widget
### **Overview**

This boilerplate will make it easy for you to [start developing](http://dev.wix.com/) your [Wix app](https://www.wix.com/app-market/main). 
The project is already set up with a widget component and its app settings panel.

Most apps have a server side, but to keep it simple, we'll focus only on the client side.

### **Features**
* Uses the official Wix UI-lib and [UI controls](https://dev.wix.com/docs/ui-lib/ui-controls/)
* Demo implementation of the app’s interaction with its settings panel 
* Option to use plain CSS (we use SASS by default)
* Updated with the latest version of [Wix SDK](https://dev.wix.com/docs/sdk/using-the-sdk/)

### **Getting started**
Before you start - get [node.js - version 10.16.0](https://nodejs.org/en/)

Run the app:

1. Clone our starter template
`git clone https://github.com/wix/tpa-demo-app-react-jsx.git`
2. Navigate to your project folder
`cd tpa-demo-app-react-jsx/`
3. Install npm
`npm install`
4. Run webpack
`webpack`
5. Run the app
`npm start`

This will run a webserver on your local host. You can now view your app in your browser: https://localhost:3000/widget.html

### **Registering the app**

1. Create an app at: https://dev.wix.com/dc3/my-apps
2. Go to your "Workspace" and add a new website component of the "Widget" type and give it a name.
  * Component URL should be: https://localhost:3000/widget.html
  * Set the width to 300px and height to 400px.
3. Set the App Settings URL to: 
  * https://localhost:3000/settings.html
4. Save your app.
5. Click "Test your app" in the dashboard, and see that it functions.
6. Set your app up on a server to ensure everything works in a production enviorment.

### **Support**
Need help setting it up or have any questions?

* [Knowledge Base](https://devforum.wix.com/en/)
* [Documentation](https://dev.wix.com/docs/)
* [Contact Us](https://devforum.wix.com/en/contact)

### **License**
Copyright (c) 2014 Wix.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
