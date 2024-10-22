'use server';

import { AasSearcher, AasSearchResult } from 'lib/services/search-actions/AasSearcher';
import { AssetAdministrationShell } from '@aas-core-works/aas-core3.0-typescript/dist/types/types';
import { ApiResponseWrapper } from 'lib/services/apiResponseWrapper';
import { Submodel } from '@aas-core-works/aas-core3.0-typescript/types';
import { mnestixFetch } from 'lib/api/infrastructure';

export async function performFullAasSearch(searchInput: string): Promise<ApiResponseWrapper<AasSearchResult>> {
    const searcher = AasSearcher.create();
    return await searcher.performFullSearch(searchInput);
}

export async function getAasFromRepository(
    aasId: string,
    repositoryUrl: string,
): Promise<ApiResponseWrapper<AssetAdministrationShell>> {
    const searcher = AasSearcher.create();
    return await searcher.getAasFromRepository(aasId, repositoryUrl);
}

export async function performRegistryAasSearch(searchInput: string): Promise<ApiResponseWrapper<AasSearchResult>> {
    const searcher = AasSearcher.create();
    return await searcher.performRegistrySearch(searchInput);
}

export async function performDiscoveryAasSearch(searchInput: string): Promise<ApiResponseWrapper<string[]>> {
    const searcher = AasSearcher.create();
    return await searcher.performAasDiscoverySearch(searchInput);
}

export async function getSubmodelFromSubmodelDescriptor(url: string): Promise<ApiResponseWrapper<Submodel>> {
    const localFetch = mnestixFetch();
    return await localFetch.fetch<Submodel>(url, {
        method: 'GET',
    });
}
