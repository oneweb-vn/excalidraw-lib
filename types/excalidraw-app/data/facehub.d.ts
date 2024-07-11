import { FileId } from "../../element/types";
import { BinaryFileData } from "../../types";
export declare const configBackendAPI: (backendURL: string) => void;
export declare const saveFilesToMongo: ({ roomId, files, }: {
    roomId: string;
    files: Map<FileId, BinaryFileData>;
}) => Promise<{
    savedFiles: Map<FileId, true>;
    erroredFiles: Map<FileId, true>;
}>;
export declare const loadFilesFromMongo: (roomID: string, filesIds: readonly FileId[]) => Promise<{
    loadedFiles: BinaryFileData[];
    erroredFiles: Map<FileId, true>;
}>;
