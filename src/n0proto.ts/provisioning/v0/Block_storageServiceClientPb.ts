/**
 * @fileoverview gRPC-Web generated client stub for n0stack.provisioning.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

import {
  BlockStorage,
  CopyBlockStorageRequest,
  CreateBlockStorageRequest,
  DeleteBlockStorageRequest,
  DownloadBlockStorageRequest,
  DownloadBlockStorageResponse,
  FetchBlockStorageRequest,
  GetBlockStorageRequest,
  ListBlockStoragesRequest,
  ListBlockStoragesResponse,
  PurgeBlockStorageRequest,
  SetAvailableBlockStorageRequest,
  SetInuseBlockStorageRequest,
  SetProtectedBlockStorageRequest,
  UndeleteBlockStorageRequest,
  UpdateBlockStorageRequest} from './block_storage_pb';

export class BlockStorageServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: CreateBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  createBlockStorage(
    request: CreateBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/CreateBlockStorage',
      request,
      metadata || {},
      this.methodInfoCreateBlockStorage,
      callback);
  }

  methodInfoFetchBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: FetchBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  fetchBlockStorage(
    request: FetchBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/FetchBlockStorage',
      request,
      metadata || {},
      this.methodInfoFetchBlockStorage,
      callback);
  }

  methodInfoCopyBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: CopyBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  copyBlockStorage(
    request: CopyBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/CopyBlockStorage',
      request,
      metadata || {},
      this.methodInfoCopyBlockStorage,
      callback);
  }

  methodInfoListBlockStorages = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBlockStoragesResponse,
    (request: ListBlockStoragesRequest) => {
      return request.serializeBinary();
    },
    ListBlockStoragesResponse.deserializeBinary
  );

  listBlockStorages(
    request: ListBlockStoragesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBlockStoragesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/ListBlockStorages',
      request,
      metadata || {},
      this.methodInfoListBlockStorages,
      callback);
  }

  methodInfoGetBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: GetBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  getBlockStorage(
    request: GetBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/GetBlockStorage',
      request,
      metadata || {},
      this.methodInfoGetBlockStorage,
      callback);
  }

  methodInfoUpdateBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: UpdateBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  updateBlockStorage(
    request: UpdateBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/UpdateBlockStorage',
      request,
      metadata || {},
      this.methodInfoUpdateBlockStorage,
      callback);
  }

  methodInfoDeleteBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: DeleteBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  deleteBlockStorage(
    request: DeleteBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/DeleteBlockStorage',
      request,
      metadata || {},
      this.methodInfoDeleteBlockStorage,
      callback);
  }

  methodInfoUndeleteBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: UndeleteBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  undeleteBlockStorage(
    request: UndeleteBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/UndeleteBlockStorage',
      request,
      metadata || {},
      this.methodInfoUndeleteBlockStorage,
      callback);
  }

  methodInfoPurgeBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: PurgeBlockStorageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  purgeBlockStorage(
    request: PurgeBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/PurgeBlockStorage',
      request,
      metadata || {},
      this.methodInfoPurgeBlockStorage,
      callback);
  }

  methodInfoDownloadBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    DownloadBlockStorageResponse,
    (request: DownloadBlockStorageRequest) => {
      return request.serializeBinary();
    },
    DownloadBlockStorageResponse.deserializeBinary
  );

  downloadBlockStorage(
    request: DownloadBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DownloadBlockStorageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/DownloadBlockStorage',
      request,
      metadata || {},
      this.methodInfoDownloadBlockStorage,
      callback);
  }

  methodInfoSetInuseBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: SetInuseBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  setInuseBlockStorage(
    request: SetInuseBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/SetInuseBlockStorage',
      request,
      metadata || {},
      this.methodInfoSetInuseBlockStorage,
      callback);
  }

  methodInfoSetAvailableBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: SetAvailableBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  setAvailableBlockStorage(
    request: SetAvailableBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/SetAvailableBlockStorage',
      request,
      metadata || {},
      this.methodInfoSetAvailableBlockStorage,
      callback);
  }

  methodInfoSetProtectedBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockStorage,
    (request: SetProtectedBlockStorageRequest) => {
      return request.serializeBinary();
    },
    BlockStorage.deserializeBinary
  );

  setProtectedBlockStorage(
    request: SetProtectedBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.BlockStorageService/SetProtectedBlockStorage',
      request,
      metadata || {},
      this.methodInfoSetProtectedBlockStorage,
      callback);
  }

}
