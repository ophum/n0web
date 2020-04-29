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
  BootVirtualMachineRequest,
  CreateVirtualMachineRequest,
  DeleteVirtualMachineRequest,
  GetVirtualMachineRequest,
  ListVirtualMachinesRequest,
  ListVirtualMachinesResponse,
  OpenConsoleRequest,
  OpenConsoleResponse,
  RebootVirtualMachineRequest,
  SaveVirtualMachineRequest,
  ShutdownVirtualMachineRequest,
  UpdateVirtualMachineRequest,
  VirtualMachine} from './virtual_machine_pb';

export class VirtualMachineServiceClient {
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

  methodInfoCreateVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: CreateVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  createVirtualMachine(
    request: CreateVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/CreateVirtualMachine',
      request,
      metadata || {},
      this.methodInfoCreateVirtualMachine,
      callback);
  }

  methodInfoListVirtualMachines = new grpcWeb.AbstractClientBase.MethodInfo(
    ListVirtualMachinesResponse,
    (request: ListVirtualMachinesRequest) => {
      return request.serializeBinary();
    },
    ListVirtualMachinesResponse.deserializeBinary
  );

  listVirtualMachines(
    request: ListVirtualMachinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListVirtualMachinesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/ListVirtualMachines',
      request,
      metadata || {},
      this.methodInfoListVirtualMachines,
      callback);
  }

  methodInfoGetVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: GetVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  getVirtualMachine(
    request: GetVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/GetVirtualMachine',
      request,
      metadata || {},
      this.methodInfoGetVirtualMachine,
      callback);
  }

  methodInfoUpdateVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: UpdateVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  updateVirtualMachine(
    request: UpdateVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/UpdateVirtualMachine',
      request,
      metadata || {},
      this.methodInfoUpdateVirtualMachine,
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
        '/n0stack.provisioning.v0.VirtualMachineService/DeleteVirtualMachine',
      request,
      metadata || {},
      this.methodInfoDeleteVirtualMachine,
      callback);
  }

  methodInfoBootVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: BootVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  bootVirtualMachine(
    request: BootVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/BootVirtualMachine',
      request,
      metadata || {},
      this.methodInfoBootVirtualMachine,
      callback);
  }

  methodInfoRebootVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: RebootVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  rebootVirtualMachine(
    request: RebootVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/RebootVirtualMachine',
      request,
      metadata || {},
      this.methodInfoRebootVirtualMachine,
      callback);
  }

  methodInfoShutdownVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: ShutdownVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  shutdownVirtualMachine(
    request: ShutdownVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/ShutdownVirtualMachine',
      request,
      metadata || {},
      this.methodInfoShutdownVirtualMachine,
      callback);
  }

  methodInfoSaveVirtualMachine = new grpcWeb.AbstractClientBase.MethodInfo(
    VirtualMachine,
    (request: SaveVirtualMachineRequest) => {
      return request.serializeBinary();
    },
    VirtualMachine.deserializeBinary
  );

  saveVirtualMachine(
    request: SaveVirtualMachineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VirtualMachine) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/SaveVirtualMachine',
      request,
      metadata || {},
      this.methodInfoSaveVirtualMachine,
      callback);
  }

  methodInfoOpenConsole = new grpcWeb.AbstractClientBase.MethodInfo(
    OpenConsoleResponse,
    (request: OpenConsoleRequest) => {
      return request.serializeBinary();
    },
    OpenConsoleResponse.deserializeBinary
  );

  openConsole(
    request: OpenConsoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenConsoleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.provisioning.v0.VirtualMachineService/OpenConsole',
      request,
      metadata || {},
      this.methodInfoOpenConsole,
      callback);
  }

}
