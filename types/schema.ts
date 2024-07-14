import { LatLngExpression, LatLngTuple } from 'leaflet';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      arnaldsstadir: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          reiknivel: [];
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          reiknivel: [];
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          reiknivel?: [];
        };
        Relationships: [];
      };
      gudrun: {
        Row: {
          created_at: string;
          id: number;
          photo: string;
          phototext: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          photo: string;
          phototext?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          photo?: string;
          phototext?: string | null;
        };
        Relationships: [];
      };
      gudrunp: {
        Row: {
          created_at: string;
          id: number;
          photo: string;
          phototext: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          photo: string;
          phototext: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          photo?: string;
          phototext?: string;
        };
        Relationships: [];
      };
      images: {
        Row: {
          auto_id: number;
          created_at: string;
          id: string;
          path: string;
          title: string;
        };
        Insert: {
          auto_id?: number;
          created_at?: string;
          id: string;
          path: string;
          title: string;
        };
        Update: {
          auto_id?: number;
          created_at?: string;
          id?: string;
          path?: string;
          title?: string;
        };
        Relationships: [];
      };
      skogarkolefni: {
        Row: {
          albedo_color: string | null;
          albedo_snow: boolean | null;
          capture: number | null;
          certified: boolean | null;
          company: string;
          created_at: string;
          description: string | null;
          id: number;
          latlng: LatLngExpression | LatLngTuple;
          name: string;
          size: number | null;
          species: string | null;
          year: number | null;
        };
        Insert: {
          albedo_color?: string | null;
          albedo_snow?: boolean | null;
          capture?: number | null;
          certified?: boolean | null;
          company: string;
          created_at?: string;
          description?: string | null;
          id?: number;
          latlng: LatLngExpression | LatLngTuple;
          name: string;
          size?: number | null;
          species?: string | null;
          year?: number | null;
        };
        Update: {
          albedo_color?: string | null;
          albedo_snow?: boolean | null;
          capture?: number | null;
          certified?: boolean | null;
          company?: string;
          created_at?: string;
          description?: string | null;
          id?: number;
          latlng?: LatLngExpression | LatLngTuple;
          name?: string;
          size?: number | null;
          species?: string | null;
          year?: number | null;
        };
        Relationships: [];
      };
      steinadalur: {
        Row: {
          created_at: string;
          id: number;
          photo: string;
          phototext: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          photo: string;
          phototext: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          photo?: string;
          phototext?: string;
        };
        Relationships: [];
      };
      tasks: {
        Row: {
          createdAt: string;
          description: string | null;
          id: number;
          name: string;
          priority: string;
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          description?: string | null;
          id?: number;
          name: string;
          priority?: string;
          updatedAt?: string;
        };
        Update: {
          createdAt?: string;
          description?: string | null;
          id?: number;
          name?: string;
          priority?: string;
          updatedAt?: string;
        };
        Relationships: [];
      };
      todos: {
        Row: {
          created_at: string;
          id: number;
          text: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          text: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          text?: string;
        };
        Relationships: [];
      };
      vegir: {
        Row: {
          created_at: string;
          id: number;
          latlng: Json;
          longtext: string;
          name: string;
          path: string;
          shorttext: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          latlng: Json;
          longtext: string;
          name: string;
          path: string;
          shorttext: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          latlng?: Json;
          longtext?: string;
          name?: string;
          path?: string;
          shorttext?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
