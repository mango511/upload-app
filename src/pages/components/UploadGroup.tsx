import { useState, ChangeEvent, useRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { calculateFileSize } from "../../utils/calculateFileSize";
import { FileUploader } from "react-drag-drop-files";
import DescriptionIcon from "@mui/icons-material/Description";
import PhotoIcon from "@mui/icons-material/Photo";
import CustomizedLine from "../../shared-components/CustomizedLine";

// Interface for file information
interface FileInfoType {
  name: string;
  size: string;
}

const CustomizedButton = styled(Button)({
  padding: "5px 35px",
  position: "relative",
});

const CustomizedFormControl = styled(FormControl)({
  "& .MuiInputLabel-root": {
    color: "#1C3E6E",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "23px",
    marginTop: "-3px"
  },
  "&.MuiFormControl-root": {
    minWidth: "100% !important",
  },
  "& .css-14lo706": {
    fontSize: "15px !important",
  },
});

const CustomizedLinearProgress = styled(LinearProgress)({
  "& .MuiLinearProgress-bar1Buffer": {
    background: "#FA9D26 !important",
  },
});

const HiddenInput = styled("input")({
  visibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 155,
  height: 30,
  cursor: "pointer",
  "& #file-upload-button": {
    cursor: "pointer !important",
  },
});

const UploadGroup = () => {
  const [name, setName] = useState("");
  const [fileInfo, setFileInfo] = useState<FileInfoType>({
    name: "",
    size: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);

  // Event handler for select input change
  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };

  // Event handler for file input change
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileInfo({ name: file.name, size: calculateFileSize(file.size) });
    }
  };

  // Event handler for file upload
  const handleUploadFile = (file: any) => {
    setFileInfo({ name: file.name, size: calculateFileSize(file.size) });
  };

  // Event handler for button click to trigger file input
  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <CustomizedFormControl sx={{ mr: 1, my: 0.5, minWidth: 440 }} size="small">
        <InputLabel id="demo-select-small-label" sx={{ textAlign: "center" }}>
          Select Import Name:
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={name}
          label="Select Name"
          onChange={handleChange}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Name1">Name1</MenuItem>
          <MenuItem value="Name2">Name2</MenuItem>
          <MenuItem value="Name3">Name3</MenuItem>
        </Select>
      </CustomizedFormControl>

      <CustomizedLine className="w-60" />

      <Typography variant="caption">
        Select a manifest that you'd like to import
      </Typography>
      <div className="border border-solid border-gray rounded-md p-3 flex flex-col justify-center mt-2">
        <FileUploader
          handleChange={handleUploadFile}
          name="file"
          maxFileSize={1}
        >
          <div className="border border-dashed border-gray rounded-md text-center pt-6 pb-6 cursor-pointer">
            <DescriptionIcon color="warning" />
            <Typography
              variant="body2"
              className="text-primary !font-normal mt-1.5"
            >
              Drag & Drop Here Or <b>Browse</b>
            </Typography>
          </div>
        </FileUploader>
        <div className="m-auto pt-2">
          <CustomizedButton variant="contained" onClick={handleClick}>
            Upload Manifest
            <HiddenInput
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
            />
          </CustomizedButton>
        </div>
      </div>

      <CustomizedLine />

      {fileInfo.name !== "" && (
        <div className="flex flex-row items-center justify-stretch w-full">
          <PhotoIcon color="warning" className="mx-3" />
          <div className="w-full mr-3">
            <div className="flex justify-between space-x-0">
              <Typography color="text.primary" variant="body1">
                {fileInfo.name}
              </Typography>
              <Typography color="text.primary" variant="caption">
                <b>{fileInfo.size}</b>
              </Typography>
            </div>
            <CustomizedLinearProgress variant="buffer" value={5} />
          </div>
        </div>
      )}
    </>
  );
};

export default UploadGroup;
