import { apiServiceInstance } from "./axios";

export const usersService = {
  getUsers: () => apiServiceInstance.get("/users"),
};

export const categoryService = {
  getCategories: () => apiServiceInstance.get("/categories"),
};

export const reviewsService = {
  getReviews: () => apiServiceInstance.get("/reviews"),
};

export function formatDate(date) {
  if (date === undefined) {
    return;
  }

  let dateArray = [];

  for (let i = 0; i < 10; i++) {
    dateArray.push(date[i]);
  }
  let joinedFormattedDate = dateArray.join("");
  let formattedDate = joinedFormattedDate.split("-").reverse().join("-");
  return formattedDate;
}

export function formatCategory(category) {
  let noHyphenStr = category.replace("-", " ");
  let categoryArr = noHyphenStr.split(" ");
  for (let i = 0; i < categoryArr.length; i++) {
    categoryArr[i] = categoryArr[i][0].toUpperCase() + categoryArr[i].substr(1);
  }
  let formattedCategory = categoryArr.join(" ");
  return formattedCategory;
}