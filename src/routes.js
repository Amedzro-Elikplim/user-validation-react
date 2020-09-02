import React from 'react'
 
const Logintemplate = React.lazy(() => import('./components/loginpage'))
const Signuptemplate = React.lazy(() => import('./components/signuppage'))
 
const routes = [
    { path: '/', exact: true, name: 'Home', component: Logintemplate },
    { path: '/signuppage', name: 'signuppage', component: Signuptemplate },
]

export default routes 