export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      chat_with_file: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          file: string;
          filename: string;
          history_metadata: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          file: string;
          filename: string;
          history_metadata?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          file?: string;
          filename?: string;
          history_metadata?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'chat_with_file_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      chat_with_youtube: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          history_metadata: string | null;
          id: string;
          ingestion_done: boolean | null;
          style: string;
          summary: string | null;
          tone: string;
          transcription: string;
          url: string;
          user_id: string | null;
          video_title: string;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          history_metadata?: string | null;
          id?: string;
          ingestion_done?: boolean | null;
          style: string;
          summary?: string | null;
          tone: string;
          transcription: string;
          url: string;
          user_id?: string | null;
          video_title: string;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          history_metadata?: string | null;
          id?: string;
          ingestion_done?: boolean | null;
          style?: string;
          summary?: string | null;
          tone?: string;
          transcription?: string;
          url?: string;
          user_id?: string | null;
          video_title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'chat_with_youtube_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      content_creations: {
        Row: {
          created_at: string;
          id: string;
          results: string | null;
          style: string;
          topic: string;
          user_id: string | null;
          voice: string | null;
          word_limit: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          results?: string | null;
          style: string;
          topic: string;
          user_id?: string | null;
          voice?: string | null;
          word_limit?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          results?: string | null;
          style?: string;
          topic?: string;
          user_id?: string | null;
          voice?: string | null;
          word_limit?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'content_creations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      headshot_generations: {
        Row: {
          created_at: string;
          generation_id: string;
          id: string;
          image_urls: string[] | null;
          model_id: string;
          negative_prompt: string | null;
          prompt: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          generation_id: string;
          id?: string;
          image_urls?: string[] | null;
          model_id: string;
          negative_prompt?: string | null;
          prompt: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          generation_id?: string;
          id?: string;
          image_urls?: string[] | null;
          model_id?: string;
          negative_prompt?: string | null;
          prompt?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'headshot_generations_model_id_fkey';
            columns: ['model_id'];
            isOneToOne: false;
            referencedRelation: 'headshot_models';
            referencedColumns: ['model_id'];
          },
          {
            foreignKeyName: 'headshot_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      headshot_models: {
        Row: {
          created_at: string;
          eta: string;
          expires_at: string | null;
          id: string;
          images: string[];
          model_id: string;
          name: string;
          status: Database['public']['Enums']['headshotmodelstatus'];
          trained_at: string | null;
          type: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          eta: string;
          expires_at?: string | null;
          id?: string;
          images: string[];
          model_id: string;
          name: string;
          status?: Database['public']['Enums']['headshotmodelstatus'];
          trained_at?: string | null;
          type: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          eta?: string;
          expires_at?: string | null;
          id?: string;
          images?: string[];
          model_id?: string;
          name?: string;
          status?: Database['public']['Enums']['headshotmodelstatus'];
          trained_at?: string | null;
          type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'headshot_models_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      image_enhancer_upscaler: {
        Row: {
          created_at: string;
          error: string | null;
          id: string;
          input_image: string;
          output_image: string | null;
          prediction_id: string;
          type: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          id?: string;
          input_image: string;
          output_image?: string | null;
          prediction_id: string;
          type: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          id?: string;
          input_image?: string;
          output_image?: string | null;
          prediction_id?: string;
          type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'image_enhancer_upscaler_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      image_generations: {
        Row: {
          created_at: string;
          error: string | null;
          guidance: string;
          id: string;
          image_urls: string[] | null;
          inference: string;
          model: string;
          negative_prompt: string | null;
          no_of_outputs: string;
          prediction_id: string;
          prompt: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          guidance: string;
          id?: string;
          image_urls?: string[] | null;
          inference: string;
          model: string;
          negative_prompt?: string | null;
          no_of_outputs: string;
          prediction_id: string;
          prompt: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          guidance?: string;
          id?: string;
          image_urls?: string[] | null;
          inference?: string;
          model?: string;
          negative_prompt?: string | null;
          no_of_outputs?: string;
          prediction_id?: string;
          prompt?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'image_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      interior_designs: {
        Row: {
          created_at: string;
          error: string | null;
          id: string;
          image_urls: string[] | null;
          prediction_id: string;
          prompt: string;
          ref_image: string;
          room_type: string;
          theme: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_urls?: string[] | null;
          prediction_id: string;
          prompt: string;
          ref_image: string;
          room_type: string;
          theme: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_urls?: string[] | null;
          prediction_id?: string;
          prompt?: string;
          ref_image?: string;
          room_type?: string;
          theme?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'interior_designs_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      llamagpt: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          id: string;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'llamagpt_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      multillm_chatgpt: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          id: string;
          model: string | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          model?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          model?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'multillm_chatgpt_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      music_generations: {
        Row: {
          created_at: string;
          duration: number;
          error: string | null;
          genre: string;
          id: string;
          mood: string;
          music_url: string | null;
          prediction_id: string;
          prompt: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          duration: number;
          error?: string | null;
          genre: string;
          id?: string;
          mood: string;
          music_url?: string | null;
          prediction_id: string;
          prompt: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          duration?: number;
          error?: string | null;
          genre?: string;
          id?: string;
          mood?: string;
          music_url?: string | null;
          prediction_id?: string;
          prompt?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'music_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      qr_code_generations: {
        Row: {
          created_at: string;
          error: string | null;
          id: string;
          image_url: string | null;
          prompt: string;
          url: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_url?: string | null;
          prompt: string;
          url: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_url?: string | null;
          prompt?: string;
          url?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'qr_code_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      subscriptions: {
        Row: {
          active: boolean | null;
          amount: number | null;
          created_at: string;
          id: string;
          interval: Database['public']['Enums']['billingcycle'] | null;
          start_date: string | null;
          subscription_id: string | null;
          type: Database['public']['Enums']['subscriptiontype'];
          user_email: string;
          user_id: string;
        };
        Insert: {
          active?: boolean | null;
          amount?: number | null;
          created_at?: string;
          id?: string;
          interval?: Database['public']['Enums']['billingcycle'] | null;
          start_date?: string | null;
          subscription_id?: string | null;
          type?: Database['public']['Enums']['subscriptiontype'];
          user_email: string;
          user_id: string;
        };
        Update: {
          active?: boolean | null;
          amount?: number | null;
          created_at?: string;
          id?: string;
          interval?: Database['public']['Enums']['billingcycle'] | null;
          start_date?: string | null;
          subscription_id?: string | null;
          type?: Database['public']['Enums']['subscriptiontype'];
          user_email?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'subscriptions_user_email_fkey';
            columns: ['user_email'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['email'];
          },
          {
            foreignKeyName: 'subscriptions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      text_to_speech: {
        Row: {
          audio_url: string;
          content: string;
          created_at: string;
          id: string;
          model: string;
          title: string;
          user_id: string | null;
          voice: string;
        };
        Insert: {
          audio_url: string;
          content: string;
          created_at?: string;
          id?: string;
          model: string;
          title: string;
          user_id?: string | null;
          voice: string;
        };
        Update: {
          audio_url?: string;
          content?: string;
          created_at?: string;
          id?: string;
          model?: string;
          title?: string;
          user_id?: string | null;
          voice?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'text_to_speech_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          credits: number;
          email: string;
          full_name: string | null;
          id: string;
          plan: Database['public']['Enums']['subscriptiontype'];
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          credits?: number;
          email: string;
          full_name?: string | null;
          id: string;
          plan?: Database['public']['Enums']['subscriptiontype'];
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          credits?: number;
          email?: string;
          full_name?: string | null;
          id?: string;
          plan?: Database['public']['Enums']['subscriptiontype'];
        };
        Relationships: [];
      };
      voice_transcriptions: {
        Row: {
          audio_url: string | null;
          created_at: string;
          error: string | null;
          id: string;
          summary: string | null;
          transcription: string | null;
          transcription_id: string;
          user_id: string;
        };
        Insert: {
          audio_url?: string | null;
          created_at?: string;
          error?: string | null;
          id?: string;
          summary?: string | null;
          transcription?: string | null;
          transcription_id: string;
          user_id: string;
        };
        Update: {
          audio_url?: string | null;
          created_at?: string;
          error?: string | null;
          id?: string;
          summary?: string | null;
          transcription?: string | null;
          transcription_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'voice_transcriptions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      youtube_content_generator: {
        Row: {
          created_at: string;
          generated_content: Json | null;
          id: string;
          language: string | null;
          summary: string | null;
          transcription: string;
          url: string;
          user_id: string | null;
          youtube_title: string;
        };
        Insert: {
          created_at?: string;
          generated_content?: Json | null;
          id?: string;
          language?: string | null;
          summary?: string | null;
          transcription: string;
          url: string;
          user_id?: string | null;
          youtube_title: string;
        };
        Update: {
          created_at?: string;
          generated_content?: Json | null;
          id?: string;
          language?: string | null;
          summary?: string | null;
          transcription?: string;
          url?: string;
          user_id?: string | null;
          youtube_title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'youtube_content_generator_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      billingcycle: 'month' | 'year';
      headshotmodelstatus: 'processing' | 'finished';
      subscriptiontype: 'free' | 'standard' | 'premium';
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
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
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
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
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
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes'] | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
