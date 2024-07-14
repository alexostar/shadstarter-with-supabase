import { Database } from './schema';
export type PlacesTypes = Database['public']['Tables']['skogarkolefni']['Row'];
export type ArnaldsstadirTypes =
  Database['public']['Tables']['arnaldsstadir']['Row'];

// For makinging the type global:
// See for example https://blog.logrocket.com/using-next-js-with-typescript/
