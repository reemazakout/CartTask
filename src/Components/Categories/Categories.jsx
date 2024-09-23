import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../app/CategorySlice";
import { filterByCategory } from "../../app/ProductsSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categorySlice.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCheckboxChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  useEffect(() => {
    dispatch(filterByCategory(selectedCategories));
  }, [selectedCategories, dispatch]);

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Categories</h2>
      {categories && categories.length > 0 ? ( // Check if categories exist
        categories.map((category) => (
          <div key={category._id}>
            <label>
              <input
                type="checkbox"
                value={category.slug}
                onChange={handleCheckboxChange}
              />
              {category.name}
            </label>
          </div>
        ))
      ) : (
        <p>No categories available.</p> // Handle the case where no categories are fetched yet
      )}
    </div>
  );
}
