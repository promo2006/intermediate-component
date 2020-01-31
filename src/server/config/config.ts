import * as path from 'path';
// Ubicación donde se alojaran la carpeta audio, donde se alojaran todos lo archivos de un proceso de tipo ftp.
export const PATH_FOLDER_PROCESS_AUDIO: string = path.resolve(__dirname, '..', 'audio').replace(/\\/g, '/');
export const PATH_FOLDER_PROCESS_AUDIO_PLAY: string = path.resolve(__dirname, '../../', 'server/audio').replace(/\\/g, '/');

// Variable de configuración para guardar archivos de audio de transcripciones de tipo allegro.
export const PATH_FOLDER_TEMP_AUDIO: string = path.resolve(__dirname, '..', 'temp-audio').replace(/\\/g, '/');

// Variable de configuración para guardar archivos de transcripción.
export const TRANSCRIPTION_FOLDER: string = path.resolve(__dirname, '..', 'transcriptions').replace(/\\/g, '/');

// Variable de configuración para guardar archivos de análisis semántico.
export const SEMANCTIC_ANALYSIS_FOLDER: string = path.resolve(__dirname, '..', 'semantic-analysis').replace(/\\/g, '/');

// Variable de configuración para guardar archivos de análisis semántico.
export const COGNITIVE_ANALYSIS_FOLDER: string = path.resolve(__dirname, '..', 'cognitive-analysis').replace(/\\/g, '/');

// Variable de configuración para guardar archivos de análisis semántico.
export const SEMANCTIC_ANALYSIS_VIEW_FOLDER: string = path.resolve(__dirname, '..', 'semantic-analysis-view').replace(/\\/g, '/');

// Variable de configuración para guardar archivos de transcripción.
export const QUERY_FOLDER: string = path.resolve(__dirname, '..', 'query').replace(/\\/g, '/');

// Variable de configuración para obtener extensión de archivo de acuerdo al MIME Type, cuando se obtiene desde endpoint de allegro para obtener audio de interacción.
export const AUDIO_FORMAT: any = {
	'audio/mpeg': 'mp3',
	'audio/wav': 'wav',
	'audio/x-wav': 'wav',
};

//Tiempo duracion de las temporales
export const PERSISTENCE: number = 2 * 24 * 60 * 60;

// Variable de configuración para implementación Supervisor.
export const RATIO_SUPERVISOR: number = 0;

// Variables de configuración para implementación Process.
export const RATIO_PROCESS: number = 3;
export const RATE_RECURSIVE_PROCESS: number = 4;

// Variables de configuración para implementación Audios.
export const RATIO_AUDIO_TRANSFER: number = 20;
export const SLEEP_AUDIO_TRANSFER: number = 5;
export const RETRY_AUDIO_TRANSFER : number = 3;
export const RATE_RECURSIVE_AUDIO_TRANSFER: number = 4;

// Variables de configuración para implementación Transcription.
export const RATIO_TRANSCRIPTION: number = 5;
export const SLEEP_TRANSCRIPTION: number = 5;
export const RETRY_TRANSCRIPTION: number = 10;
export const NEXT_EXECUTION_TIME_TRANSCRIPTION: number = 120000; // 2 minutos.
export const RATE_RECURSIVE_TRANSCRIPTION: number = 4;

// Variables de configuración para implementación SemanticAnalysis.
export const RATIO_SEMANTIC_ANALYSIS: number = 5;
export const SLEEP_SEMANTIC_ANALYSIS: number = 5;
export const RETRY_SEMANTIC_ANALYSIS: number = 10;
export const NEXT_EXECUTION_TIME_SEMANTIC_ANALYSIS: number = 120000; // 2 minutos.
export const RATE_RECURSIVE_SEMANTIC_ANALYSIS: number = 4;

// Variables de configuración para implementación SemanticQuery.
export const RATIO_SEMANTIC_QUERY: number = 3;
export const RATE_RECURSIVE_SEMANTIC_QUERY: number = 4;
export const RETRY_SEMANTIC_QUERY: number = 3;

// Variables de configuración para implementación CognitiveAnalysis.
export const RATIO_COGNITIVE_ANALYSIS: number = 3;
export const RATE_RECURSIVE_COGNITIVE_ANALYSIS : number = 3;
export const RETRY_COGNITIVE_ANALYSIS: number = 10;
export const MIN_VALUE: number = 0;

// SpeechMatics:
export const SPEECHMATICS_IP: string = '';
export const SPEECHMATICS_PORT: string = '';

// IDATHA:
export const IDATHA_USER: string = '';
export const IDATHA_PASSWORD: string = '';
export const IDATHA_IP: string = '';
export const IDATHA_HTTP_PORT: string = '';
export const IDATHA_SSH_PORT: string = '';

// Variable de idioma de transcripción para SpeechMatics.
export const TRANSCRIPTION_LANGUAGE: string = 'es';

// Variable de configuración para establecer la cantidad de audios a enviar a transcribir.
export const RATIO: number = 5;

// Variable de configuración que indica cada cuánto tiempo de consulta a SpeechMatics, por el estatus de un job.
export const INTERVAL: number = 5;

// Variable de configuración para separación de frases.
export const PHRASE_MAX_LENGTH: number = 500;

export const PROCESS_FOLDER: string = 'process';
export const PROCESS_TEMP_PREFIX: string = 'temp';
export const PROCESS_TEMP_FOLDER: string = 'temp';
export const PROCESS_PATH: string = path.resolve(__dirname, '..', PROCESS_FOLDER);
export const TEMP_PATH: string = path.resolve(__dirname, '..', PROCESS_TEMP_FOLDER);
export const PROCESS_TEMP_PATH: string = path.resolve(TEMP_PATH, PROCESS_FOLDER);

// Variable para establecer connection timeout para FTP. Tiempo por defecto de 30 segundos.
export const FTP_CONNECTION_TIMEOUT: number = 30000;

export const PROCESS_DOWNLOAD_PREFIX: string = 'download';
export const VIEWS_FOLDER: string = 'views';
export const PROCESS_VIEWS_PATH: string = path.resolve(__dirname, '..', PROCESS_FOLDER, VIEWS_FOLDER);

// Variables.
export const SPEECHMATICS_FILES_AMOUNT: number = 5;
export const IDATHA_QUERY_ID_EXPIRATION: number = 58;
export const PROCESS_ID_LENGTH: number = 50;
export const STUDY_ID_LENGTH: number = 200;
export const REALM_USER_NAME: string = '';
export const REALM_PASSWORD: string = '';
export const THRESHOLD: number = 0.00000005;

// Cognitive Services.
export const COGNITIVE_SERVICES_ENGINE: string = 'LUIS';

// Azure LUIS.
export const LUIS_URL: string = '';
export const LUIS_URL_STUDY: string = '';

// Quality.
export const QUALITY_AUDIO_BASE_URL: string = process.env.QUALITY_AUDIO_URL ? process.env.QUALITY_AUDIO_URL : '';
export const QUALITY_MAIL_BASE_URL: string = process.env.QUALITY_MAIL_BASE_URL ? process.env.QUALITY_MAIL_BASE_URL : '';
export const QUALITY_TEXT_BASE_URL: string = process.env.QUALITY_TEXT_URL ? process.env.QUALITY_TEXT_URL : '';
export const QUALITY_TEXT_PRIVATE_BASE_URL: string = process.env.QUALITY_TEXT_PRIVATE_BASE_URL ? process.env.QUALITY_TEXT_PRIVATE_BASE_URL : '';
export const INCONCERT_APPS_BASE_URL: string = '';


// Variable de configuración para subida de archivo .lic.
export const LICENSE_FOLDER: string = 'license';
export const LICENSE_TEMP_PREFIX: string = 'temp';
export const LICENSE_TEMP_PATH: string = path.resolve(__dirname, '..', LICENSE_FOLDER);

