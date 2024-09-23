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

  useEffect(() => {
    console.log("All categories:", categories);
  }, [categories]);

  const handleCheckboxChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  useEffect(() => {
    console.log("Selected categories:", selectedCategories);
    dispatch(filterByCategory(selectedCategories));
  }, [selectedCategories, dispatch]);

  return (
    <div className="pb-4 flex gap-5 text-center font-medium  text-md justify-center items-center">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id} className="flex items-center gap-2">
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
        <p>No categories available.</p>
      )}
    </div>
  );
}
