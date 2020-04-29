/**
 * @fileoverview gRPC-Web generated client stub for n0stack.internal.n0core.provisioning.blockstorage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  CreateEmptyBlockStorageRequest,
  CreateEmptyBlockStorageResponse,
  DeleteBlockStorageRequest,
  FetchBlockStorageRequest,
  FetchBlockStorageResponse,
  ResizeBlockStorageRequest} from './agent_pb';

export class BlockStorageAgentServiceClient {
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

  methodInfoCreateEmptyBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateEmptyBlockStorageResponse,
    (request: CreateEmptyBlockStorageRequest) => {
      return request.serializeBinary();
    },
    CreateEmptyBlockStorageResponse.deserializeBinary
  );

  createEmptyBlockStorage(
    request: CreateEmptyBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateEmptyBlockStorageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.blockstorage.BlockStorageAgentService/CreateEmptyBlockStorage',
      request,
      metadata || {},
      this.methodInfoCreateEmptyBlockStorage,
      callback);
  }

  methodInfoFetchBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    FetchBlockStorageResponse,
    (request: FetchBlockStorageRequest) => {
      return request.serializeBinary();
    },
    FetchBlockStorageResponse.deserializeBinary
  );

  fetchBlockStorage(
    request: FetchBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FetchBlockStorageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.blockstorage.BlockStorageAgentService/FetchBlockStorage',
      request,
      metadata || {},
      this.methodInfoFetchBlockStorage,
      callback);
  }

  methodInfoDeleteBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteBlockStorageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBlockStorage(
    request: DeleteBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.blockstorage.BlockStorageAgentService/DeleteBlockStorage',
      request,
      metadata || {},
      this.methodInfoDeleteBlockStorage,
      callback);
  }

  methodInfoResizeBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ResizeBlockStorageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  resizeBlockStorage(
    request: ResizeBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.blockstorage.BlockStorageAgentService/ResizeBlockStorage',
      request,
      metadata || {},
      this.methodInfoResizeBlockStorage,
      callback);
  }

}

