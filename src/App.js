import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import 'element-react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration'
import { 
  Help,
  Preview,
  NotFound,
  Page,
  HomePage,
  HelpPage,
  ContactPage,
  AboutPage,
  SignInPage,
  SignUpPage,
  DetailPage
} from './pages'
import Nav from './layout/nav';
import Footer from './layout/footer'
// import Home from './pages/home/home'
// import Student from './pages/student/student';
// import Teacher from './pages/teacher/teacher';
// import TeacherDetail from './pages/teacher/teacherDetail';
// import Footer from './layout/footer';
// import Plan from './pages/plan/plan';
// import History from './pages/History/History';
// import Singin from './pages/Auth/singin';
// import Signup from './pages/Auth/signup';
// import TeacherDashboard from './pages/teacher/teacherDashboard';
// import Live from './pages/student/live';
/**
 * Main application componenet
 */
const App = (props) => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
  const repoName = repoNameArray[1]
  const routes = [
  {
    path:'/page:uid',
    component:Page
  },
  {
    path:'/contact',
    component:ContactPage
  },
  {
    path:'/about',
    component:AboutPage
  },
  {
    path:'/help',
    component:HelpPage
  },
  {
    path:'/preview',
    component:Preview
  },
  {
    path:'/home',
    component:HomePage
  },
  {
    path:'/login',
    component:SignInPage
  },
  {
    path:'/signup',
    component:SignUpPage
  }
]

  return (
    
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>

      <BrowserRouter>
        <Nav {...props}/>
        <Switch>
          <Redirect exact from='/' to='/home' />
          {routes.map(e=>(<Route key={e.path} exact path={e.path} component={e.component} />))}
          <Route exact path='/page/:uid' component={Page} />
          <Route exact path='/detail/:uid' component={DetailPage} />
          {/* <Route path={"/"} exact render={(props)=><><Home {...props}/><Footer/></>}/>
          <Route path={"/student"} render={(props)=><Student {...props}/>}/>
          <Route path={"/teacher"} render={(props)=><TeacherDashboard {...props}/>}/>
          <Route path={"/teachers"} render={(props)=><Teacher {...props}/>}/>
          <Route path={"/teacherdetail"} render={(props)=><TeacherDetail {...props}/>}/>
          <Route path={"/live"} render={(props)=><Live {...props}/>}/>
          <Route path={"/help"} render={(props)=><Help {...props}/>}/>
          <Route path={"/plan"} render={(props)=><Plan {...props}/>}/>
          <Route path={"/history"} render={(props)=><History {...props}/>}/>
          <Route path={"/login"} render={(props)=><Singin {...props}/>}/>
          <Route path={"/signup"} render={(props)=><Signup {...props}/>}/> */}
          {/* <Route exact path='/help' component={Help} />
          <Route exact path='/preview' component={Preview} /> */}
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  )
}

export default withRouter(App)
