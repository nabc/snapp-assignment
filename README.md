# Snapp Application Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries

<div align="center">

<a href="https://reactjs.org/" target="_blank"><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<a href="https://www.typescriptlang.org/" target="_blank"><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a>
<a href="https://redux.js.org/" target="_blank"><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /></a>
<a href="https://tailwindcss.com/" target="_blank"><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" /></a>

|                                                         |
| ------------------------------------------------------- |
| [React Router](https://reactrouter.com/en/main)         |
| [React Hook Form](https://react-hook-form.com/)         |
| [Styled Components](https://www.styled-components.com/) |
| [Axios](https://github.com/axios/axios)                 |
| [React Query](https://tanstack.com/query/v3/)           |
| [Date Dns](https://date-fns.org/)                       |

</div>

## Folder Structure

```
Root
├── public/
│ ├── default-robot.png
│ └── index.html
│
└── src/
│
├── api/ ==> axios instance, interceptors and api functions
│
├── components/ ==> contains reusable components
│
├── contexts/ ==> contains ParamsContext which is responsible for storing the state of url search params and providing the state and actions to change the state to components
│
├── hooks/ ==> contains reusable hooks for app
│ │
│ └── usePagination ==> responsible for calculating current page, total number of pages and an array of 5 numbers - or total number of pages if we have less than 5 pages - with the current page as the middle number, based on circumstances - at the first of last  3 pages- current page may not be at center of this array.
│ │
│ ├── useParamParser ==> responsible for responding to changes of url search params state - held in ParamsContext - and add/remove or update params in url using `useSearchParams` from `react-router-dom`. The change in url will result in invalidating the contact list data in `ContactsList` component and refetching the data with new search params.
│
├── pages/ ==>
│ │
│ └── Contact/ ==> contains all the components for contact details page
│ │
│ ├── Home/ ==> contains all the components which gives home page the UI and all the functionality which includes: show/filter/sort list, pagination, change items per page
│
├── store/ ==> a redux store which holds the frequent visited contacts, when contact details page is visited and data retrieval is successful, an action would be dispatched to add the contact to the `frequentContacts` array, if the contact is included in the array - it has been visited before - it would be moved to the first position, if not, it will be added to the array. The `frequentContacts` array would hold 4 contacts at max.
│
├── styles/ ==> contains styles for the app
│ │
│ └── global => a set of normalizing styles created via styled components, added to app in `AppProviders` component
│ │
│ ├── styles => tailwind styles, added to app in `index.tsx` as the initializer of app
│
├── types/ ==> contains global type definitions for app
│
├── utils/ ==> contains reusable function such as date convertor
│
├── App.tsx => contains routes of the app
├── AppProviders.tsx ==> contains all global providers of the app, such as router, redux and react-query
└── index.tsx ==> initiates react and calls App component
```

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
