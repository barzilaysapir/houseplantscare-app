import { FC } from "react";
import EmptyState from "components/EmptyState";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router";
import { MyPlantsOutletContext } from "shared/types/UI";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useFetchData from "shared/hooks/useFetchData";
import SitesList from "./SitesList/SitesList";
import LoaderBackdrop from "components/LoaderBackdrop";

const SitesTab: FC = () => {
    const user = JSON.parse(useLocalStorage().user);
    const { handleOpen } = useOutletContext<MyPlantsOutletContext>();

    const { loading, data } = useFetchData({
        keys: ["userSites"],
        url: `/users/${user!._id}/sites`,
    });

    if (loading) return <LoaderBackdrop />;

    if (data.length === 0)
        return (
            <EmptyState
                handleOpen={handleOpen}
                callToAction={{
                    label: i18n.t("myPlants.sites.emptyState"),
                }}
            />
        );

    return <SitesList data={data} />;
};

export default SitesTab;
