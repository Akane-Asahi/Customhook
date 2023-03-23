# React Assignment - Custom hook

## Demo

<img width="954" alt="Screenshot (49)" src="https://user-images.githubusercontent.com/111799231/207151777-a7037f50-0628-474c-990f-ea2997fcd21e.png">
<img width="946" alt="Screenshot (50)" src="https://user-images.githubusercontent.com/111799231/207151839-62bd9d32-9f97-40ec-8763-d2cb0ae2e9f6.png">


## How to run project

1. Step 1: yarn
2. Step 2: yarn start

## Requirements

1. Create custom hook to fetch list of data and details in `customHook` folder
2. Apply the hook to get data then display data in `components` folder.Display 3 countries/products with name, status and region.
3. Add `loading` logic to the custom hook above

## List of url

1. Country list: `https://restcountries.com/v3.1/all`
2. Country detail: `https://restcountries.com/v3.1/name/peru`
3. Product list: `https://fakestoreapi.com/products`
4. Product detail: `https://fakestoreapi.com/products/1`


## Solution:
1. yarn add react-router-dom
2. import { BrowserRouter } from "react-router-dom"; in index.js
3. Replace <App />, with 
    <BrowserRouter>
        <App />
    </BrowserRouter>
4. Make a useFetch.js file
5. import it to desired file, in this case countries.js
6. Set loading operation value and render the countries it if loading === false
