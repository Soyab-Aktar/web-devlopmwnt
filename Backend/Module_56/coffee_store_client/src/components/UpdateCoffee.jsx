import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const selectedCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, url } =
    selectedCoffee;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const url = form.url.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      url,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee Added",
            text: `${name} Coffee Updated to the site`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl mb-3 font-bold">
        Update: <span className="text-cyan-600">{name}</span> Coffee
      </h1>
      <form className="grid grid-cols-2 gap-6" onSubmit={handleUpdate}>
        {/* Name */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Name
          </legend>
          <input
            type="text"
            className="input"
            name="name"
            defaultValue={name}
            placeholder="Update Coffee Name"
          />
        </fieldset>
        {/* Quantity */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Available Quantity
          </legend>
          <input
            type="number"
            className="input"
            name="quantity"
            defaultValue={quantity}
            placeholder="Update Available Quantity"
          />
        </fieldset>
        {/* Supplier */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Supplier Name
          </legend>
          <input
            type="text"
            className="input"
            name="supplier"
            defaultValue={supplier}
            placeholder="Update Supplier Name"
          />
        </fieldset>
        {/* Taste */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Taste
          </legend>
          <input
            type="text"
            className="input"
            name="taste"
            defaultValue={taste}
            placeholder="Update Taste Name"
          />
        </fieldset>
        {/* Category */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Category
          </legend>
          <input
            type="text"
            className="input"
            name="category"
            defaultValue={category}
            placeholder="Update Category Name"
          />
        </fieldset>
        {/* Details */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Details
          </legend>
          <input
            type="text"
            className="input"
            name="details"
            defaultValue={details}
            placeholder="Update Details"
          />
        </fieldset>
        {/* Photo URL */}
        <fieldset className="fieldset col-span-2">
          <legend className="fieldset-legend">
            <span className="text-cyan-600">Update :</span>Photo URL
          </legend>
          <input
            type="url"
            className="input"
            name="url"
            defaultValue={url}
            placeholder="Update Photo URL"
          />
        </fieldset>
        <input type="submit" className="btn col-span-2" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
