/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_GOOGLE_MAPS_API_KEY: string;
    readonly PUBLIC_GOOGLE_MAPS_MAP_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
