/**
 * @fileoverview gRPC-Web generated client stub for n0stack.deployment.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as n0stack_provisioning_v0_block_storage_pb from '../../provisioning/v0/block_storage_pb';
//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

import {
  ApplyImageRequest,
  DeleteImageRequest,
  GenerateBlockStorageRequest,
  GetImageRequest,
  Image,
  ListImagesRequest,
  ListImagesResponse,
  RegisterBlockStorageRequest,
  TagImageRequest,
  UnregisterBlockStorageRequest,
  UntagImageRequest} from './image_pb';

export class ImageServiceClient {
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

  methodInfoListImages = new grpcWeb.AbstractClientBase.MethodInfo(
    ListImagesResponse,
    (request: ListImagesRequest) => {
      return request.serializeBinary();
    },
    ListImagesResponse.deserializeBinary
  );

  listImages(
    request: ListImagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListImagesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/ListImages',
      request,
      metadata || {},
      this.methodInfoListImages,
      callback);
  }

  methodInfoGetImage = new grpcWeb.AbstractClientBase.MethodInfo(
    Image,
    (request: GetImageRequest) => {
      return request.serializeBinary();
    },
    Image.deserializeBinary
  );

  getImage(
    request: GetImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Image) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/GetImage',
      request,
      metadata || {},
      this.methodInfoGetImage,
      callback);
  }

  methodInfoApplyImage = new grpcWeb.AbstractClientBase.MethodInfo(
    Image,
    (request: ApplyImageRequest) => {
      return request.serializeBinary();
    },
    Image.deserializeBinary
  );

  applyImage(
    request: ApplyImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Image) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/ApplyImage',
      request,
      metadata || {},
      this.methodInfoApplyImage,
      callback);
  }

  methodInfoDeleteImage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteImageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteImage(
    request: DeleteImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/DeleteImage',
      request,
      metadata || {},
      this.methodInfoDeleteImage,
      callback);
  }

  methodInfoRegisterBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    Image,
    (request: RegisterBlockStorageRequest) => {
      return request.serializeBinary();
    },
    Image.deserializeBinary
  );

  registerBlockStorage(
    request: RegisterBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Image) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/RegisterBlockStorage',
      request,
      metadata || {},
      this.methodInfoRegisterBlockStorage,
      callback);
  }

  methodInfoUnregisterBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    Image,
    (request: UnregisterBlockStorageRequest) => {
      return request.serializeBinary();
    },
    Image.deserializeBinary
  );

  unregisterBlockStorage(
    request: UnregisterBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Image) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/UnregisterBlockStorage',
      request,
      metadata || {},
      this.methodInfoUnregisterBlockStorage,
      callback);
  }

  methodInfoGenerateBlockStorage = new grpcWeb.AbstractClientBase.MethodInfo(
    n0stack_provisioning_v0_block_storage_pb.BlockStorage,
    (request: GenerateBlockStorageRequest) => {
      return request.serializeBinary();
    },
    n0stack_provisioning_v0_block_storage_pb.BlockStorage.deserializeBinary
  );

  generateBlockStorage(
    request: GenerateBlockStorageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: n0stack_provisioning_v0_block_storage_pb.BlockStorage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/GenerateBlockStorage',
      request,
      metadata || {},
      this.methodInfoGenerateBlockStorage,
      callback);
  }

  methodInfoTagImage = new grpcWeb.AbstractClientBase.MethodInfo(
    Image,
    (request: TagImageRequest) => {
      return request.serializeBinary();
    },
    Image.deserializeBinary
  );

  tagImage(
    request: TagImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Image) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/TagImage',
      request,
      metadata || {},
      this.methodInfoTagImage,
      callback);
  }

  methodInfoUntagImage = new grpcWeb.AbstractClientBase.MethodInfo(
    Image,
    (request: UntagImageRequest) => {
      return request.serializeBinary();
    },
    Image.deserializeBinary
  );

  untagImage(
    request: UntagImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Image) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.deployment.v0.ImageService/UntagImage',
      request,
      metadata || {},
      this.methodInfoUntagImage,
      callback);
  }

}
