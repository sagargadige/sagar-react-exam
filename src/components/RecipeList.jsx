import React from "react";

const RecipeList = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 py-5">
            <h2>Recipe List</h2>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@social</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeList;
