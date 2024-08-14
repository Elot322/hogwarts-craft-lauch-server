// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.19.1
// source: main.proto

/* eslint-disable */
import { type CallContext, type CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "AuroraLauncher.rpc";

export enum TypeLibrary {
  library = 0,
  native = 1,
  UNRECOGNIZED = -1,
}

export enum Action {
  allow = 0,
  disallow = 1,
  UNRECOGNIZED = -1,
}

export enum OSName {
  linux = 0,
  osx = 1,
  windows = 2,
  UNRECOGNIZED = -1,
}

export enum WhiteListType {
  null = 0,
  uuids = 1,
  permissions = 2,
  UNRECOGNIZED = -1,
}

export interface AuthRequest {
  login: string;
  password: string;
}

export interface AuthResponse {
  username: string;
  userUUID: string;
  accessToken: string;
  token: string;
  isAlex?: boolean | undefined;
  skinURL?: string | undefined;
  capeURL?: string | undefined;
}

export interface ServersResponse {
  servers: Server[];
}

export interface Server {
  profileUUID: string;
  serverInfo: ServerConfig | undefined;
}

export interface ProfileRequest {
  uuid: string;
}

export interface ProfileResponse {
  configVersion: number;
  uuid: string;
  sortIndex: number;
  servers: ServerConfig[];
  javaVersion: number;
  version: string;
  clientDir: string;
  assetIndex: string;
  libraries: ProfileLibrary[];
  gameJar: string;
  mainClass: string;
  jvmArgs: string[];
  clientArgs: string[];
  update: string[];
  updateVerify: string[];
  updateExclusions: string[];
  whiteListType: WhiteListType;
  whiteListPermisson?: number | undefined;
  whiteListUUIDs?: string | undefined;
}

export interface ServerConfig {
  title: string;
  hostname?: string | undefined;
  ip?: string | undefined;
  port?: number | undefined;
}

export interface ProfileLibrary {
  path: string;
  sha1: string;
  type: TypeLibrary;
  rules?: LibraryRule | undefined;
  ignoreClassPath?: boolean | undefined;
}

export interface LibraryRule {
  action: Action;
  os?: OS | undefined;
}

export interface OS {
  name: OSName;
  arch?: string | undefined;
  version?: string | undefined;
}

export interface UpdateRequest {
  dir: string;
}

export interface UpdateResponse {
  hashedFile: HashedFile[];
}

export interface HashedFile {
  path: string;
  size: number;
  sha1: string;
}

export interface VerifyRequest {
  stage: number;
  token?: string | undefined;
}

export interface VerifyResponse {
  token?: string | undefined;
}

function createBaseAuthRequest(): AuthRequest {
  return { login: "", password: "" };
}

export const AuthRequest = {
  encode(message: AuthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.login = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AuthRequest>): AuthRequest {
    return AuthRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthRequest>): AuthRequest {
    const message = createBaseAuthRequest();
    message.login = object.login ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseAuthResponse(): AuthResponse {
  return {
    username: "",
    userUUID: "",
    accessToken: "",
    token: "",
    isAlex: undefined,
    skinURL: undefined,
    capeURL: undefined,
  };
}

export const AuthResponse = {
  encode(message: AuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.userUUID !== "") {
      writer.uint32(18).string(message.userUUID);
    }
    if (message.accessToken !== "") {
      writer.uint32(26).string(message.accessToken);
    }
    if (message.token !== "") {
      writer.uint32(34).string(message.token);
    }
    if (message.isAlex !== undefined) {
      writer.uint32(40).bool(message.isAlex);
    }
    if (message.skinURL !== undefined) {
      writer.uint32(50).string(message.skinURL);
    }
    if (message.capeURL !== undefined) {
      writer.uint32(58).string(message.capeURL);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userUUID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.token = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isAlex = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.skinURL = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.capeURL = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AuthResponse>): AuthResponse {
    return AuthResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthResponse>): AuthResponse {
    const message = createBaseAuthResponse();
    message.username = object.username ?? "";
    message.userUUID = object.userUUID ?? "";
    message.accessToken = object.accessToken ?? "";
    message.token = object.token ?? "";
    message.isAlex = object.isAlex ?? undefined;
    message.skinURL = object.skinURL ?? undefined;
    message.capeURL = object.capeURL ?? undefined;
    return message;
  },
};

function createBaseServersResponse(): ServersResponse {
  return { servers: [] };
}

export const ServersResponse = {
  encode(message: ServersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.servers.push(Server.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServersResponse>): ServersResponse {
    return ServersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServersResponse>): ServersResponse {
    const message = createBaseServersResponse();
    message.servers = object.servers?.map((e) => Server.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServer(): Server {
  return { profileUUID: "", serverInfo: undefined };
}

export const Server = {
  encode(message: Server, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileUUID !== "") {
      writer.uint32(10).string(message.profileUUID);
    }
    if (message.serverInfo !== undefined) {
      ServerConfig.encode(message.serverInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Server {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profileUUID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serverInfo = ServerConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Server>): Server {
    return Server.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Server>): Server {
    const message = createBaseServer();
    message.profileUUID = object.profileUUID ?? "";
    message.serverInfo = (object.serverInfo !== undefined && object.serverInfo !== null)
      ? ServerConfig.fromPartial(object.serverInfo)
      : undefined;
    return message;
  },
};

function createBaseProfileRequest(): ProfileRequest {
  return { uuid: "" };
}

export const ProfileRequest = {
  encode(message: ProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ProfileRequest>): ProfileRequest {
    return ProfileRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProfileRequest>): ProfileRequest {
    const message = createBaseProfileRequest();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseProfileResponse(): ProfileResponse {
  return {
    configVersion: 0,
    uuid: "",
    sortIndex: 0,
    servers: [],
    javaVersion: 0,
    version: "",
    clientDir: "",
    assetIndex: "",
    libraries: [],
    gameJar: "",
    mainClass: "",
    jvmArgs: [],
    clientArgs: [],
    update: [],
    updateVerify: [],
    updateExclusions: [],
    whiteListType: 0,
    whiteListPermisson: undefined,
    whiteListUUIDs: undefined,
  };
}

export const ProfileResponse = {
  encode(message: ProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configVersion !== 0) {
      writer.uint32(8).int32(message.configVersion);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.sortIndex !== 0) {
      writer.uint32(24).int32(message.sortIndex);
    }
    for (const v of message.servers) {
      ServerConfig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.javaVersion !== 0) {
      writer.uint32(40).int32(message.javaVersion);
    }
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    if (message.clientDir !== "") {
      writer.uint32(58).string(message.clientDir);
    }
    if (message.assetIndex !== "") {
      writer.uint32(66).string(message.assetIndex);
    }
    for (const v of message.libraries) {
      ProfileLibrary.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.gameJar !== "") {
      writer.uint32(82).string(message.gameJar);
    }
    if (message.mainClass !== "") {
      writer.uint32(90).string(message.mainClass);
    }
    for (const v of message.jvmArgs) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.clientArgs) {
      writer.uint32(106).string(v!);
    }
    for (const v of message.update) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.updateVerify) {
      writer.uint32(122).string(v!);
    }
    for (const v of message.updateExclusions) {
      writer.uint32(130).string(v!);
    }
    if (message.whiteListType !== 0) {
      writer.uint32(136).int32(message.whiteListType);
    }
    if (message.whiteListPermisson !== undefined) {
      writer.uint32(144).int32(message.whiteListPermisson);
    }
    if (message.whiteListUUIDs !== undefined) {
      writer.uint32(154).string(message.whiteListUUIDs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.configVersion = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sortIndex = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.servers.push(ServerConfig.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.javaVersion = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.version = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.clientDir = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.assetIndex = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.libraries.push(ProfileLibrary.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gameJar = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.mainClass = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.jvmArgs.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.clientArgs.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.update.push(reader.string());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.updateVerify.push(reader.string());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.updateExclusions.push(reader.string());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.whiteListType = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.whiteListPermisson = reader.int32();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.whiteListUUIDs = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ProfileResponse>): ProfileResponse {
    return ProfileResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProfileResponse>): ProfileResponse {
    const message = createBaseProfileResponse();
    message.configVersion = object.configVersion ?? 0;
    message.uuid = object.uuid ?? "";
    message.sortIndex = object.sortIndex ?? 0;
    message.servers = object.servers?.map((e) => ServerConfig.fromPartial(e)) || [];
    message.javaVersion = object.javaVersion ?? 0;
    message.version = object.version ?? "";
    message.clientDir = object.clientDir ?? "";
    message.assetIndex = object.assetIndex ?? "";
    message.libraries = object.libraries?.map((e) => ProfileLibrary.fromPartial(e)) || [];
    message.gameJar = object.gameJar ?? "";
    message.mainClass = object.mainClass ?? "";
    message.jvmArgs = object.jvmArgs?.map((e) => e) || [];
    message.clientArgs = object.clientArgs?.map((e) => e) || [];
    message.update = object.update?.map((e) => e) || [];
    message.updateVerify = object.updateVerify?.map((e) => e) || [];
    message.updateExclusions = object.updateExclusions?.map((e) => e) || [];
    message.whiteListType = object.whiteListType ?? 0;
    message.whiteListPermisson = object.whiteListPermisson ?? undefined;
    message.whiteListUUIDs = object.whiteListUUIDs ?? undefined;
    return message;
  },
};

function createBaseServerConfig(): ServerConfig {
  return { title: "", hostname: undefined, ip: undefined, port: undefined };
}

export const ServerConfig = {
  encode(message: ServerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.hostname !== undefined) {
      writer.uint32(26).string(message.hostname);
    }
    if (message.ip !== undefined) {
      writer.uint32(34).string(message.ip);
    }
    if (message.port !== undefined) {
      writer.uint32(40).int32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.port = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServerConfig>): ServerConfig {
    return ServerConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServerConfig>): ServerConfig {
    const message = createBaseServerConfig();
    message.title = object.title ?? "";
    message.hostname = object.hostname ?? undefined;
    message.ip = object.ip ?? undefined;
    message.port = object.port ?? undefined;
    return message;
  },
};

function createBaseProfileLibrary(): ProfileLibrary {
  return { path: "", sha1: "", type: 0, rules: undefined, ignoreClassPath: undefined };
}

export const ProfileLibrary = {
  encode(message: ProfileLibrary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.sha1 !== "") {
      writer.uint32(18).string(message.sha1);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.rules !== undefined) {
      LibraryRule.encode(message.rules, writer.uint32(34).fork()).ldelim();
    }
    if (message.ignoreClassPath !== undefined) {
      writer.uint32(40).bool(message.ignoreClassPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileLibrary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileLibrary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sha1 = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rules = LibraryRule.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ignoreClassPath = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ProfileLibrary>): ProfileLibrary {
    return ProfileLibrary.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProfileLibrary>): ProfileLibrary {
    const message = createBaseProfileLibrary();
    message.path = object.path ?? "";
    message.sha1 = object.sha1 ?? "";
    message.type = object.type ?? 0;
    message.rules = (object.rules !== undefined && object.rules !== null)
      ? LibraryRule.fromPartial(object.rules)
      : undefined;
    message.ignoreClassPath = object.ignoreClassPath ?? undefined;
    return message;
  },
};

function createBaseLibraryRule(): LibraryRule {
  return { action: 0, os: undefined };
}

export const LibraryRule = {
  encode(message: LibraryRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.os !== undefined) {
      OS.encode(message.os, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LibraryRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibraryRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.os = OS.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LibraryRule>): LibraryRule {
    return LibraryRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LibraryRule>): LibraryRule {
    const message = createBaseLibraryRule();
    message.action = object.action ?? 0;
    message.os = (object.os !== undefined && object.os !== null) ? OS.fromPartial(object.os) : undefined;
    return message;
  },
};

function createBaseOS(): OS {
  return { name: 0, arch: undefined, version: undefined };
}

export const OS = {
  encode(message: OS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== 0) {
      writer.uint32(8).int32(message.name);
    }
    if (message.arch !== undefined) {
      writer.uint32(18).string(message.arch);
    }
    if (message.version !== undefined) {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OS {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOS();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.name = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arch = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OS>): OS {
    return OS.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OS>): OS {
    const message = createBaseOS();
    message.name = object.name ?? 0;
    message.arch = object.arch ?? undefined;
    message.version = object.version ?? undefined;
    return message;
  },
};

function createBaseUpdateRequest(): UpdateRequest {
  return { dir: "" };
}

export const UpdateRequest = {
  encode(message: UpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dir !== "") {
      writer.uint32(10).string(message.dir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dir = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateRequest>): UpdateRequest {
    return UpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateRequest>): UpdateRequest {
    const message = createBaseUpdateRequest();
    message.dir = object.dir ?? "";
    return message;
  },
};

function createBaseUpdateResponse(): UpdateResponse {
  return { hashedFile: [] };
}

export const UpdateResponse = {
  encode(message: UpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hashedFile) {
      HashedFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hashedFile.push(HashedFile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateResponse>): UpdateResponse {
    return UpdateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateResponse>): UpdateResponse {
    const message = createBaseUpdateResponse();
    message.hashedFile = object.hashedFile?.map((e) => HashedFile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHashedFile(): HashedFile {
  return { path: "", size: 0, sha1: "" };
}

export const HashedFile = {
  encode(message: HashedFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.size !== 0) {
      writer.uint32(16).int32(message.size);
    }
    if (message.sha1 !== "") {
      writer.uint32(26).string(message.sha1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.size = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sha1 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<HashedFile>): HashedFile {
    return HashedFile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HashedFile>): HashedFile {
    const message = createBaseHashedFile();
    message.path = object.path ?? "";
    message.size = object.size ?? 0;
    message.sha1 = object.sha1 ?? "";
    return message;
  },
};

function createBaseVerifyRequest(): VerifyRequest {
  return { stage: 0, token: undefined };
}

export const VerifyRequest = {
  encode(message: VerifyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stage !== 0) {
      writer.uint32(8).int32(message.stage);
    }
    if (message.token !== undefined) {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.stage = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<VerifyRequest>): VerifyRequest {
    return VerifyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyRequest>): VerifyRequest {
    const message = createBaseVerifyRequest();
    message.stage = object.stage ?? 0;
    message.token = object.token ?? undefined;
    return message;
  },
};

function createBaseVerifyResponse(): VerifyResponse {
  return { token: undefined };
}

export const VerifyResponse = {
  encode(message: VerifyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<VerifyResponse>): VerifyResponse {
    return VerifyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyResponse>): VerifyResponse {
    const message = createBaseVerifyResponse();
    message.token = object.token ?? undefined;
    return message;
  },
};

export type AuroraLauncherServiceDefinition = typeof AuroraLauncherServiceDefinition;
export const AuroraLauncherServiceDefinition = {
  name: "AuroraLauncherService",
  fullName: "AuroraLauncher.rpc.AuroraLauncherService",
  methods: {
    auth: {
      name: "auth",
      requestType: AuthRequest,
      requestStream: false,
      responseType: AuthResponse,
      responseStream: false,
      options: {},
    },
    getServers: {
      name: "getServers",
      requestType: Empty,
      requestStream: false,
      responseType: ServersResponse,
      responseStream: false,
      options: {},
    },
    getProfile: {
      name: "getProfile",
      requestType: ProfileRequest,
      requestStream: false,
      responseType: ProfileResponse,
      responseStream: false,
      options: {},
    },
    /** rpc verify(VerifyRequest) returns (VerifyResponse); */
    getUpdates: {
      name: "getUpdates",
      requestType: UpdateRequest,
      requestStream: false,
      responseType: UpdateResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface AuroraLauncherServiceImplementation<CallContextExt = {}> {
  auth(request: AuthRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AuthResponse>>;
  getServers(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ServersResponse>>;
  getProfile(request: ProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ProfileResponse>>;
  /** rpc verify(VerifyRequest) returns (VerifyResponse); */
  getUpdates(request: UpdateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateResponse>>;
}

export interface AuroraLauncherServiceClient<CallOptionsExt = {}> {
  auth(request: DeepPartial<AuthRequest>, options?: CallOptions & CallOptionsExt): Promise<AuthResponse>;
  getServers(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ServersResponse>;
  getProfile(request: DeepPartial<ProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<ProfileResponse>;
  /** rpc verify(VerifyRequest) returns (VerifyResponse); */
  getUpdates(request: DeepPartial<UpdateRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
