import { Controller } from "react-hook-form";
import Select from "react-select";

type Option = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

const options: Option[] = [
  {
    value: "Pick or Add a Customer",
    label: "Pick or Add a Customer",
    isDisabled: true,
  },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CustomerSelect = ({ control }: { control: any }) => {
  return (
    <Controller
      name="customer"
      control={control}
      render={({ field }) => (
        <Select
          options={options}
          value={options.find((opt) => opt.value === field.value)}
          onChange={(val) => field.onChange(val?.value)}
          defaultValue={options[0]}
          classNames={{
            control: (state) =>
              state.isDisabled ? "bg-transparent cursor-not-allowed" : "",
          }}
        />
      )}
    />
  );
};

export default CustomerSelect;
