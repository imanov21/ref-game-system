import Profile from "../components/Profile";
import Home from "../components/Home";
import GoalsList from "../components/GoalsList";

import SignIn from "../components/user/SignIn";
import SignUp from "../components/user/SignUp";

const pages = [
  {
    path: '/',
    component: GoalsList,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: false,
  },
  {
    path: '/goals',
    component: GoalsList,
    exact: false,
  },
  {
    path: '/sign-in',
    component: SignIn,
    exact: false,
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: false,
  },
];

export default pages;