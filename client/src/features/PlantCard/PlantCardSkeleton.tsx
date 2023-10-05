import { FC } from "react";
import StyledPlantCard, {
    StyledCardMedia,
    StyledPlantCardButton,
    StyledPlantCardContent,
    StyledPlantCardImage,
} from "./PlantCard.style";
import { PlantImageSize } from "shared/types/plantCard";
import { Skeleton } from "@mui/material";

type PlantCardSkeletonProps = {
    vertical?: boolean;
    size: PlantImageSize;
};

const PlantCardSkeleton: FC<PlantCardSkeletonProps> = (props) => {
    const { vertical = false, size } = props;

    return (
        <StyledPlantCard>
            <StyledPlantCardButton vertical={Number(vertical)}>
                <StyledPlantCardImage size={size}>
                    <StyledCardMedia component="" image="">
                        <Skeleton
                            sx={{ height: "100%", transform: "scale(1)" }}
                        />
                    </StyledCardMedia>
                </StyledPlantCardImage>

                <StyledPlantCardContent>
                    <Skeleton sx={{ transform: "scale(1)" }} />
                    <Skeleton sx={{ transform: "scale(1)", marginTop: 1 }} />
                </StyledPlantCardContent>
            </StyledPlantCardButton>
        </StyledPlantCard>
    );
};

export default PlantCardSkeleton;
