import styled from "@emotion/styled";
import {
    Box,
    CardActionArea,
    CardContent,
    CardMedia,
    Paper,
} from "@mui/material";
import theme from "config/theme";
import { PlantImageSize } from "shared/types/plantCard";

type StyledCardImageProps = {
    size: PlantImageSize;
};

type StyledCardMediaProps = React.ImgHTMLAttributes<HTMLButtonElement> & {
    component: string;
    image: string;
};

type StyledCardProps = {
    vertical: number;
};

export const StyledPlantCardImage = styled(Box)<StyledCardImageProps>`
    border-radius: inherit;
    flex-basis: ${({ size }) => {
        switch (size) {
            case PlantImageSize.SMALL:
                return "80px;";
            case PlantImageSize.MEDIUM:
                return "140px;";
            case PlantImageSize.LARGE:
                return "200px;";
            default:
                break;
        }
    }};
`;

export const StyledCardMedia = styled(CardMedia)<StyledCardMediaProps>`
    border-radius: inherit;
    aspect-ratio: 1 / 1;
`;

export const StyledPlantCardContent = styled(CardContent)`
    padding: 5px 10px;
    flex: 1;
    min-width: 0;
    :last-child {
        padding-bottom: 5px;
    }
`;

export const StyledPlantCardButton = styled(CardActionArea)<StyledCardProps>`
    display: flex;
    height: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
    flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
`;

const StyledPlantCard = styled(Paper)`
    padding: ${theme.spacing(1)};
    border-radius: ${theme.spacing(2)};
    box-shadow: 0px 0px 10px rgb(173 173 173 / 0.2);
`;

export default StyledPlantCard;
