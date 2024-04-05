// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/access/v1alpha1/identity.proto (package commonfate.access.v1alpha1, syntax proto3)
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
import { Message, proto3 } from '@bufbuild/protobuf'
import { User } from './user_pb.js'
import { EID } from '../../entity/v1alpha1/eid_pb.js'

/**
 * @generated from message commonfate.access.v1alpha1.GetCallerIdentityRequest
 */
export class GetCallerIdentityRequest extends Message<GetCallerIdentityRequest> {
  constructor(data?: PartialMessage<GetCallerIdentityRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.access.v1alpha1.GetCallerIdentityRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCallerIdentityRequest {
    return new GetCallerIdentityRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCallerIdentityRequest {
    return new GetCallerIdentityRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCallerIdentityRequest {
    return new GetCallerIdentityRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | GetCallerIdentityRequest
      | PlainMessage<GetCallerIdentityRequest>
      | undefined,
    b:
      | GetCallerIdentityRequest
      | PlainMessage<GetCallerIdentityRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetCallerIdentityRequest, a, b)
  }
}

/**
 * @generated from message commonfate.access.v1alpha1.GetCallerIdentityResponse
 */
export class GetCallerIdentityResponse extends Message<GetCallerIdentityResponse> {
  /**
   * The chain of the identities for the user.
   * The final item in the chain is the current identity the user is acting as,
   * and is the 'principal' for authorization policy evaluations.
   *
   * For users authenticating with OIDC, the chain will usually look like:
   * 1. OIDC::Subject::"https://oidc-issuer.example.com/93fcac4b-ab67-405c-926b-184f8ba697a4"
   * 2. CF::User::"usr_2Z0WQkw9Ogpsn2Us6RuIBiDRYzJ"
   *
   * @generated from field: repeated commonfate.access.v1alpha1.IdentityLink chain = 1;
   */
  chain: IdentityLink[] = []

  /**
   * The principal that the user is currently acting as.
   *
   * @generated from field: commonfate.access.v1alpha1.User principal = 2;
   */
  principal?: User

  constructor(data?: PartialMessage<GetCallerIdentityResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.access.v1alpha1.GetCallerIdentityResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain', kind: 'message', T: IdentityLink, repeated: true },
    { no: 2, name: 'principal', kind: 'message', T: User }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetCallerIdentityResponse {
    return new GetCallerIdentityResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetCallerIdentityResponse {
    return new GetCallerIdentityResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetCallerIdentityResponse {
    return new GetCallerIdentityResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | GetCallerIdentityResponse
      | PlainMessage<GetCallerIdentityResponse>
      | undefined,
    b:
      | GetCallerIdentityResponse
      | PlainMessage<GetCallerIdentityResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetCallerIdentityResponse, a, b)
  }
}

/**
 * @generated from message commonfate.access.v1alpha1.IdentityLink
 */
export class IdentityLink extends Message<IdentityLink> {
  /**
   * @generated from field: commonfate.entity.v1alpha1.EID id = 1;
   */
  id?: EID

  /**
   * @generated from field: string label = 2;
   */
  label = ''

  constructor(data?: PartialMessage<IdentityLink>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.access.v1alpha1.IdentityLink'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'message', T: EID },
    { no: 2, name: 'label', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): IdentityLink {
    return new IdentityLink().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): IdentityLink {
    return new IdentityLink().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): IdentityLink {
    return new IdentityLink().fromJsonString(jsonString, options)
  }

  static equals(
    a: IdentityLink | PlainMessage<IdentityLink> | undefined,
    b: IdentityLink | PlainMessage<IdentityLink> | undefined
  ): boolean {
    return proto3.util.equals(IdentityLink, a, b)
  }
}
