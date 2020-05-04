import * as jspb from "google-protobuf"

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class BlockStorage extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  getState(): BlockStorage.BlockStorageState;
  setState(value: BlockStorage.BlockStorageState): void;

  getNodeName(): string;
  setNodeName(value: string): void;

  getStorageName(): string;
  setStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStorage.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStorage): BlockStorage.AsObject;
  static serializeBinaryToWriter(message: BlockStorage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStorage;
  static deserializeBinaryFromReader(message: BlockStorage, reader: jspb.BinaryReader): BlockStorage;
}

export namespace BlockStorage {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
    state: BlockStorage.BlockStorageState,
    nodeName: string,
    storageName: string,
  }

  export enum BlockStorageState {
    BLOCK_STORAGE_UNSPECIFIED = 0,
    PENDING = 1,
    AVAILABLE = 2,
    IN_USE = 3,
    PROTECTED = 4,
    DELETED = 5,
  }
}

export class BlockStorageChunk extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStorageChunk.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStorageChunk): BlockStorageChunk.AsObject;
  static serializeBinaryToWriter(message: BlockStorageChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStorageChunk;
  static deserializeBinaryFromReader(message: BlockStorageChunk, reader: jspb.BinaryReader): BlockStorageChunk;
}

export namespace BlockStorageChunk {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class CreateBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlockStorageRequest): CreateBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlockStorageRequest;
  static deserializeBinaryFromReader(message: CreateBlockStorageRequest, reader: jspb.BinaryReader): CreateBlockStorageRequest;
}

export namespace CreateBlockStorageRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
  }
}

export class FetchBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  getSourceUrl(): string;
  setSourceUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockStorageRequest): FetchBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: FetchBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockStorageRequest;
  static deserializeBinaryFromReader(message: FetchBlockStorageRequest, reader: jspb.BinaryReader): FetchBlockStorageRequest;
}

export namespace FetchBlockStorageRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
    sourceUrl: string,
  }
}

export class CopyBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  getSourceBlockStorage(): string;
  setSourceBlockStorage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyBlockStorageRequest): CopyBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: CopyBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyBlockStorageRequest;
  static deserializeBinaryFromReader(message: CopyBlockStorageRequest, reader: jspb.BinaryReader): CopyBlockStorageRequest;
}

export namespace CopyBlockStorageRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
    sourceBlockStorage: string,
  }
}

export class ListBlockStoragesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlockStoragesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlockStoragesRequest): ListBlockStoragesRequest.AsObject;
  static serializeBinaryToWriter(message: ListBlockStoragesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlockStoragesRequest;
  static deserializeBinaryFromReader(message: ListBlockStoragesRequest, reader: jspb.BinaryReader): ListBlockStoragesRequest;
}

export namespace ListBlockStoragesRequest {
  export type AsObject = {
  }
}

export class ListBlockStoragesResponse extends jspb.Message {
  getBlockStoragesList(): Array<BlockStorage>;
  setBlockStoragesList(value: Array<BlockStorage>): void;
  clearBlockStoragesList(): void;
  addBlockStorages(value?: BlockStorage, index?: number): BlockStorage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlockStoragesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlockStoragesResponse): ListBlockStoragesResponse.AsObject;
  static serializeBinaryToWriter(message: ListBlockStoragesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlockStoragesResponse;
  static deserializeBinaryFromReader(message: ListBlockStoragesResponse, reader: jspb.BinaryReader): ListBlockStoragesResponse;
}

export namespace ListBlockStoragesResponse {
  export type AsObject = {
    blockStoragesList: Array<BlockStorage.AsObject>,
  }
}

export class GetBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockStorageRequest): GetBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockStorageRequest;
  static deserializeBinaryFromReader(message: GetBlockStorageRequest, reader: jspb.BinaryReader): GetBlockStorageRequest;
}

export namespace GetBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockStorageRequest): UpdateBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockStorageRequest;
  static deserializeBinaryFromReader(message: UpdateBlockStorageRequest, reader: jspb.BinaryReader): UpdateBlockStorageRequest;
}

export namespace UpdateBlockStorageRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
  }
}

export class DeleteBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlockStorageRequest): DeleteBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlockStorageRequest;
  static deserializeBinaryFromReader(message: DeleteBlockStorageRequest, reader: jspb.BinaryReader): DeleteBlockStorageRequest;
}

export namespace DeleteBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeleteBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteBlockStorageRequest): UndeleteBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteBlockStorageRequest;
  static deserializeBinaryFromReader(message: UndeleteBlockStorageRequest, reader: jspb.BinaryReader): UndeleteBlockStorageRequest;
}

export namespace UndeleteBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class PurgeBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeBlockStorageRequest): PurgeBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: PurgeBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeBlockStorageRequest;
  static deserializeBinaryFromReader(message: PurgeBlockStorageRequest, reader: jspb.BinaryReader): PurgeBlockStorageRequest;
}

export namespace PurgeBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class SetInuseBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetInuseBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetInuseBlockStorageRequest): SetInuseBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: SetInuseBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetInuseBlockStorageRequest;
  static deserializeBinaryFromReader(message: SetInuseBlockStorageRequest, reader: jspb.BinaryReader): SetInuseBlockStorageRequest;
}

export namespace SetInuseBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class SetAvailableBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAvailableBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAvailableBlockStorageRequest): SetAvailableBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: SetAvailableBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAvailableBlockStorageRequest;
  static deserializeBinaryFromReader(message: SetAvailableBlockStorageRequest, reader: jspb.BinaryReader): SetAvailableBlockStorageRequest;
}

export namespace SetAvailableBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class SetProtectedBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProtectedBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetProtectedBlockStorageRequest): SetProtectedBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: SetProtectedBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProtectedBlockStorageRequest;
  static deserializeBinaryFromReader(message: SetProtectedBlockStorageRequest, reader: jspb.BinaryReader): SetProtectedBlockStorageRequest;
}

export namespace SetProtectedBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class DownloadBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadBlockStorageRequest): DownloadBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadBlockStorageRequest;
  static deserializeBinaryFromReader(message: DownloadBlockStorageRequest, reader: jspb.BinaryReader): DownloadBlockStorageRequest;
}

export namespace DownloadBlockStorageRequest {
  export type AsObject = {
    name: string,
  }
}

export class DownloadBlockStorageResponse extends jspb.Message {
  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadBlockStorageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadBlockStorageResponse): DownloadBlockStorageResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadBlockStorageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadBlockStorageResponse;
  static deserializeBinaryFromReader(message: DownloadBlockStorageResponse, reader: jspb.BinaryReader): DownloadBlockStorageResponse;
}

export namespace DownloadBlockStorageResponse {
  export type AsObject = {
    downloadUrl: string,
  }
}
