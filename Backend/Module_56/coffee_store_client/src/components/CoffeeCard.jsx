import { SiBuymeacoffee } from "react-icons/si";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, url } =
    coffee;

  const handleDelete = (_id) => {
    console.log("Working  on delete ...", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coff) => coff._id != _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-gray-800 p-3 shadow-sm">
      <figure>
        <img src={url} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <div className="text-sm text-gray-400">
          <p>{details}</p>
          <p>
            <strong className="text-gray-300">Taste : </strong>
            {taste}
          </p>
          <p>
            <strong className="text-gray-300">Category : </strong>
            {category}
          </p>
          <p>
            <strong className="text-gray-300">Supplier : </strong>
            {supplier}
          </p>
          <p>
            <strong className="text-gray-300">Quantity : </strong>
            {quantity}
          </p>
        </div>

        <div className="card-actions justify-end ">
          <button className="btn ">
            <SiBuymeacoffee className="text-2xl text-green-500" />
          </button>
          <Link to={`/updateCoffee/${_id}`} className="btn ">
            <MdOutlineChangeCircle className="text-2xl text-orange-400" />
          </Link>
          <button className="btn " onClick={() => handleDelete(_id)}>
            <MdDeleteForever className="text-2xl text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
