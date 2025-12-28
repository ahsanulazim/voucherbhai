import { useForm, type SubmitHandler } from "react-hook-form";
import CustomerSelect from "./CustomerSelect";

type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  customer: string;
};

const CustomerModal = ({
  ref,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      customer: "Pick or Add a Customer",
    },
  });

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
          <label className="label">Customer</label>
          <CustomerSelect control={control} />
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="label" htmlFor="firstName">
                First Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="ex: MD Tarek"
                {...register("firstName", {
                  required: "First Name is Required",
                })}
              />
              {errors.firstName && (
                <p className="text-error mt-2">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="ex: Rahman"
                {...register("lastName", { required: false })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="label" htmlFor="phone">
                Phone <span className="text-error">*</span>
              </label>
              <input
                type="tel"
                className="input w-full"
                placeholder="ex: 01712345678"
                {...register("phone", {
                  required: "Phone Number field is Empty",
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                    message: "Invalid Phone Number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-error mt-2">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="input w-full"
                placeholder="ex: username@email.com"
                {...register("email", {
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email Address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-error mt-2">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              Save
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
