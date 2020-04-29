/**
 * @fileoverview gRPC-Web generated client stub for n0stack.pool.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
//import * as n0stack_budget_v0_compute_pb from './n0stack/budget/v0/compute_pb';
//import * as n0stack_budget_v0_storage_pb from './n0stack/budget/v0/storage_pb';
//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

import {
  ApplyNodeRequest,
  DeleteNodeRequest,
  GetNodeRequest,
  ListNodesRequest,
  ListNodesResponse,
  Node,
  ReleaseComputeRequest,
  ReleaseStorageRequest,
  ReserveComputeRequest,
  ReserveStorageRequest,
  ScheduleComputeRequest,
  ScheduleStorageRequest} from './node_pb';

export class NodeServiceClient {
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

  methodInfoListNodes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNodesResponse,
    (request: ListNodesRequest) => {
      return request.serializeBinary();
    },
    ListNodesResponse.deserializeBinary
  );

  listNodes(
    request: ListNodesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNodesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ListNodes',
      request,
      metadata || {},
      this.methodInfoListNodes,
      callback);
  }

  methodInfoGetNode = new grpcWeb.AbstractClientBase.MethodInfo(
    Node,
    (request: GetNodeRequest) => {
      return request.serializeBinary();
    },
    Node.deserializeBinary
  );

  getNode(
    request: GetNodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Node) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/GetNode',
      request,
      metadata || {},
      this.methodInfoGetNode,
      callback);
  }

  methodInfoApplyNode = new grpcWeb.AbstractClientBase.MethodInfo(
    Node,
    (request: ApplyNodeRequest) => {
      return request.serializeBinary();
    },
    Node.deserializeBinary
  );

  applyNode(
    request: ApplyNodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Node) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ApplyNode',
      request,
      metadata || {},
      this.methodInfoApplyNode,
      callback);
  }

  methodInfoDeleteNode = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteNodeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNode(
    request: DeleteNodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/DeleteNode',
      request,
      metadata || {},
      this.methodInfoDeleteNode,
      callback);
  }

  methodInfoScheduleCompute = new grpcWeb.AbstractClientBase.MethodInfo(
    Node,
    (request: ScheduleComputeRequest) => {
      return request.serializeBinary();
    },
    Node.deserializeBinary
  );

  scheduleCompute(
    request: ScheduleComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Node) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ScheduleCompute',
      request,
      metadata || {},
      this.methodInfoScheduleCompute,
      callback);
  }

  methodInfoReserveCompute = new grpcWeb.AbstractClientBase.MethodInfo(
    Node,
    (request: ReserveComputeRequest) => {
      return request.serializeBinary();
    },
    Node.deserializeBinary
  );

  reserveCompute(
    request: ReserveComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Node) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ReserveCompute',
      request,
      metadata || {},
      this.methodInfoReserveCompute,
      callback);
  }

  methodInfoReleaseCompute = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ReleaseComputeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  releaseCompute(
    request: ReleaseComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ReleaseCompute',
      request,
      metadata || {},
      this.methodInfoReleaseCompute,
      callback);
  }

  methodInfoScheduleStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    Node,
    (request: ScheduleStorageRequest) => {
      return request.serializeBinary();
    },
    Node.deserializeBinary
  );

  scheduleStorage(
    request: ScheduleStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Node) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ScheduleStorage',
      request,
      metadata || {},
      this.methodInfoScheduleStorage,
      callback);
  }

  methodInfoReserveStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    Node,
    (request: ReserveStorageRequest) => {
      return request.serializeBinary();
    },
    Node.deserializeBinary
  );

  reserveStorage(
    request: ReserveStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Node) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ReserveStorage',
      request,
      metadata || {},
      this.methodInfoReserveStorage,
      callback);
  }

  methodInfoReleaseStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ReleaseStorageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  releaseStorage(
    request: ReleaseStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NodeService/ReleaseStorage',
      request,
      metadata || {},
      this.methodInfoReleaseStorage,
      callback);
  }

}
