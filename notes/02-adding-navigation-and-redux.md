# Adding Navigation and Redux

## Contents

1. [Adding Navigation](#)
    * [Implementing React Router Support](#)
    * [BrowserRouter vs StaticRouter](#)
  
---

## 1. Adding Navigation

### 1.1. Implementing React Router Support

At present our app only shows one single component. There will be two separate tiers of routing inside of our application.

* **Tier 1:** Express routing layer. Express will not enforce any routing rules on any incoming requests. It will delegate all routing to react router.
* **Tier 2:** React router.

We can add some routes for some API handlers or outside requests to Express router, but for anything that is meant to show HTML, we're always going to make sure that react router is in charge of that request.

![01](./images/02/02-01.png "01")

### 1.2. BrowserRouter vs StaticRouter

Let's take a look at how react-router works on a normal application without server side rendering:

![02](./images/02/02-02.png "02")

![03](./images/02/02-03.png "03")

In the end, `BrowserRouter` is completely hardcoded and will look at the url in the address bar. But we don't have an address bar when rendering the app in the server, which means if we tried to use the `BrowserRouter` as we are very used to doing, we'd get an error message.

Here is what we're going to do instead: We'll have two routers. The `StaticRouter` is included in the `react-router` library, and it is specifically made for use on the server with server side rendering.

The when the app gets shipped to the browser and gets rendered a second time (`hydrated` as we call it), we'll use `BrowserRouter` instead.

![04](./images/02/02-04.png "04")

How should we approach the implementation: We'll have one distinct set of route mappings (`Routes.js`) and consume those routes slightly differently on the server versus the client. The api doc for `StaticRouter` can be viewed here: [https://reacttraining.com/react-router/web/api/StaticRouter](https://reacttraining.com/react-router/web/api/StaticRouter).

![05](./images/02/02-05.png "05")


