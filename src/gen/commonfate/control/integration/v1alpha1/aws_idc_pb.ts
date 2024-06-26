// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/control/integration/v1alpha1/aws_idc.proto (package commonfate.control.integration.v1alpha1, syntax proto3)
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
 * @generated from message commonfate.control.integration.v1alpha1.AWSIDC
 */
export class AWSIDC extends Message<AWSIDC> {
  /**
   * @generated from field: string sso_instance_arn = 1;
   */
  ssoInstanceArn = ''

  /**
   * @generated from field: string identity_store_id = 2;
   */
  identityStoreId = ''

  /**
   * @generated from field: string sso_region = 3;
   */
  ssoRegion = ''

  /**
   * @generated from field: string reader_role_arn = 4;
   */
  readerRoleArn = ''

  /**
   * @generated from field: string audit_role_name = 5;
   */
  auditRoleName = ''

  /**
   * @generated from field: repeated string resource_regions = 6;
   */
  resourceRegions: string[] = []

  constructor(data?: PartialMessage<AWSIDC>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.control.integration.v1alpha1.AWSIDC'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'sso_instance_arn',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    {
      no: 2,
      name: 'identity_store_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    { no: 3, name: 'sso_region', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 4,
      name: 'reader_role_arn',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    {
      no: 5,
      name: 'audit_role_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    {
      no: 6,
      name: 'resource_regions',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): AWSIDC {
    return new AWSIDC().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): AWSIDC {
    return new AWSIDC().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): AWSIDC {
    return new AWSIDC().fromJsonString(jsonString, options)
  }

  static equals(
    a: AWSIDC | PlainMessage<AWSIDC> | undefined,
    b: AWSIDC | PlainMessage<AWSIDC> | undefined
  ): boolean {
    return proto3.util.equals(AWSIDC, a, b)
  }
}
