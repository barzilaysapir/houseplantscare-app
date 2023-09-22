import { Search, PhotoCameraRounded } from "@mui/icons-material";
import {
    Chip,
    Divider,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { FC, RefObject, useState } from "react";
import VisuallyHiddenInput from "styles/VisuallyHiddenInput";
import { StyledAddPlantDialogContent } from "./AddPlantDialog.style";
import i18n from "i18next";

type AddPlantDialogContentProps = {
    searchInputRef: RefObject<HTMLInputElement>;
};

const AddPlantDialogContent: FC<AddPlantDialogContentProps> = (props) => {
    const { searchInputRef } = props;

    const handleSearchInputBlur = (
        event: React.FocusEvent<HTMLInputElement>
    ) => {
        // searchInputRef.value = event.target.value;
    };

    const handleSearchInputFocus = (
        event: React.FocusEvent<HTMLInputElement>
    ) => {
        // searchInputRef.value = event.target.value;
        console.log(document.activeElement === searchInputRef.current);
    };

    const [image, setImage] = useState<string>("");

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <StyledAddPlantDialogContent>
            <TextField
                label={i18n.t("addPlants.searchByName")}
                // variant="filled"
                size="small"
                margin="normal"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                inputRef={searchInputRef}
                onFocus={handleSearchInputFocus}
                onBlur={handleSearchInputBlur}
                fullWidth
                autoFocus
                focused
            />
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl> */}

            <Divider>
                <Chip label={i18n.t("or")} />
            </Divider>

            <label className="pictureButton">
                <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={onImageChange}
                />
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                >
                    <PhotoCameraRounded fontSize="large" color="primary" />
                </IconButton>
                <Typography variant="caption" color="primary" display="block">
                    {i18n.t("addPlants.scanImage")}
                </Typography>
            </label>

            {/* <img alt="preview image" src={image} /> */}
        </StyledAddPlantDialogContent>
    );
};

export default AddPlantDialogContent;
