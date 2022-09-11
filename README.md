# Simple ecommerce web app

## Libraries  

- React with Hooks, Redux, Redux Thunk
- React Bootstrap with Cosmo theme
- React Infinite Scroller, React Image Magnify, React Google Login, React Container Dimensions
- Axios, Axios Mock Adapter, Formik, Faker

## How to run  

- `npm install`
- `npm start` app wil be loaded on `http://localhost:3000`

## Folder structure  
- Redux store under `store`  
- Child components under `src/components`  
- Main components under `src/pages`  
- APIs to interact with Backend under `services/api`  
- Mock server using [json-server](https://github.com/typicode/json-server) and mock data under `db.json`. Tell backend team to look at those data to use key name accordingly. Also, look at `json-server` documentation to use correct key name for pagination, sort.  

## Need to add/fix  
- Authorization to redirect user based on user's type (normal user, seller, shipper)  
- Linking & Redirect between each components  
- Dashboard for shipper  
- Modify auth logic (under `/store/actions`)  
- Bootstrap, css (layout, style)  
- Add icon for each menu item of seller's sidebar  
- Filter options for seller orders dashboard  
- Button to delete each seller's product.  
- Button to add seller's product (**Note**: button should navigate to available `SellerProductForm` component).  
- Footer  