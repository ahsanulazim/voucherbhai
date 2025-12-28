import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

const CustomerModal = ({
  ref,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    reset();
    ref.current?.close();
  };

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box max-w-3xl">
        <h3 className="font-bold text-lg">Customer Details</h3>
        <form className="fieldset" onSubmit={handleSubmit(handleForm)}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="label">
                First Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                className="input w-full"
                {...register("firstName", {
                  required: "First Name is Required",
                })}
              />
              {errors.firstName && (
                <p className="text-error mt-2">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="label">Last Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("lastName", { required: false })}
              />
            </div>
          </div>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              Login
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CustomerModal;
