import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/QueryBar.css";
import { getCategoryList } from "../api";

const QueryBar = () => {
  const [categoryList, setCatergoryList] = useState([]);

  useEffect(() => {
    getCategoryList().then((res) => {
      setCatergoryList(res.data.categories);
    });
  }, []);

  return (
    <section className="Queries">
      <nav className="QueryBar">
        <Link className="Tab-QueryBar" to="/">
          all Categories
        </Link>
        {categoryList.map((category) => {
          return (
            <Link
              key={category.slug}
              className="Tab-QueryBar"
              to={`/categories/${category.slug}`}
            >
              {category.slug} Games
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default QueryBar;
