// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/control/integration/v1alpha1/slack.proto (package commonfate.control.integration.v1alpha1, syntax proto3)
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
 * @generated from message commonfate.control.integration.v1alpha1.Slack
 */
export class Slack extends Message<Slack> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = ''

  /**
   * @generated from field: string client_secret_secret_path = 2;
   */
  clientSecretSecretPath = ''

  /**
   * @generated from field: string signing_secret_secret_path = 3;
   */
  signingSecretSecretPath = ''

  constructor(data?: PartialMessage<Slack>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.control.integration.v1alpha1.Slack'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'client_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'client_secret_secret_path',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    {
      no: 3,
      name: 'signing_secret_secret_path',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Slack {
    return new Slack().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Slack {
    return new Slack().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Slack {
    return new Slack().fromJsonString(jsonString, options)
  }

  static equals(
    a: Slack | PlainMessage<Slack> | undefined,
    b: Slack | PlainMessage<Slack> | undefined
  ): boolean {
    return proto3.util.equals(Slack, a, b)
  }
}
