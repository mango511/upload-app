import { Button, Dialog, Typography } from "@mui/material";
import ButtonGroup from "../shared-components/ButtonGroup";
import SelectBoxGroup from "./components/SelectBoxGroup";
import { styled } from "@mui/system";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import UploadGroup from "./components/UploadGroup";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Grid } from "@mui/material";
import ClockOutlinedIcon from "../shared-components/ClockOutlinedIcon";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import CustomizedLine from "../shared-components/CustomizedLine";
import { ToggleSwitch } from "../shared-components/ToggleSwitch";

const CustomizedDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    width: "1000px",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden !important",
    borderRadius: "16px",
  },
});

const CustomziedDisabledByDefaultRoundedIcon = styled(
  DisabledByDefaultRoundedIcon
)({
  transform: "scale(1.4)",
  cursor: "pointer",
  position: "absolute",
  left: "35px",
  top: "35px",
});

const DashboardPage = () => {
  // State hook to manage the toggle switch state
  const [value, setValue] = useState(1);

  // Function to handle click events on the toggle switch, flipping its value
  const handleClick = () => {
    setValue(1 - value);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomizedDialog open={true} maxWidth="lg">
        <DialogTitle>
          <CustomziedDisabledByDefaultRoundedIcon color="primary" />
          <Typography className="text-center !text-2xl">
            Document Upload
          </Typography>
          <CustomizedLine className="w-56" />
        </DialogTitle>

        <DialogContent className="w-full !pt-5">
          <Grid
            item
            container
            lg={12}
            direction="row"
            justifyContent="center"
            gap={{ lg: 10, md: 2, sm: 2 }}
          >
            <Grid item lg={6} md={9} sm={11}>
              <UploadGroup />
              <CustomizedLine className="w-60" />

              <Typography variant="caption">Elapse Data Checking:</Typography>
              <Typography color="#109D59 !important" className="!text-xs">
                No Elapsed Dates!
              </Typography>
              <CustomizedLine className="w-60" />

              <Typography variant="caption">Tolerance Window:</Typography>
              <div className="flex flex-row items-center w-9/12 p-2">
                <FormGroup className="w-1/3 border-r-gray border-r-2 mr-3">
                  <FormControlLabel
                    control={
                      <ToggleSwitch className="my-1" checked={value === 1} />
                    }
                    label={value === 1 ? "Toggle ON" : "Toggle OFF"}
                    labelPlacement="end"
                    value={value}
                    onClick={handleClick}
                    className="text-nowrap text-primary"
                  />
                </FormGroup>
                <ClockOutlinedIcon />
                <Typography
                  variant="caption"
                  sx={{ ml: 1 }}
                  color="text.primary text-nowrap"
                >
                  Select Tolerance Level
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4} md={9} sm={11}>
              <ButtonGroup
                label="Split schedule using social distancing?"
                options={["Yes", "No"]}
                defaultIndex={0}
              />
              <CustomizedLine className="w-60" />

              <Typography variant="caption">Location Checking:</Typography>
              <Typography color="#109D59 !important" className="!text-xs">
                All Available!
              </Typography>
              <CustomizedLine className="w-60" />

              <ButtonGroup
                label="Client:"
                options={["Single", "Multiple"]}
                defaultIndex={1}
              />
              <SelectBoxGroup />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <Typography variant="body1" className="mb-5">
                Data in the import file is correct. Please press Continue to
                import.
              </Typography>
            </Grid>
            
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className="round-lg text-nowrap w-52 h-10"
              >
                Continue Import
              </Button>
              <Button
                variant="outlined"
                color="warning"
                className="round-xl border-2 w-52 h-10"
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </CustomizedDialog>
    </div>
  );
};

export default DashboardPage;
