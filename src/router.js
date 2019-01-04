import JobPosting from './components/Jobposting/index';
import Applicants from './components/Applicants/index';
import Hired from './components/Hired/Component';
import Interview from './components/Interview/Component';
import AddNewJob from './components/AddNewJob/index';
import EditJob from './components/JobEditing/index';
import Profile from './components/Profile/Component';
import ApplicantDetails from './components/ApplicantDetails/ApplicantDetails';
import HomePage from './components/Home/Component';
import CreateInterview from './components/Interview/CreateInterview';
import CategoryImageUpload from './components/CategoryImageUpload/Component';

export const appRouter = [
  {
    path: '/admin/home',
    component: HomePage,
    exact: true
  },
  {
    path: '/admin/upload',
    component: CategoryImageUpload,
    exact: true
  },
  {
    path: '/admin/profile',
    component: Profile,
  },
  {
    path: '/admin/jobPosting',
    exact: true,
    component: JobPosting,
  },
];
