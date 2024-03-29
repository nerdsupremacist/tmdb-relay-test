
import type { ReactNode, RefObject } from 'react';
import type { FallbackProps } from 'react-error-boundary';

import React from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

import Placeholder from './Placeholder';

type Props = {
    children: ReactNode | Array<ReactNode>,
    boundaryRef?: RefObject<ErrorBoundary>
}

function ErrorFallback({ error }: FallbackProps) {
    return (
        <Alert
            alignItems="center"
            borderRadius="xl"
            flexDirection="column"
            justifyContent="center"
            minH="200px"
            padding="16px"
            status="error"
            textAlign="center"
            variant="subtle"
        >
            <AlertIcon />
            <AlertTitle mr={2}>An Error Occurred</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
        </Alert>
    );
}

function LoadingSuspense({ children, boundaryRef }: Props) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            ref={boundaryRef}
        >
            <Suspense fallback={<Placeholder />}>
                {children !== [] ? children : <Placeholder />}
            </Suspense>
        </ErrorBoundary>
    );
}

export default LoadingSuspense;
