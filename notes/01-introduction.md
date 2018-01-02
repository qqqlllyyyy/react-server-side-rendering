# Introduction

### Contents

1. [Relationship Between Node & Express](#)

---

### 1.

We'll run two separate backend servers for our application.

![01](./images/01/01-01.png "01")

* **API Server:** Handle all the application logic, like serving the list of users, handling authentication.
* **Rendering Server:** Be responsible for rendering our application and serving it to the user. 

All the services in the API server will produce JSON. The rendering server will produce HTML.

![02](./images/01/01-02.png "02") 

The benefit to this approach is that by putting together the separate API server, we can replace the React server side rendering piece with an Angular application, or an Ember application.