// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/entity/v1alpha1/child_relation.proto (package commonfate.entity.v1alpha1, syntax proto3)
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
import { EID } from './eid_pb.js'

/**
 * @generated from message commonfate.entity.v1alpha1.ChildRelation
 */
export class ChildRelation extends Message<ChildRelation> {
  /**
   * @generated from field: commonfate.entity.v1alpha1.EID parent = 1;
   */
  parent?: EID

  /**
   * @generated from field: commonfate.entity.v1alpha1.EID child = 2;
   */
  child?: EID

  constructor(data?: PartialMessage<ChildRelation>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.entity.v1alpha1.ChildRelation'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'parent', kind: 'message', T: EID },
    { no: 2, name: 'child', kind: 'message', T: EID }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ChildRelation {
    return new ChildRelation().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ChildRelation {
    return new ChildRelation().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ChildRelation {
    return new ChildRelation().fromJsonString(jsonString, options)
  }

  static equals(
    a: ChildRelation | PlainMessage<ChildRelation> | undefined,
    b: ChildRelation | PlainMessage<ChildRelation> | undefined
  ): boolean {
    return proto3.util.equals(ChildRelation, a, b)
  }
}
