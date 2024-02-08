import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import ClockIcon from "../../shared-components/ClockOutlinedIcon";

// Array of testing centers
const TestingCenter = [
  "Testing Center 1",
  "Testing Center 2",
  "Testing Center 3",
  "Testing Center 4",
];

// Props interface for SelectBox component
interface SelectBoxProps {
  title: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ title }) => {
  const [client, setClient] = React.useState("");

  // Event handler for select box change
  const handleChange = (event: SelectChangeEvent) => {
    setClient(event.target.value);
  };

  return (
    <div className="flex flex-row items-center mb-[5px]">
      <Typography
        variant="caption"
        className="mr-1 text-nowrap"
        color="text.primary"
      >
        {title}
      </Typography>
      <FormControl sx={{ ml: 3, mr: 1, my: 0.5, minWidth: 140 }} size="small">
        <InputLabel id="demo-select-small-label">Select Client</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={client}
          label="Select Client"
          onChange={handleChange}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Client1">Client1</MenuItem>
          <MenuItem value="Client2">Client2</MenuItem>
          <MenuItem value="Client3">Client3</MenuItem>
        </Select>
      </FormControl>
      <ClockIcon />
    </div>
  );
};

const SelectBoxGroup = () => {
  return (
    <div className="flex flex-col">
      {TestingCenter.map((item, index) => (
        <SelectBox title={item} key={index} />
      ))}
    </div>
  );
};

export default SelectBoxGroup;
