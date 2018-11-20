# Wix app - React JSX Demo Widget
### **Overview**

This boilerplate will make it easy for you to [start developing](http://dev.wix.com/) your [Wix app](https://www.wix.com/app-market/main). 
The project is already set up with a widget component and its App settings panel.

Most apps have a server side, but to keep it simple, we'll focus only on the client side.

### **Features**
* Uses the official Wix UI-lib and [UI controls](http://dev.wix.com/docs/ui-lib/ui-controls/)
* Demo implementation of the app’s interaction with its settings panel 
* Option to use plain CSS (we use SASS by default)
* Updated with the latest version of [Wix SDK](http://dev.wix.com/docs/sdk/using-the-sdk/)

### **Getting started**
Before you start - get [node.js](https://nodejs.org/en/)

Generate the app:

1. Clone our starter template
`git clone git@github.com:wix/tpa-demo-app-react-jsx.git`
2. Navigate to your project folder
`cd tpa-demo-app-react-jsx/`
3. Install npm
`npm install`
4. Run webpack
`webpack`
5. Run the app
`npm start`

This will run a webserver on your local host. You can now view your app in your browser: http://localhost:3000/widget.html

### **Registering the app**

1. Follow the registration guide to create a new app.
2. Add a Widget endpoint:
  * Endpoint URL with the following URL: http://localhost:3000/widget.html
  * Set the width to 300px and height to 400px.
3. Set the App Setting URL to: 
  * http://localhost:3000/settings.html
  * Set the height (up to 578px). 
4. Save your app.
5. In order to test the widget in localhost in the Wix editor you need to disable the editor/site SSL.
* You can toggle HTTPS at the bottom of your [website settings overview](https://www.wix.com/my-account/site-selector/?buttonText=Manage%20Settings&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https://www.wix.com/dashboard/{{metaSiteId}}/manage-website).
6. Set your app up on a server to ensure everything works.
* Be sure to [toggle back on HTTPS](https://www.wix.com/my-account/site-selector/?buttonText=Manage%20Settings&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https://www.wix.com/dashboard/{{metaSiteId}}/manage-website) in the editor, and enable HTTPS in webpack by setting `https: true` in the server.js file.

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
