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
  ApplyVirtualIPRequest,
  ConnectNetworkRequest,
  CreateVirtualRouterRequest,
  DeleteVirtualIPRequest,
  DeleteVirtualRouterRequest,
  DisconnectNetworkRequest,
  GetVirtualRouterRequest,
  ListVirtualRoutersRequest,
  ListVirtualRoutersResponse,
  VirtualRouter} from './virtual_router_pb';

export class VirtualRouterServiceClient {
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

  methodInfoCreateVirtualRouter = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualRouter,
    (request: CreateVirtualRouterRequest) => {
      return request.serializeBinary();
    },
    VirtualRouter.deserializeBinary
  );

  createVirtualRouter(
    request: CreateVirtualRouterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualRouter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/CreateVirtualRouter',
      request,
      metadata || {},
      this.methodInfoCreateVirtualRouter,
      callback);
  }

  methodInfoListVirtualRouters = new grpcWeb.AbstractClientBase.MethodInfo(
    ListVirtualRoutersResponse,
    (request: ListVirtualRoutersRequest) => {
      return request.serializeBinary();
    },
    ListVirtualRoutersResponse.deserializeBinary
  );

  listVirtualRouters(
    request: ListVirtualRoutersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListVirtualRoutersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/ListVirtualRouters',
      request,
      metadata || {},
      this.methodInfoListVirtualRouters,
      callback);
  }

  methodInfoGetVirtualRouter = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualRouter,
    (request: GetVirtualRouterRequest) => {
      return request.serializeBinary();
    },
    VirtualRouter.deserializeBinary
  );

  getVirtualRouter(
    request: GetVirtualRouterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualRouter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/GetVirtualRouter',
      request,
      metadata || {},
      this.methodInfoGetVirtualRouter,
      callback);
  }

  methodInfoDeleteVirtualRouter = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteVirtualRouterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualRouter(
    request: DeleteVirtualRouterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/DeleteVirtualRouter',
      request,
      metadata || {},
      this.methodInfoDeleteVirtualRouter,
      callback);
  }

  methodInfoConnectNetwork = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualRouter,
    (request: ConnectNetworkRequest) => {
      return request.serializeBinary();
    },
    VirtualRouter.deserializeBinary
  );

  connectNetwork(
    request: ConnectNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualRouter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/ConnectNetwork',
      request,
      metadata || {},
      this.methodInfoConnectNetwork,
      callback);
  }

  methodInfoDisconnectNetwork = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualRouter,
    (request: DisconnectNetworkRequest) => {
      return request.serializeBinary();
    },
    VirtualRouter.deserializeBinary
  );

  disconnectNetwork(
    request: DisconnectNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualRouter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/DisconnectNetwork',
      request,
      metadata || {},
      this.methodInfoDisconnectNetwork,
      callback);
  }

  methodInfoApplyVirtualIP = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualRouter,
    (request: ApplyVirtualIPRequest) => {
      return request.serializeBinary();
    },
    VirtualRouter.deserializeBinary
  );

  applyVirtualIP(
    request: ApplyVirtualIPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualRouter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/ApplyVirtualIP',
      request,
      metadata || {},
      this.methodInfoApplyVirtualIP,
      callback);
  }

  methodInfoDeleteVirtualIP = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualRouter,
    (request: DeleteVirtualIPRequest) => {
      return request.serializeBinary();
    },
    VirtualRouter.deserializeBinary
  );

  deleteVirtualIP(
    request: DeleteVirtualIPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualRouter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualRouterService/DeleteVirtualIP',
      request,
      metadata || {},
      this.methodInfoDeleteVirtualIP,
      callback);
  }

}
