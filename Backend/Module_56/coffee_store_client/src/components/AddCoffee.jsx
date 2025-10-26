import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const url = form.url.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      url,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added",
            text: `${name} Coffee Added to the site`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl mb-3 font-bold">Add Coffee</h1>
      <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
        {/* Name */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Enter Coffee Name"
          />
        </fieldset>
        {/* Quantity */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Available Quantity</legend>
          <input
            type="number"
            className="input"
            name="quantity"
            placeholder="Enter Available Quantity"
          />
        </fieldset>
        {/* Supplier */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Supplier Name</legend>
          <input
            type="text"
            className="input"
            name="supplier"
            placeholder="Enter Supplier Name"
          />
        </fieldset>
        {/* Taste */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Taste</legend>
          <input
            type="text"
            className="input"
            name="taste"
            placeholder="Enter Taste Name"
          />
        </fieldset>
        {/* Category */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Category</legend>
          <input
            type="text"
            className="input"
            name="category"
            placeholder="Enter Category Name"
          />
        </fieldset>
        {/* Details */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Details</legend>
          <input
            type="text"
            className="input"
            name="details"
            placeholder="Enter Details"
          />
        </fieldset>
        {/* Photo URL */}
        <fieldset className="fieldset col-span-2">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            type="url"
            className="input"
            name="url"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <input type="submit" className="btn col-span-2" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
