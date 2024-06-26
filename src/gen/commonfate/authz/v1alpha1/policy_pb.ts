// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/authz/v1alpha1/policy.proto (package commonfate.authz.v1alpha1, syntax proto3)
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

/**
 * @generated from message commonfate.authz.v1alpha1.Policy
 */
export class Policy extends Message<Policy> {
  /**
   * ID of the policy.
   *
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * Cedar code for the policy set.
   *
   * @generated from field: string text = 2;
   */
  text = ''

  constructor(data?: PartialMessage<Policy>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.Policy'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Policy {
    return new Policy().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Policy {
    return new Policy().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Policy {
    return new Policy().fromJsonString(jsonString, options)
  }

  static equals(
    a: Policy | PlainMessage<Policy> | undefined,
    b: Policy | PlainMessage<Policy> | undefined
  ): boolean {
    return proto3.util.equals(Policy, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.PolicySet
 */
export class PolicySet extends Message<PolicySet> {
  /**
   * ID of the policy set.
   *
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * The policies contained in the policy set.
   *
   * @generated from field: repeated commonfate.authz.v1alpha1.Policy policies = 2;
   */
  policies: Policy[] = []

  /**
   * The source code for the policy set.
   *
   * @generated from field: string text = 3;
   */
  text = ''

  constructor(data?: PartialMessage<PolicySet>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.PolicySet'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'policies', kind: 'message', T: Policy, repeated: true },
    { no: 3, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): PolicySet {
    return new PolicySet().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): PolicySet {
    return new PolicySet().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): PolicySet {
    return new PolicySet().fromJsonString(jsonString, options)
  }

  static equals(
    a: PolicySet | PlainMessage<PolicySet> | undefined,
    b: PolicySet | PlainMessage<PolicySet> | undefined
  ): boolean {
    return proto3.util.equals(PolicySet, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.PolicySetInput
 */
export class PolicySetInput extends Message<PolicySetInput> {
  /**
   * ID of the policy.
   *
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * Cedar code for the policy set.
   *
   * @generated from field: string text = 2;
   */
  text = ''

  constructor(data?: PartialMessage<PolicySetInput>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.PolicySetInput'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): PolicySetInput {
    return new PolicySetInput().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): PolicySetInput {
    return new PolicySetInput().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): PolicySetInput {
    return new PolicySetInput().fromJsonString(jsonString, options)
  }

  static equals(
    a: PolicySetInput | PlainMessage<PolicySetInput> | undefined,
    b: PolicySetInput | PlainMessage<PolicySetInput> | undefined
  ): boolean {
    return proto3.util.equals(PolicySetInput, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.ListPolicySetsRequest
 */
export class ListPolicySetsRequest extends Message<ListPolicySetsRequest> {
  /**
   * The token for the next page.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = ''

  constructor(data?: PartialMessage<ListPolicySetsRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.ListPolicySetsRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 4, name: 'page_token', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ListPolicySetsRequest {
    return new ListPolicySetsRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ListPolicySetsRequest {
    return new ListPolicySetsRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ListPolicySetsRequest {
    return new ListPolicySetsRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: ListPolicySetsRequest | PlainMessage<ListPolicySetsRequest> | undefined,
    b: ListPolicySetsRequest | PlainMessage<ListPolicySetsRequest> | undefined
  ): boolean {
    return proto3.util.equals(ListPolicySetsRequest, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.ListPolicySetsResponse
 */
export class ListPolicySetsResponse extends Message<ListPolicySetsResponse> {
  /**
   * @generated from field: repeated commonfate.authz.v1alpha1.PolicySet policy_sets = 1;
   */
  policySets: PolicySet[] = []

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = ''

  constructor(data?: PartialMessage<ListPolicySetsResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.ListPolicySetsResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'policy_sets',
      kind: 'message',
      T: PolicySet,
      repeated: true
    },
    {
      no: 2,
      name: 'next_page_token',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ListPolicySetsResponse {
    return new ListPolicySetsResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ListPolicySetsResponse {
    return new ListPolicySetsResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ListPolicySetsResponse {
    return new ListPolicySetsResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | ListPolicySetsResponse
      | PlainMessage<ListPolicySetsResponse>
      | undefined,
    b: ListPolicySetsResponse | PlainMessage<ListPolicySetsResponse> | undefined
  ): boolean {
    return proto3.util.equals(ListPolicySetsResponse, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.CreatePolicySetRequest
 */
export class CreatePolicySetRequest extends Message<CreatePolicySetRequest> {
  /**
   * @generated from field: commonfate.authz.v1alpha1.PolicySetInput policy_set = 1;
   */
  policySet?: PolicySetInput

  constructor(data?: PartialMessage<CreatePolicySetRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.CreatePolicySetRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'policy_set', kind: 'message', T: PolicySetInput }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreatePolicySetRequest {
    return new CreatePolicySetRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreatePolicySetRequest {
    return new CreatePolicySetRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreatePolicySetRequest {
    return new CreatePolicySetRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CreatePolicySetRequest
      | PlainMessage<CreatePolicySetRequest>
      | undefined,
    b: CreatePolicySetRequest | PlainMessage<CreatePolicySetRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreatePolicySetRequest, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.CreatePolicySetResponse
 */
export class CreatePolicySetResponse extends Message<CreatePolicySetResponse> {
  /**
   * @generated from field: commonfate.authz.v1alpha1.PolicySet policy_set = 1;
   */
  policySet?: PolicySet

  constructor(data?: PartialMessage<CreatePolicySetResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.CreatePolicySetResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'policy_set', kind: 'message', T: PolicySet }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreatePolicySetResponse {
    return new CreatePolicySetResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreatePolicySetResponse {
    return new CreatePolicySetResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreatePolicySetResponse {
    return new CreatePolicySetResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CreatePolicySetResponse
      | PlainMessage<CreatePolicySetResponse>
      | undefined,
    b:
      | CreatePolicySetResponse
      | PlainMessage<CreatePolicySetResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(CreatePolicySetResponse, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.UpdatePolicySetRequest
 */
export class UpdatePolicySetRequest extends Message<UpdatePolicySetRequest> {
  /**
   * @generated from field: commonfate.authz.v1alpha1.PolicySetInput policy_set = 1;
   */
  policySet?: PolicySetInput

  constructor(data?: PartialMessage<UpdatePolicySetRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.UpdatePolicySetRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'policy_set', kind: 'message', T: PolicySetInput }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdatePolicySetRequest {
    return new UpdatePolicySetRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdatePolicySetRequest {
    return new UpdatePolicySetRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdatePolicySetRequest {
    return new UpdatePolicySetRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | UpdatePolicySetRequest
      | PlainMessage<UpdatePolicySetRequest>
      | undefined,
    b: UpdatePolicySetRequest | PlainMessage<UpdatePolicySetRequest> | undefined
  ): boolean {
    return proto3.util.equals(UpdatePolicySetRequest, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.UpdatePolicySetResponse
 */
export class UpdatePolicySetResponse extends Message<UpdatePolicySetResponse> {
  /**
   * @generated from field: commonfate.authz.v1alpha1.PolicySet policy_set = 1;
   */
  policySet?: PolicySet

  constructor(data?: PartialMessage<UpdatePolicySetResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.UpdatePolicySetResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'policy_set', kind: 'message', T: PolicySet }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdatePolicySetResponse {
    return new UpdatePolicySetResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdatePolicySetResponse {
    return new UpdatePolicySetResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdatePolicySetResponse {
    return new UpdatePolicySetResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | UpdatePolicySetResponse
      | PlainMessage<UpdatePolicySetResponse>
      | undefined,
    b:
      | UpdatePolicySetResponse
      | PlainMessage<UpdatePolicySetResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(UpdatePolicySetResponse, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.DeletePolicySetRequest
 */
export class DeletePolicySetRequest extends Message<DeletePolicySetRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<DeletePolicySetRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.DeletePolicySetRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeletePolicySetRequest {
    return new DeletePolicySetRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeletePolicySetRequest {
    return new DeletePolicySetRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeletePolicySetRequest {
    return new DeletePolicySetRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | DeletePolicySetRequest
      | PlainMessage<DeletePolicySetRequest>
      | undefined,
    b: DeletePolicySetRequest | PlainMessage<DeletePolicySetRequest> | undefined
  ): boolean {
    return proto3.util.equals(DeletePolicySetRequest, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.DeletePolicySetResponse
 */
export class DeletePolicySetResponse extends Message<DeletePolicySetResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<DeletePolicySetResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.DeletePolicySetResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeletePolicySetResponse {
    return new DeletePolicySetResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeletePolicySetResponse {
    return new DeletePolicySetResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeletePolicySetResponse {
    return new DeletePolicySetResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | DeletePolicySetResponse
      | PlainMessage<DeletePolicySetResponse>
      | undefined,
    b:
      | DeletePolicySetResponse
      | PlainMessage<DeletePolicySetResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(DeletePolicySetResponse, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.GetPolicySetRequest
 */
export class GetPolicySetRequest extends Message<GetPolicySetRequest> {
  /**
   * The token for the next page.
   *
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<GetPolicySetRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.GetPolicySetRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetPolicySetRequest {
    return new GetPolicySetRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetPolicySetRequest {
    return new GetPolicySetRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetPolicySetRequest {
    return new GetPolicySetRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetPolicySetRequest | PlainMessage<GetPolicySetRequest> | undefined,
    b: GetPolicySetRequest | PlainMessage<GetPolicySetRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetPolicySetRequest, a, b)
  }
}

/**
 * @generated from message commonfate.authz.v1alpha1.GetPolicySetResponse
 */
export class GetPolicySetResponse extends Message<GetPolicySetResponse> {
  /**
   * @generated from field: commonfate.authz.v1alpha1.PolicySet policy_set = 1;
   */
  policySet?: PolicySet

  constructor(data?: PartialMessage<GetPolicySetResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.authz.v1alpha1.GetPolicySetResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'policy_set', kind: 'message', T: PolicySet }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetPolicySetResponse {
    return new GetPolicySetResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetPolicySetResponse {
    return new GetPolicySetResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetPolicySetResponse {
    return new GetPolicySetResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetPolicySetResponse | PlainMessage<GetPolicySetResponse> | undefined,
    b: GetPolicySetResponse | PlainMessage<GetPolicySetResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetPolicySetResponse, a, b)
  }
}
