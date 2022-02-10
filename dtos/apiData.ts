import { StringMappingType } from "typescript";

export default interface ApiData {
  'access-token': string,
  client: string,
  expire: number,
  'token-type': string,
  udi: string
}