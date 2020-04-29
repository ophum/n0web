/**
 * @fileoverview gRPC-Web generated client stub for n0stack.internal.n0core.provisioning.virtual_machine
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  BootVirtualMachineRequest,
  BootVirtualMachineResponse,
  DeleteVirtualMachineRequest,
  RebootVirtualMachineRequest,
  RebootVirtualMachineResponse,
  ShutdownVirtualMachineRequest,
  ShutdownVirtualMachineResponse} from './agent_pb';

export class VirtualMachineAgentServiceClient {
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

  methodInfoBootVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    BootVirtualMachineResponse,
    (request: BootVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    BootVirtualMachineResponse.deserializeBinary
  );

  bootVirtualMachine(
    request: BootVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BootVirtualMachineResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.virtual_machine.VirtualMachineAgentService/BootVirtualMachine',
      request,
      metadata || {},
      this.methodInfoBootVirtualMachine,
      callback);
  }

  methodInfoRebootVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    RebootVirtualMachineResponse,
    (request: RebootVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    RebootVirtualMachineResponse.deserializeBinary
  );

  rebootVirtualMachine(
    request: RebootVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RebootVirtualMachineResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.virtual_machine.VirtualMachineAgentService/RebootVirtualMachine',
      request,
      metadata || {},
      this.methodInfoRebootVirtualMachine,
      callback);
  }

  methodInfoShutdownVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    ShutdownVirtualMachineResponse,
    (request: ShutdownVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    ShutdownVirtualMachineResponse.deserializeBinary
  );

  shutdownVirtualMachine(
    request: ShutdownVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ShutdownVirtualMachineResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.virtual_machine.VirtualMachineAgentService/ShutdownVirtualMachine',
      request,
      metadata || {},
      this.methodInfoShutdownVirtualMachine,
      callback);
  }

  methodInfoDeleteVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualMachine(
    request: DeleteVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.internal.n0core.provisioning.virtual_machine.VirtualMachineAgentService/DeleteVirtualMachine',
      request,
      metadata || {},
      this.methodInfoDeleteVirtualMachine,
      callback);
  }

}

