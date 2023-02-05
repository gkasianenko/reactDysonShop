import "./scss/app.scss";

import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Sort from "./components/sort/Sort";

import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
