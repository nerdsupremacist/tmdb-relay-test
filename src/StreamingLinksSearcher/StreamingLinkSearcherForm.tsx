
import React, { useMemo } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import {
    useAvailableCountries,
    useAvailableProviders,
    useSelectedCountriesFormData,
    useSelectedProvidersFormData,
} from './StreamingLinkFormDataProvider';

import { MultiSelect } from 'chakra-multiselect';

function StreamingLinkSearcherForm() {
    const countryOptions = useAvailableCountries();
    const providerOptions = useAvailableProviders();

    const [selectedCountries, setSelectedCountries] = useSelectedCountriesFormData();
    const [selectedProviders, setSelectedProviders] = useSelectedProvidersFormData();

    const countryItems = useMemo(() => {
        return countryOptions.map(value => ({ label: value, value }));
    }, [countryOptions]);

    const providerItems = useMemo(() => {
        return providerOptions.map(value => ({ label: value, value }));
    }, [providerOptions]);

    return (
        <VStack padding="4vh" w="100%">
            <Text fontSize="2xl" fontWeight="bold">
                Search for Streams
            </Text>
            <Text align="start" fontSize="sm" fontWeight="light" w="100%">
                Find the best way to watch what you want to watch!
            </Text>
            <Text align="start" fontSize="md" fontWeight="semibold" w="100%">
                Streaming Services
            </Text>
            <Text align="start" fontSize="sm" fontWeight="light" w="100%">
                Select the Streaming Services you have access to
            </Text>
            <MultiSelect
                onChange={value => {
                    setSelectedProviders(value as (string[]));
                }}
                options={providerItems}
                placeholder="Netflix, Disney Plus, Apple TV Plus"
                value={selectedProviders}
            />
            <Text align="start" fontSize="md" fontWeight="semibold" w="100%">
                Countries
            </Text>
            <Text align="start" fontSize="sm" fontWeight="light" w="100%">
                Select the countries in which you would like to watch.
            </Text>
            <MultiSelect
                onChange={value => {
                    setSelectedCountries(value as (string[]));
                }}
                options={countryItems}
                placeholder="United Stated, United Kingdom, ..."
                value={selectedCountries}
            />
            <Text align="end" fontSize="sm" fontWeight="light" w="100%">
                If you have access to a VPN Service, you can enter multiple countries.
            </Text>
        </VStack>
    );
}

export default StreamingLinkSearcherForm;
