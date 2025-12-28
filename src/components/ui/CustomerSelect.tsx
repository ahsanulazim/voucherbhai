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

const CustomerSelect = () => {
  return <Select defaultValue={options[0]} options={options} />;
};

export default CustomerSelect;
