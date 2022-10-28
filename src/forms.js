const showHideForm = () => {
  const form = document.querySelector(".form-wrapper");
  form.classList.toggle("hidden");
  console.log("show-hide");
  resetForm();
};
const resetForm = () => {
  const form = document.querySelector("#form");
  form.reset();
};

export { showHideForm };
