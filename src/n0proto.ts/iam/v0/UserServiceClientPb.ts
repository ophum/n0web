/**
 * @fileoverview gRPC-Web generated client stub for n0stack.iam.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

import {
  AddSshPublicKeyRequest,
  CreateUserRequest,
  DeleteSshPublicKeyRequest,
  DeleteUserRequest,
  GetUserRequest,
  ListUsersRequest,
  ListUsersResponse,
  User} from './user_pb';

export class UserServiceClient {
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

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUsersResponse,
    (request: ListUsersRequest) => {
      return request.serializeBinary();
    },
    ListUsersResponse.deserializeBinary
  );

  listUsers(
    request: ListUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListUsersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.iam.v0.UserService/ListUsers',
      request,
      metadata || {},
      this.methodInfoListUsers,
      callback);
  }

  methodInfoGetUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: GetUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.iam.v0.UserService/GetUser',
      request,
      metadata || {},
      this.methodInfoGetUser,
      callback);
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: CreateUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.iam.v0.UserService/CreateUser',
      request,
      metadata || {},
      this.methodInfoCreateUser,
      callback);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.iam.v0.UserService/DeleteUser',
      request,
      metadata || {},
      this.methodInfoDeleteUser,
      callback);
  }

  methodInfoAddSshPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: AddSshPublicKeyRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  addSshPublicKey(
    request: AddSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.iam.v0.UserService/AddSshPublicKey',
      request,
      metadata || {},
      this.methodInfoAddSshPublicKey,
      callback);
  }

  methodInfoDeleteSshPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: DeleteSshPublicKeyRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  deleteSshPublicKey(
    request: DeleteSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/n0stack.iam.v0.UserService/DeleteSshPublicKey',
      request,
      metadata || {},
      this.methodInfoDeleteSshPublicKey,
      callback);
  }

}
