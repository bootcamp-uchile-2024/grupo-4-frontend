import { createContext, useContext, useEffect, useState } from "react";
import { IContextProperties, initialContext, initialContextProperties, ITContext } from "../types/context.type";
import { TostadoPerfectoProviderProps } from "../types/props.type";
import { getProducts } from "../services/fetchService";
import { ENDPOINT_PRODUCTS } from "../utils/config";

export const TostadoPerfectoContext = createContext<ITContext>(initialContext);

export const TostadoPerfectoProvider = ({
	children
}: TostadoPerfectoProviderProps) => {
    const [contextProperties, setContextProperties] = useState<IContextProperties>(initialContextProperties);

    const initialFetchData = async () => {

        const responseGetProducts = await getProducts(
            ENDPOINT_PRODUCTS
        );

        console.log('responseGetProducts:', responseGetProducts);

        if(responseGetProducts.status != 200) {
            setContextProperties({
                ...contextProperties,
                isLoading: false,
            });

            return;
        }

        setContextProperties({
            ...contextProperties,
            products: responseGetProducts.data,
            isLoading: false,
        });

    }

    useEffect(() => {
        
        try {
            
            initialFetchData();

        } catch (error) {
            
            console.error(error);
            setContextProperties({
                ...contextProperties,
                isLoading: false,
            });

        }
        
    }, []);

    return (
       <TostadoPerfectoContext.Provider 
            value={{ contextProperties }}>
            {children}
        </TostadoPerfectoContext.Provider>
    )
};

export const useTostadoPerfectoContext = () =>
	useContext<ITContext>(TostadoPerfectoContext);