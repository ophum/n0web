/**
 * @fileoverview gRPC-Web generated client stub for n0stack.pool.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
//import * as n0stack_budget_v0_network_interface_pb from './n0stack/budget/v0/network_interface_pb';
//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

import {
  ApplyNetworkRequest,
  DeleteNetworkRequest,
  GetNetworkRequest,
  ListNetworksRequest,
  ListNetworksResponse,
  Network,
  ReleaseNetworkInterfaceRequest,
  ReserveNetworkInterfaceRequest} from './network_pb';

export class NetworkServiceClient {
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

  methodInfoListNetworks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNetworksResponse,
    (request: ListNetworksRequest) => {
      return request.serializeBinary();
    },
    ListNetworksResponse.deserializeBinary
  );

  listNetworks(
    request: ListNetworksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNetworksResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NetworkService/ListNetworks',
      request,
      metadata || {},
      this.methodInfoListNetworks,
      callback);
  }

  methodInfoGetNetwork = new grpcWeb.AbstractClientBase.MethodInfo(
    Network,
    (request: GetNetworkRequest) => {
      return request.serializeBinary();
    },
    Network.deserializeBinary
  );

  getNetwork(
    request: GetNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Network) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NetworkService/GetNetwork',
      request,
      metadata || {},
      this.methodInfoGetNetwork,
      callback);
  }

  methodInfoApplyNetwork = new grpcWeb.AbstractClientBase.MethodInfo(
    Network,
    (request: ApplyNetworkRequest) => {
      return request.serializeBinary();
    },
    Network.deserializeBinary
  );

  applyNetwork(
    request: ApplyNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Network) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NetworkService/ApplyNetwork',
      request,
      metadata || {},
      this.methodInfoApplyNetwork,
      callback);
  }

  methodInfoDeleteNetwork = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteNetworkRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNetwork(
    request: DeleteNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NetworkService/DeleteNetwork',
      request,
      metadata || {},
      this.methodInfoDeleteNetwork,
      callback);
  }

  methodInfoReserveNetworkInterface = new grpcWeb.AbstractClientBase.MethodInfo(
    Network,
    (request: ReserveNetworkInterfaceRequest) => {
      return request.serializeBinary();
    },
    Network.deserializeBinary
  );

  reserveNetworkInterface(
    request: ReserveNetworkInterfaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Network) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NetworkService/ReserveNetworkInterface',
      request,
      metadata || {},
      this.methodInfoReserveNetworkInterface,
      callback);
  }

  methodInfoReleaseNetworkInterface = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ReleaseNetworkInterfaceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  releaseNetworkInterface(
    request: ReleaseNetworkInterfaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.pool.v0.NetworkService/ReleaseNetworkInterface',
      request,
      metadata || {},
      this.methodInfoReleaseNetworkInterface,
      callback);
  }

}
