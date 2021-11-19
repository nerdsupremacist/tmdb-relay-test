import type {
    StreamingLinkFormDataProviderQuery as StreamingLinkFormDataProviderQueryType,
} from './__generated__/StreamingLinkFormDataProviderQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import StreamingLinkFormDataProviderQuery from './__generated__/StreamingLinkFormDataProviderQuery.graphql';

import { Dispatch, SetStateAction, useContext } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';

import useLocalStorage from 'useLocalStorage';

import { useDebounce } from 'use-debounce/lib';

type LoadedProps = {
    data: PreloadedQuery<StreamingLinkFormDataProviderQueryType>
    children: React.ReactNode | React.ReactNode[]
}

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

interface ContextType {
    selectedCountries: string[],
    selectedProviders: string[],
    committedSelectedCountries: string[],
    committedSelectedProviders: string[],
    setSelectedCountries: Dispatch<SetStateAction<string[]>>,
    setSelectedProviders: Dispatch<SetStateAction<string[]>>,
    countries: string[],
    providers: string[],
}

const Context = React.createContext<ContextType>({
    committedSelectedCountries: [],
    committedSelectedProviders: [],
    countries: [],
    providers: [],
    selectedCountries: [],
    selectedProviders: [],
    setSelectedCountries: () => { /* no-op */ },
    setSelectedProviders: () => { /* no-op */ },
});

function StreamingLinkFormDataProvider(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query StreamingLinkFormDataProviderQuery {
                streaming {
                    myCountry {
                        id
                    }
                    countries {
                        name
                        id
                    }
                    providers {
                        id
                        name
                    }
                }
            }
        `,
        props.data,
    );

    const countries = useMemo(() => data.streaming.countries.map(country => country.name), [data.streaming.countries]);
    const providers = useMemo(() => data.streaming.providers.map(country => country.name), [data.streaming.providers]);

    const countryNameToId: Record<string, string> = useMemo(() => {
        return data.streaming.countries.reduce((acc, country) => ({ ...acc, [country.name]: country.id }), {});
    }, [data.streaming.countries]);

    const providerNameToId: Record<string, string> = useMemo(() => {
        return data.streaming.providers.reduce((acc, provider) => ({ ...acc, [provider.name]: provider.id }), {});
    }, [data.streaming.providers]);

    const defaultCountrySelection = useMemo(
        () => [data.streaming.myCountry?.id].compactMap(country => country),
        [data.streaming.myCountry],
    );

    const [
        selectedCountries,
        setSelectedCountries,
    ] = useLocalStorage<string[]>('selectedStreamingCountry', defaultCountrySelection);

    const [
        selectedProviders,
        setSelectedProviders,
    ] = useLocalStorage<string[]>('selectedStreamingProviders', []);

    const [committedSelectedCountryNames] = useDebounce(selectedCountries, 300);
    const [committedSelectedProviderNames] = useDebounce(selectedProviders, 300);

    const committedSelectedCountries = useMemo(
        () => committedSelectedCountryNames.compactMap(name => countryNameToId[name]),
        [committedSelectedCountryNames, countryNameToId],
    );

    const committedSelectedProviders = useMemo(
        () => committedSelectedProviderNames.compactMap(name => providerNameToId[name]),
        [committedSelectedProviderNames, providerNameToId],
    );

    return (
        <Context.Provider
            value={{
                committedSelectedCountries,
                committedSelectedProviders,
                countries,
                providers,
                selectedCountries,
                selectedProviders,
                setSelectedCountries,
                setSelectedProviders,
            }}>
            {props.children}
        </Context.Provider>
    );
}

function StreamingLinkFormDataProviderWrapper(props: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<StreamingLinkFormDataProviderQueryType>(StreamingLinkFormDataProviderQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery]);

    return (
        <LoadingSuspense boundaryRef={error}>
            {
                data != null && (
                    <StreamingLinkFormDataProvider data={data}>
                        {props.children}
                    </StreamingLinkFormDataProvider>
                )
            }
        </LoadingSuspense>
    );
}

export function useSelectedCountriesFormData(): [string[], Dispatch<SetStateAction<string[]>>] {
    const { selectedCountries, setSelectedCountries } = useContext(Context);
    return [selectedCountries, setSelectedCountries];
}

export function useSelectedProvidersFormData(): [string[], Dispatch<SetStateAction<string[]>>] {
    const { selectedProviders, setSelectedProviders } = useContext(Context);
    return [selectedProviders, setSelectedProviders];
}

export function useSelectedCountries(): string[] {
    const { committedSelectedCountries } = useContext(Context);
    return committedSelectedCountries;
}

export function useSelectedProviders(): string[] {
    const { committedSelectedProviders } = useContext(Context);
    return committedSelectedProviders;
}

export function useAvailableCountries(): string[] {
    const { countries } = useContext(Context);
    return countries;
}

export function useAvailableProviders(): string[] {
    const { providers } = useContext(Context);
    return providers;
}

export default StreamingLinkFormDataProviderWrapper;
