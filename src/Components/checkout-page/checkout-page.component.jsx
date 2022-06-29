const CheckOutPage = () => {
  return (
    <>
      <div className="container mx-auto overflow-x-auto w-full pt-16 px-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default CheckOutPage;
