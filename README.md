# React Server Side Rendering

Server side rendering.

## Notes

1. [Introduction and Setup](notes/01-introduction.md)
    1. [Server Architecture](notes/01-introduction.md#1-server-architecture)
    2. [Environment Setup](notes/01-introduction.md#2-environment-setup)
          * [Boilerplate Setup](notes/01-introduction.md#21-boilerplate-setup)
          * [Express Setup](notes/01-introduction.md#22-express-setup)
          * [JSX on the Server](notes/01-introduction.md#23-jsx-on-the-server)
          * [Server Side Webpack](notes/01-introduction.md#24-server-side-webpack)
    3. [Server Configuration](notes/01-introduction.md#3-server-configuration)
          * [Rebuilding and Restarting](notes/01-introduction.md#31-rebuilding-and-restarting)
          * [Client Side JavaScript](notes/01-introduction.md#32-client-side-javascript)
          * [Client Bundles](notes/01-introduction.md#33-client-bundles)
          * [The Public Directory](notes/01-introduction.md#34-the-public-directory)
          * [Client Bootup](notes/01-introduction.md#35-client-bootup)
    4. [Refactoring](notes/01-introduction.md#4-refactoring)
          * [Merging Webpack Config](notes/01-introduction.md#41-merging-webpack-config)
          * [Single Script Startup](notes/01-introduction.md#42-single-script-startup)
          * [Ignoring Files with Webpack](notes/01-introduction.md#43-ignoring-files-with-webpack)
          * [Renderer Helper](notes/01-introduction.md#44-renderer-helper)
2. [Adding Navigation and Redux](notes/02-adding-navigation-and-redux.md)
    1. [Adding Navigation](notes/02-adding-navigation-and-redux.md#1-adding-navigation)
          * [Implementing React Router Support](notes/02-adding-navigation-and-redux.md#11-implementing-react-router-support)
          * [BrowserRouter vs StaticRouter](notes/02-adding-navigation-and-redux.md#12-browserrouter-vs-staticrouter)
          * [Route Configuration](notes/02-adding-navigation-and-redux.md#13-route-configuration)
    2. [Integrating Support for Redux](notes/02-adding-navigation-and-redux.md#2-integrating-support-for-redux)
          * [The Users API](notes/02-adding-navigation-and-redux.md#21-the-users-api)
          * [Four Challenges for Redux Setup](notes/02-adding-navigation-and-redux.md#22-four-challenges-for-redux-setup)
          * [Browser Store Creation](notes/02-adding-navigation-and-redux.md#23-browser-store-creation)
          * [Server Store Creation](notes/02-adding-navigation-and-redux.md#24-server-store-creation)
    3. [Implementing Basic Action Creators and Reducers](notes/02-adding-navigation-and-redux.md#3-implementing-basic-action-creators-and-reducers)
          * [FetchUser Action Creator and the User Reducer](notes/02-adding-navigation-and-redux.md#31-fetchuser-action-creator-and-the-user-reducer)
          * [Reducer Imports](notes/02-adding-navigation-and-redux.md#32-reducer-imports)
          * [UserList Component](notes/02-adding-navigation-and-redux.md#33-userlist-component)
3. [Server Side Data Loading](notes/03-server-side-data-loading.md)