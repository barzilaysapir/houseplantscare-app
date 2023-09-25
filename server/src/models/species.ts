import axios from "axios";
import { Plant, PlantCare, SpecieLight } from "utils/types";

const speciesAPI = `${Bun.env.BASE_URL}/species`;
const token = Bun.env.TREFLE_TOKEN;

export const getAllSpecies = async (): Promise<any | null> => {
    const response = await axios.get(speciesAPI, {
        params: {
            token,
        },
    });
    return response.data.data;
};

export const getSpeciesById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${speciesAPI}/${id}`, {
        params: {
            token,
        },
    });
    return response.data.data;
};

export const getSpeciesSearch = async (q: string): Promise<Plant[] | null> => {
    const response = await axios.get(`${speciesAPI}/search`, {
        params: {
            token,
            q,
        },
    });
    const data: Plant[] = response.data.data.map((specie: SpecieLight) => {
        return {
            id: specie.id,
            primaryName: specie.common_name || specie.scientific_name,
            commonName: specie.common_name || "",
            scientificName: specie.scientific_name || "",
            image: specie.image_url || "",
            care: {} as PlantCare,
        };
    });
    return data;
};
