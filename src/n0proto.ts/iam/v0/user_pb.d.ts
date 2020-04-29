import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class User extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getSshPublicKeysMap(): jspb.Map<string, string>;
  clearSshPublicKeysMap(): void;

  getState(): User.UserState;
  setState(value: User.UserState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    sshPublicKeysMap: Array<[string, string]>,
    state: User.UserState,
  }

  export enum UserState { 
    USER_UNSPECIFIED = 0,
    PENDING = 1,
    AVAILABLE = 2,
  }
}

export class ListUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
  }
}

export class ListUsersResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  clearUsersList(): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class GetUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    name: string,
  }
}

export class AddSshPublicKeyRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getSshPublicKeyName(): string;
  setSshPublicKeyName(value: string): void;

  getSshPublicKey(): string;
  setSshPublicKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSshPublicKeyRequest): AddSshPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: AddSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: AddSshPublicKeyRequest, reader: jspb.BinaryReader): AddSshPublicKeyRequest;
}

export namespace AddSshPublicKeyRequest {
  export type AsObject = {
    userName: string,
    sshPublicKeyName: string,
    sshPublicKey: string,
  }
}

export class DeleteSshPublicKeyRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getSshPublicKeyName(): string;
  setSshPublicKeyName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSshPublicKeyRequest): DeleteSshPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: DeleteSshPublicKeyRequest, reader: jspb.BinaryReader): DeleteSshPublicKeyRequest;
}

export namespace DeleteSshPublicKeyRequest {
  export type AsObject = {
    userName: string,
    sshPublicKeyName: string,
  }
}

