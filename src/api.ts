// import axios from 'axios';
// import * as qs from 'querystring';
// import {
//     INewsApiEverythingParams,
// 	INewsApiResponse,
// 	INewsApiSourceParams,
// 	INewsApiSourcesResponse,
// 	INewsApiTopHeadlinesParams
// } from './model/berita.interface'


export const API_KEY = '1b0b4135cf674552bebbdd431169807f';
export const API_URL = 'https://newsapi.org/v2/everything?';

// export default class BeritaApi {
//     static getEverything(arg0: { q: string; from: string; to: string; language: string; sortBy: string; }) {
//       throw new Error('Method not implemented.');
//     }
//     private static _URL: string = 'http://newsapi.org/v2';
//     private readonly _apiKey: string= API_KEY;
//     constructor(apiKey: string) {
//         this._apiKey = apiKey;
//     }

//     public async getTopHeadlines(params: INewsApiTopHeadlinesParams={ }): Promise<INewsApiResponse> {
//         const endpoint = `${BeritaApi._URL}/top-headlines`;

//         if(params.sources && params.sources.length){
//             if(params.country){
//                 throw new Error('oops, you can\'t use both sources and country');
//             }
//             if(params.category){
//                 throw new Error('oops, you can\'t use both sources and category');
//             }
//         }
//         const queries: Array<string> = [qs.stringify({apiKey:this._apiKey})];
//         if(params.q){
//             queries.push(qs.stringify({q:params.q}));
//         }
//         if(params.country){
//             queries.push(qs.stringify({country:params.country}));
//         }
//         if(params.category){
//             queries.push(qs.stringify({category:params.category}));
//         }
//         if(params.sources && params.sources.length){
//             queries.push(qs.stringify({sources:params.sources.join(',')}));
//         }
//         if(params.pageSize){
//             queries.push(qs.stringify({pageSize:params.pageSize}));
//         }
//         if(params.page){
//             queries.push(qs.stringify({page:params.page}));
//         }
//         const response = await axios.get<INewsApiResponse>(`${endpoint}?${queries.join('&')}`);
//         console.log(response.data);
//         return response.data;
//     }
//     public async getEverything(params: INewsApiEverythingParams={ }): Promise<INewsApiResponse> {
//         const endpoint = `${BeritaApi._URL}/everything`;
//         const queries: Array<string> = [qs.stringify({apiKey:this._apiKey})];
//         if(params.q){
//             queries.push(qs.stringify({q:params.q}));
//         }
//         if(params.qInTitle){
//             queries.push(qs.stringify({qInTitle:params.qInTitle}));
//         }
//         if(params.sources && params.sources.length){
//             queries.push(qs.stringify({sources:params.sources.join(',')}));
//         }
//         if(params.domains && params.domains.length){
//             queries.push(qs.stringify({domains:params.domains.join(',')}));
//         }
//         if(params.excludeDomains && params.excludeDomains.length){
//             queries.push(qs.stringify({excludeDomains:params.excludeDomains.join(',')}));
//         }
//         if(params.from){
//             queries.push(qs.stringify({from:params.from}));
//         }
//         if(params.to){
//             queries.push(qs.stringify({to:params.to}));
//         }
//         if(params.language){
//             queries.push(qs.stringify({language:params.language}));
//         }
//         if(params.sortBy){
//             queries.push(qs.stringify({sortBy:params.sortBy}));
//         }
//         if(params.pageSize){
//             queries.push(qs.stringify({pageSize:params.pageSize}));
//         }
//         if(params.page){
//             queries.push(qs.stringify({page:params.page}));
//         }
//         const response = await axios.get<INewsApiResponse>(`${endpoint}?${queries.join('&')}`);
//         console.log(response.data);
//         return response.data;
//     }
//     public async getSources(params: INewsApiSourceParams={ }): Promise<INewsApiSourcesResponse> {
//         const endpoint = `${BeritaApi._URL}/sources`;
//         const queries: Array<string> = [qs.stringify({apiKey:this._apiKey})];

//         if(params.category){
//             queries.push(qs.stringify({category:params.category}));
//         }
//         if(params.language){
//             queries.push(qs.stringify({language:params.language}));
//         }
//         if(params.country){
//             queries.push(qs.stringify({country:params.country}));
//         }
//         const response = await axios.get<INewsApiSourcesResponse>(`${endpoint}?${queries.join('&')}`);
//         console.log(response.data);
//         return response.data;
//     }
// }

