// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/control/integration/reset/v1alpha1/reset.proto (package commonfate.control.integration.reset.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage
} from '@bufbuild/protobuf'
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf'
import { EID } from '../../../../entity/v1alpha1/eid_pb.js'

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.ResetEntraUsersRequest
 */
export class ResetEntraUsersRequest extends Message<ResetEntraUsersRequest> {
  /**
   * If true, will return a preview of changes rather than actually resetting them.
   *
   * @generated from field: bool dry_run = 1;
   */
  dryRun = false

  constructor(data?: PartialMessage<ResetEntraUsersRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.ResetEntraUsersRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'dry_run', kind: 'scalar', T: 8 /* ScalarType.BOOL */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetEntraUsersRequest {
    return new ResetEntraUsersRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetEntraUsersRequest {
    return new ResetEntraUsersRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetEntraUsersRequest {
    return new ResetEntraUsersRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | ResetEntraUsersRequest
      | PlainMessage<ResetEntraUsersRequest>
      | undefined,
    b: ResetEntraUsersRequest | PlainMessage<ResetEntraUsersRequest> | undefined
  ): boolean {
    return proto3.util.equals(ResetEntraUsersRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.ResetEntraUsersResponse
 */
export class ResetEntraUsersResponse extends Message<ResetEntraUsersResponse> {
  /**
   * @generated from field: repeated commonfate.entity.v1alpha1.EID deleted_entities = 1;
   */
  deletedEntities: EID[] = []

  constructor(data?: PartialMessage<ResetEntraUsersResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.ResetEntraUsersResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deleted_entities', kind: 'message', T: EID, repeated: true }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetEntraUsersResponse {
    return new ResetEntraUsersResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetEntraUsersResponse {
    return new ResetEntraUsersResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetEntraUsersResponse {
    return new ResetEntraUsersResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | ResetEntraUsersResponse
      | PlainMessage<ResetEntraUsersResponse>
      | undefined,
    b:
      | ResetEntraUsersResponse
      | PlainMessage<ResetEntraUsersResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(ResetEntraUsersResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.RelinkEntraUsersRequest
 */
export class RelinkEntraUsersRequest extends Message<RelinkEntraUsersRequest> {
  constructor(data?: PartialMessage<RelinkEntraUsersRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.RelinkEntraUsersRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RelinkEntraUsersRequest {
    return new RelinkEntraUsersRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RelinkEntraUsersRequest {
    return new RelinkEntraUsersRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RelinkEntraUsersRequest {
    return new RelinkEntraUsersRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | RelinkEntraUsersRequest
      | PlainMessage<RelinkEntraUsersRequest>
      | undefined,
    b:
      | RelinkEntraUsersRequest
      | PlainMessage<RelinkEntraUsersRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(RelinkEntraUsersRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.RelinkEntraUsersResponse
 */
export class RelinkEntraUsersResponse extends Message<RelinkEntraUsersResponse> {
  constructor(data?: PartialMessage<RelinkEntraUsersResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.RelinkEntraUsersResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RelinkEntraUsersResponse {
    return new RelinkEntraUsersResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RelinkEntraUsersResponse {
    return new RelinkEntraUsersResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RelinkEntraUsersResponse {
    return new RelinkEntraUsersResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | RelinkEntraUsersResponse
      | PlainMessage<RelinkEntraUsersResponse>
      | undefined,
    b:
      | RelinkEntraUsersResponse
      | PlainMessage<RelinkEntraUsersResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(RelinkEntraUsersResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.RemoveOAuthTokenRequest
 */
export class RemoveOAuthTokenRequest extends Message<RemoveOAuthTokenRequest> {
  /**
   * The ID of the token to remove.
   *
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<RemoveOAuthTokenRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.RemoveOAuthTokenRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RemoveOAuthTokenRequest {
    return new RemoveOAuthTokenRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RemoveOAuthTokenRequest {
    return new RemoveOAuthTokenRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RemoveOAuthTokenRequest {
    return new RemoveOAuthTokenRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | RemoveOAuthTokenRequest
      | PlainMessage<RemoveOAuthTokenRequest>
      | undefined,
    b:
      | RemoveOAuthTokenRequest
      | PlainMessage<RemoveOAuthTokenRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(RemoveOAuthTokenRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.RemoveOAuthTokenResponse
 */
export class RemoveOAuthTokenResponse extends Message<RemoveOAuthTokenResponse> {
  constructor(data?: PartialMessage<RemoveOAuthTokenResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.RemoveOAuthTokenResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RemoveOAuthTokenResponse {
    return new RemoveOAuthTokenResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RemoveOAuthTokenResponse {
    return new RemoveOAuthTokenResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RemoveOAuthTokenResponse {
    return new RemoveOAuthTokenResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | RemoveOAuthTokenResponse
      | PlainMessage<RemoveOAuthTokenResponse>
      | undefined,
    b:
      | RemoveOAuthTokenResponse
      | PlainMessage<RemoveOAuthTokenResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(RemoveOAuthTokenResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.CancelBackgroundJobRequest
 */
export class CancelBackgroundJobRequest extends Message<CancelBackgroundJobRequest> {
  /**
   * The job id to cancel
   *
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero

  constructor(data?: PartialMessage<CancelBackgroundJobRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.CancelBackgroundJobRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CancelBackgroundJobRequest {
    return new CancelBackgroundJobRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CancelBackgroundJobRequest {
    return new CancelBackgroundJobRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CancelBackgroundJobRequest {
    return new CancelBackgroundJobRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CancelBackgroundJobRequest
      | PlainMessage<CancelBackgroundJobRequest>
      | undefined,
    b:
      | CancelBackgroundJobRequest
      | PlainMessage<CancelBackgroundJobRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(CancelBackgroundJobRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.CancelBackgroundJobResponse
 */
export class CancelBackgroundJobResponse extends Message<CancelBackgroundJobResponse> {
  constructor(data?: PartialMessage<CancelBackgroundJobResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.CancelBackgroundJobResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CancelBackgroundJobResponse {
    return new CancelBackgroundJobResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CancelBackgroundJobResponse {
    return new CancelBackgroundJobResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CancelBackgroundJobResponse {
    return new CancelBackgroundJobResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CancelBackgroundJobResponse
      | PlainMessage<CancelBackgroundJobResponse>
      | undefined,
    b:
      | CancelBackgroundJobResponse
      | PlainMessage<CancelBackgroundJobResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(CancelBackgroundJobResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.RetryBackgroundJobRequest
 */
export class RetryBackgroundJobRequest extends Message<RetryBackgroundJobRequest> {
  /**
   * The job id to retry
   *
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero

  constructor(data?: PartialMessage<RetryBackgroundJobRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.RetryBackgroundJobRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RetryBackgroundJobRequest {
    return new RetryBackgroundJobRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RetryBackgroundJobRequest {
    return new RetryBackgroundJobRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RetryBackgroundJobRequest {
    return new RetryBackgroundJobRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | RetryBackgroundJobRequest
      | PlainMessage<RetryBackgroundJobRequest>
      | undefined,
    b:
      | RetryBackgroundJobRequest
      | PlainMessage<RetryBackgroundJobRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(RetryBackgroundJobRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.reset.v1alpha1.RetryBackgroundJobResponse
 */
export class RetryBackgroundJobResponse extends Message<RetryBackgroundJobResponse> {
  constructor(data?: PartialMessage<RetryBackgroundJobResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.reset.v1alpha1.RetryBackgroundJobResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RetryBackgroundJobResponse {
    return new RetryBackgroundJobResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RetryBackgroundJobResponse {
    return new RetryBackgroundJobResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RetryBackgroundJobResponse {
    return new RetryBackgroundJobResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | RetryBackgroundJobResponse
      | PlainMessage<RetryBackgroundJobResponse>
      | undefined,
    b:
      | RetryBackgroundJobResponse
      | PlainMessage<RetryBackgroundJobResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(RetryBackgroundJobResponse, a, b)
  }
}
