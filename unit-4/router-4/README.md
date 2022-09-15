1. Create AuthContext ( CPC ) ; Provider; Consume it in PrivateRoute Component that you are gonna create;

2. Wrap your private pages inside PrivateRoute component that you create

3. Homepage --> you have the option to toggle and login

```
Context/AuthContext.jsx

index.js

Components/PrivateRoute.jsx

AllRoutes.jsx ( wrap private pages here inside PrivateRoute )

Home ( which will change auth status and toggle it in context )
```
