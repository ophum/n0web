import * as jspb from "google-protobuf"

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as n0stack_provisioning_v0_block_storage_pb from './n0stack/provisioning/v0/block_storage_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class Image extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRegisteredBlockStoragesList(): Array<Image.RegisteredBlockStorage>;
  setRegisteredBlockStoragesList(value: Array<Image.RegisteredBlockStorage>): void;
  clearRegisteredBlockStoragesList(): void;
  addRegisteredBlockStorages(value?: Image.RegisteredBlockStorage, index?: number): Image.RegisteredBlockStorage;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    registeredBlockStoragesList: Array<Image.RegisteredBlockStorage.AsObject>,
    tagsMap: Array<[string, string]>,
  }

  export class RegisteredBlockStorage extends jspb.Message {
    getBlockStorageName(): string;
    setBlockStorageName(value: string): void;

    getRegisteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisteredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasRegisteredAt(): boolean;
    clearRegisteredAt(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisteredBlockStorage.AsObject;
    static toObject(includeInstance: boolean, msg: RegisteredBlockStorage): RegisteredBlockStorage.AsObject;
    static serializeBinaryToWriter(message: RegisteredBlockStorage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisteredBlockStorage;
    static deserializeBinaryFromReader(message: RegisteredBlockStorage, reader: jspb.BinaryReader): RegisteredBlockStorage;
  }

  export namespace RegisteredBlockStorage {
    export type AsObject = {
      blockStorageName: string,
      registeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class ListImagesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListImagesRequest): ListImagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListImagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImagesRequest;
  static deserializeBinaryFromReader(message: ListImagesRequest, reader: jspb.BinaryReader): ListImagesRequest;
}

export namespace ListImagesRequest {
  export type AsObject = {
  }
}

export class ListImagesResponse extends jspb.Message {
  getImagesList(): Array<Image>;
  setImagesList(value: Array<Image>): void;
  clearImagesList(): void;
  addImages(value?: Image, index?: number): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListImagesResponse): ListImagesResponse.AsObject;
  static serializeBinaryToWriter(message: ListImagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImagesResponse;
  static deserializeBinaryFromReader(message: ListImagesResponse, reader: jspb.BinaryReader): ListImagesResponse;
}

export namespace ListImagesResponse {
  export type AsObject = {
    imagesList: Array<Image.AsObject>,
  }
}

export class GetImageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetImageRequest): GetImageRequest.AsObject;
  static serializeBinaryToWriter(message: GetImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetImageRequest;
  static deserializeBinaryFromReader(message: GetImageRequest, reader: jspb.BinaryReader): GetImageRequest;
}

export namespace GetImageRequest {
  export type AsObject = {
    name: string,
  }
}

export class ApplyImageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyImageRequest): ApplyImageRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyImageRequest;
  static deserializeBinaryFromReader(message: ApplyImageRequest, reader: jspb.BinaryReader): ApplyImageRequest;
}

export namespace ApplyImageRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
  }
}

export class DeleteImageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteImageRequest): DeleteImageRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteImageRequest;
  static deserializeBinaryFromReader(message: DeleteImageRequest, reader: jspb.BinaryReader): DeleteImageRequest;
}

export namespace DeleteImageRequest {
  export type AsObject = {
    name: string,
  }
}

export class RegisterBlockStorageRequest extends jspb.Message {
  getImageName(): string;
  setImageName(value: string): void;

  getBlockStorageName(): string;
  setBlockStorageName(value: string): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterBlockStorageRequest): RegisterBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterBlockStorageRequest;
  static deserializeBinaryFromReader(message: RegisterBlockStorageRequest, reader: jspb.BinaryReader): RegisterBlockStorageRequest;
}

export namespace RegisterBlockStorageRequest {
  export type AsObject = {
    imageName: string,
    blockStorageName: string,
    tagsList: Array<string>,
  }
}

export class UnregisterBlockStorageRequest extends jspb.Message {
  getImageName(): string;
  setImageName(value: string): void;

  getBlockStorageName(): string;
  setBlockStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterBlockStorageRequest): UnregisterBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: UnregisterBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterBlockStorageRequest;
  static deserializeBinaryFromReader(message: UnregisterBlockStorageRequest, reader: jspb.BinaryReader): UnregisterBlockStorageRequest;
}

export namespace UnregisterBlockStorageRequest {
  export type AsObject = {
    imageName: string,
    blockStorageName: string,
  }
}

export class GenerateBlockStorageRequest extends jspb.Message {
  getImageName(): string;
  setImageName(value: string): void;

  getBlockStorageName(): string;
  setBlockStorageName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBlockStorageRequest): GenerateBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBlockStorageRequest;
  static deserializeBinaryFromReader(message: GenerateBlockStorageRequest, reader: jspb.BinaryReader): GenerateBlockStorageRequest;
}

export namespace GenerateBlockStorageRequest {
  export type AsObject = {
    imageName: string,
    blockStorageName: string,
    annotationsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
    tag: string,
  }
}

export class TagImageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  getRegisteredBlockStorageName(): string;
  setRegisteredBlockStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagImageRequest): TagImageRequest.AsObject;
  static serializeBinaryToWriter(message: TagImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagImageRequest;
  static deserializeBinaryFromReader(message: TagImageRequest, reader: jspb.BinaryReader): TagImageRequest;
}

export namespace TagImageRequest {
  export type AsObject = {
    name: string,
    tag: string,
    registeredBlockStorageName: string,
  }
}

export class UntagImageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UntagImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UntagImageRequest): UntagImageRequest.AsObject;
  static serializeBinaryToWriter(message: UntagImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UntagImageRequest;
  static deserializeBinaryFromReader(message: UntagImageRequest, reader: jspb.BinaryReader): UntagImageRequest;
}

export namespace UntagImageRequest {
  export type AsObject = {
    name: string,
    tag: string,
  }
}
