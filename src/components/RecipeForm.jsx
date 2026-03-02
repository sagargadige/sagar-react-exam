import React from "react";

const RecipeForm = ({rec,setRect,handleChange}) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <h1 className="text-center">Recipe</h1>
            <form method="post" >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="Recipe name"
                //   value={rec.name || ''}
                onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Prep Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Bake Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Ingredients
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Servings
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Instructions
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeForm;
