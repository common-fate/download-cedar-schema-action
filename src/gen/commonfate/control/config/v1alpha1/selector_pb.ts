// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/control/config/v1alpha1/selector.proto (package commonfate.control.config.v1alpha1, syntax proto3)
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
import { EID } from '../../../entity/v1alpha1/eid_pb.js'
import { Diagnostic } from '../../../access/v1alpha1/diagnostic_pb.js'

/**
 * @generated from message commonfate.control.config.v1alpha1.CreateSelectorRequest
 */
export class CreateSelectorRequest extends Message<CreateSelectorRequest> {
  /**
   * @generated from field: commonfate.control.config.v1alpha1.Selector selector = 1;
   */
  selector?: Selector

  constructor(data?: PartialMessage<CreateSelectorRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.CreateSelectorRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'selector', kind: 'message', T: Selector }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateSelectorRequest {
    return new CreateSelectorRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateSelectorRequest {
    return new CreateSelectorRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateSelectorRequest {
    return new CreateSelectorRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: CreateSelectorRequest | PlainMessage<CreateSelectorRequest> | undefined,
    b: CreateSelectorRequest | PlainMessage<CreateSelectorRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreateSelectorRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.Selector
 */
export class Selector extends Message<Selector> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * @generated from field: string name = 2;
   */
  name = ''

  /**
   * @generated from field: string resource_type = 3;
   */
  resourceType = ''

  /**
   * @generated from field: commonfate.entity.v1alpha1.EID belonging_to = 4;
   */
  belongingTo?: EID

  /**
   * @generated from field: string when = 5;
   */
  when = ''

  constructor(data?: PartialMessage<Selector>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.control.config.v1alpha1.Selector'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'resource_type',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    { no: 4, name: 'belonging_to', kind: 'message', T: EID },
    { no: 5, name: 'when', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Selector {
    return new Selector().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Selector {
    return new Selector().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Selector {
    return new Selector().fromJsonString(jsonString, options)
  }

  static equals(
    a: Selector | PlainMessage<Selector> | undefined,
    b: Selector | PlainMessage<Selector> | undefined
  ): boolean {
    return proto3.util.equals(Selector, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.CreateSelectorResponse
 */
export class CreateSelectorResponse extends Message<CreateSelectorResponse> {
  /**
   * @generated from field: commonfate.control.config.v1alpha1.Selector selector = 1;
   */
  selector?: Selector

  /**
   * @generated from field: repeated commonfate.access.v1alpha1.Diagnostic diagnostics = 2;
   */
  diagnostics: Diagnostic[] = []

  constructor(data?: PartialMessage<CreateSelectorResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.CreateSelectorResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'selector', kind: 'message', T: Selector },
    {
      no: 2,
      name: 'diagnostics',
      kind: 'message',
      T: Diagnostic,
      repeated: true
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateSelectorResponse {
    return new CreateSelectorResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateSelectorResponse {
    return new CreateSelectorResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateSelectorResponse {
    return new CreateSelectorResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CreateSelectorResponse
      | PlainMessage<CreateSelectorResponse>
      | undefined,
    b: CreateSelectorResponse | PlainMessage<CreateSelectorResponse> | undefined
  ): boolean {
    return proto3.util.equals(CreateSelectorResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.GetSelectorRequest
 */
export class GetSelectorRequest extends Message<GetSelectorRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<GetSelectorRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.GetSelectorRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetSelectorRequest {
    return new GetSelectorRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetSelectorRequest {
    return new GetSelectorRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetSelectorRequest {
    return new GetSelectorRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetSelectorRequest | PlainMessage<GetSelectorRequest> | undefined,
    b: GetSelectorRequest | PlainMessage<GetSelectorRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetSelectorRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.GetSelectorResponse
 */
export class GetSelectorResponse extends Message<GetSelectorResponse> {
  /**
   * @generated from field: commonfate.control.config.v1alpha1.Selector selector = 1;
   */
  selector?: Selector

  constructor(data?: PartialMessage<GetSelectorResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.GetSelectorResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'selector', kind: 'message', T: Selector }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetSelectorResponse {
    return new GetSelectorResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetSelectorResponse {
    return new GetSelectorResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetSelectorResponse {
    return new GetSelectorResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetSelectorResponse | PlainMessage<GetSelectorResponse> | undefined,
    b: GetSelectorResponse | PlainMessage<GetSelectorResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetSelectorResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.UpdateSelectorRequest
 */
export class UpdateSelectorRequest extends Message<UpdateSelectorRequest> {
  /**
   * @generated from field: commonfate.control.config.v1alpha1.Selector selector = 1;
   */
  selector?: Selector

  constructor(data?: PartialMessage<UpdateSelectorRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.UpdateSelectorRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'selector', kind: 'message', T: Selector }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdateSelectorRequest {
    return new UpdateSelectorRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdateSelectorRequest {
    return new UpdateSelectorRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdateSelectorRequest {
    return new UpdateSelectorRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: UpdateSelectorRequest | PlainMessage<UpdateSelectorRequest> | undefined,
    b: UpdateSelectorRequest | PlainMessage<UpdateSelectorRequest> | undefined
  ): boolean {
    return proto3.util.equals(UpdateSelectorRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.UpdateSelectorResponse
 */
export class UpdateSelectorResponse extends Message<UpdateSelectorResponse> {
  /**
   * @generated from field: commonfate.control.config.v1alpha1.Selector selector = 1;
   */
  selector?: Selector

  /**
   * @generated from field: repeated commonfate.access.v1alpha1.Diagnostic diagnostics = 2;
   */
  diagnostics: Diagnostic[] = []

  constructor(data?: PartialMessage<UpdateSelectorResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.UpdateSelectorResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'selector', kind: 'message', T: Selector },
    {
      no: 2,
      name: 'diagnostics',
      kind: 'message',
      T: Diagnostic,
      repeated: true
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdateSelectorResponse {
    return new UpdateSelectorResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdateSelectorResponse {
    return new UpdateSelectorResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdateSelectorResponse {
    return new UpdateSelectorResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | UpdateSelectorResponse
      | PlainMessage<UpdateSelectorResponse>
      | undefined,
    b: UpdateSelectorResponse | PlainMessage<UpdateSelectorResponse> | undefined
  ): boolean {
    return proto3.util.equals(UpdateSelectorResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.DeleteSelectorRequest
 */
export class DeleteSelectorRequest extends Message<DeleteSelectorRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<DeleteSelectorRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.DeleteSelectorRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteSelectorRequest {
    return new DeleteSelectorRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteSelectorRequest {
    return new DeleteSelectorRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteSelectorRequest {
    return new DeleteSelectorRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: DeleteSelectorRequest | PlainMessage<DeleteSelectorRequest> | undefined,
    b: DeleteSelectorRequest | PlainMessage<DeleteSelectorRequest> | undefined
  ): boolean {
    return proto3.util.equals(DeleteSelectorRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.config.v1alpha1.DeleteSelectorResponse
 */
export class DeleteSelectorResponse extends Message<DeleteSelectorResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<DeleteSelectorResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.config.v1alpha1.DeleteSelectorResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteSelectorResponse {
    return new DeleteSelectorResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteSelectorResponse {
    return new DeleteSelectorResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteSelectorResponse {
    return new DeleteSelectorResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | DeleteSelectorResponse
      | PlainMessage<DeleteSelectorResponse>
      | undefined,
    b: DeleteSelectorResponse | PlainMessage<DeleteSelectorResponse> | undefined
  ): boolean {
    return proto3.util.equals(DeleteSelectorResponse, a, b)
  }
}
