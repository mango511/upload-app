import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";

// Props interface for ButtonGroup component
interface ButtonGroupProps {
  label: string;
  options: Array<string>;
  defaultIndex: number;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const { label, options, defaultIndex } = props;

  // Initial value for the selected option
  const initialValue = !!options && options[defaultIndex];
  const [value, setValue] = useState(initialValue);

  // Event handler for radio button change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        <Typography variant="caption">{label}</Typography>
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {!!options &&
          options.map((item: string, index: number) => {
            return (
              <FormControlLabel
                key={index}
                value={item}
                control={<Radio />}
                label={item}
                className="flex flex-row items-center"
                sx={{ color: "text.primary", fontSize: "12px" }}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
};

export default ButtonGroup;
