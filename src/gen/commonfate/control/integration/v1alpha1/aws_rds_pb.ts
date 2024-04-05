// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/control/integration/v1alpha1/aws_rds.proto (package commonfate.control.integration.v1alpha1, syntax proto3)
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
 * @generated from message commonfate.control.integration.v1alpha1.AWSRDS
 */
export class AWSRDS extends Message<AWSRDS> {
  /**
   * @generated from field: repeated string regions = 1;
   */
  regions: string[] = []

  /**
   * @generated from field: repeated string read_role_arns = 2;
   */
  readRoleArns: string[] = []

  constructor(data?: PartialMessage<AWSRDS>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.control.integration.v1alpha1.AWSRDS'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'regions',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true
    },
    {
      no: 2,
      name: 'read_role_arns',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): AWSRDS {
    return new AWSRDS().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): AWSRDS {
    return new AWSRDS().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): AWSRDS {
    return new AWSRDS().fromJsonString(jsonString, options)
  }

  static equals(
    a: AWSRDS | PlainMessage<AWSRDS> | undefined,
    b: AWSRDS | PlainMessage<AWSRDS> | undefined
  ): boolean {
    return proto3.util.equals(AWSRDS, a, b)
  }
}
