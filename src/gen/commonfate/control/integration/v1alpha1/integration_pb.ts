// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/control/integration/v1alpha1/integration.proto (package commonfate.control.integration.v1alpha1, syntax proto3)
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
import { GCP } from './gcp_pb.js'
import { AWSIDC } from './aws_idc_pb.js'
import { Slack } from './slack_pb.js'
import { PagerDuty } from './pagerduty_pb.js'
import { OpsGenie } from './opsgenie_pb.js'
import { Entra } from './entra_pb.js'
import { AWSRDS } from './aws_rds_pb.js'
import { Okta } from './okta_pb.js'
import { DataStax } from './datastax_pb.js'
import { Diagnostic } from '../../../access/v1alpha1/diagnostic_pb.js'

/**
 * @generated from enum commonfate.control.integration.v1alpha1.Status
 */
export enum Status {
  /**
   * @generated from enum value: STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATUS_PENDING_SETUP = 1;
   */
  PENDING_SETUP = 1,

  /**
   * @generated from enum value: STATUS_HEALTHY = 2;
   */
  HEALTHY = 2,

  /**
   * @generated from enum value: STATUS_UNHEALTHY = 3;
   */
  UNHEALTHY = 3
}
// Retrieve enum metadata with: proto3.getEnumType(Status)
proto3.util.setEnumType(
  Status,
  'commonfate.control.integration.v1alpha1.Status',
  [
    { no: 0, name: 'STATUS_UNSPECIFIED' },
    { no: 1, name: 'STATUS_PENDING_SETUP' },
    { no: 2, name: 'STATUS_HEALTHY' },
    { no: 3, name: 'STATUS_UNHEALTHY' }
  ]
)

/**
 * @generated from message commonfate.control.integration.v1alpha1.ListIntegrationsRequest
 */
export class ListIntegrationsRequest extends Message<ListIntegrationsRequest> {
  /**
   * The token for the next page.
   *
   * @generated from field: string page_token = 1;
   */
  pageToken = ''

  constructor(data?: PartialMessage<ListIntegrationsRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.ListIntegrationsRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'page_token', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ListIntegrationsRequest {
    return new ListIntegrationsRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ListIntegrationsRequest {
    return new ListIntegrationsRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ListIntegrationsRequest {
    return new ListIntegrationsRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | ListIntegrationsRequest
      | PlainMessage<ListIntegrationsRequest>
      | undefined,
    b:
      | ListIntegrationsRequest
      | PlainMessage<ListIntegrationsRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(ListIntegrationsRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.ListIntegrationsResponse
 */
export class ListIntegrationsResponse extends Message<ListIntegrationsResponse> {
  /**
   * @generated from field: repeated commonfate.control.integration.v1alpha1.Integration integrations = 1;
   */
  integrations: Integration[] = []

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = ''

  constructor(data?: PartialMessage<ListIntegrationsResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.ListIntegrationsResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'integrations',
      kind: 'message',
      T: Integration,
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
  ): ListIntegrationsResponse {
    return new ListIntegrationsResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ListIntegrationsResponse {
    return new ListIntegrationsResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ListIntegrationsResponse {
    return new ListIntegrationsResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | ListIntegrationsResponse
      | PlainMessage<ListIntegrationsResponse>
      | undefined,
    b:
      | ListIntegrationsResponse
      | PlainMessage<ListIntegrationsResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(ListIntegrationsResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.CreateIntegrationRequest
 */
export class CreateIntegrationRequest extends Message<CreateIntegrationRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = ''

  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Config config = 2;
   */
  config?: Config

  constructor(data?: PartialMessage<CreateIntegrationRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.CreateIntegrationRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'config', kind: 'message', T: Config }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateIntegrationRequest {
    return new CreateIntegrationRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateIntegrationRequest {
    return new CreateIntegrationRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateIntegrationRequest {
    return new CreateIntegrationRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CreateIntegrationRequest
      | PlainMessage<CreateIntegrationRequest>
      | undefined,
    b:
      | CreateIntegrationRequest
      | PlainMessage<CreateIntegrationRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(CreateIntegrationRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.Config
 */
export class Config extends Message<Config> {
  /**
   * @generated from oneof commonfate.control.integration.v1alpha1.Config.config
   */
  config:
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.GCP gcp = 1;
         */
        value: GCP
        case: 'gcp'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.AWSIDC aws_idc = 2;
         */
        value: AWSIDC
        case: 'awsIdc'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.Slack slack = 3;
         */
        value: Slack
        case: 'slack'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.PagerDuty pagerduty = 4;
         */
        value: PagerDuty
        case: 'pagerduty'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.OpsGenie opsgenie = 5;
         */
        value: OpsGenie
        case: 'opsgenie'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.Entra entra = 6;
         */
        value: Entra
        case: 'entra'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.AWSRDS aws_rds = 7;
         */
        value: AWSRDS
        case: 'awsRds'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.Okta okta = 8;
         */
        value: Okta
        case: 'okta'
      }
    | {
        /**
         * @generated from field: commonfate.control.integration.v1alpha1.DataStax datastax = 9;
         */
        value: DataStax
        case: 'datastax'
      }
    | { case: undefined; value?: undefined } = { case: undefined }

  constructor(data?: PartialMessage<Config>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.control.integration.v1alpha1.Config'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'gcp', kind: 'message', T: GCP, oneof: 'config' },
    { no: 2, name: 'aws_idc', kind: 'message', T: AWSIDC, oneof: 'config' },
    { no: 3, name: 'slack', kind: 'message', T: Slack, oneof: 'config' },
    {
      no: 4,
      name: 'pagerduty',
      kind: 'message',
      T: PagerDuty,
      oneof: 'config'
    },
    { no: 5, name: 'opsgenie', kind: 'message', T: OpsGenie, oneof: 'config' },
    { no: 6, name: 'entra', kind: 'message', T: Entra, oneof: 'config' },
    { no: 7, name: 'aws_rds', kind: 'message', T: AWSRDS, oneof: 'config' },
    { no: 8, name: 'okta', kind: 'message', T: Okta, oneof: 'config' },
    { no: 9, name: 'datastax', kind: 'message', T: DataStax, oneof: 'config' }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Config {
    return new Config().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Config {
    return new Config().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Config {
    return new Config().fromJsonString(jsonString, options)
  }

  static equals(
    a: Config | PlainMessage<Config> | undefined,
    b: Config | PlainMessage<Config> | undefined
  ): boolean {
    return proto3.util.equals(Config, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.Integration
 */
export class Integration extends Message<Integration> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * @generated from field: string name = 2;
   */
  name = ''

  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Status status = 4;
   */
  status = Status.UNSPECIFIED

  /**
   * @generated from field: repeated commonfate.access.v1alpha1.Diagnostic diagnostics = 5;
   */
  diagnostics: Diagnostic[] = []

  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Config config = 6;
   */
  config?: Config

  /**
   * @generated from field: string setup_url = 7;
   */
  setupUrl = ''

  constructor(data?: PartialMessage<Integration>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.Integration'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'status', kind: 'enum', T: proto3.getEnumType(Status) },
    {
      no: 5,
      name: 'diagnostics',
      kind: 'message',
      T: Diagnostic,
      repeated: true
    },
    { no: 6, name: 'config', kind: 'message', T: Config },
    { no: 7, name: 'setup_url', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Integration {
    return new Integration().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Integration {
    return new Integration().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Integration {
    return new Integration().fromJsonString(jsonString, options)
  }

  static equals(
    a: Integration | PlainMessage<Integration> | undefined,
    b: Integration | PlainMessage<Integration> | undefined
  ): boolean {
    return proto3.util.equals(Integration, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.CreateIntegrationResponse
 */
export class CreateIntegrationResponse extends Message<CreateIntegrationResponse> {
  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Integration integration = 1;
   */
  integration?: Integration

  constructor(data?: PartialMessage<CreateIntegrationResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.CreateIntegrationResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'integration', kind: 'message', T: Integration }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateIntegrationResponse {
    return new CreateIntegrationResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateIntegrationResponse {
    return new CreateIntegrationResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateIntegrationResponse {
    return new CreateIntegrationResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | CreateIntegrationResponse
      | PlainMessage<CreateIntegrationResponse>
      | undefined,
    b:
      | CreateIntegrationResponse
      | PlainMessage<CreateIntegrationResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(CreateIntegrationResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.GetIntegrationRequest
 */
export class GetIntegrationRequest extends Message<GetIntegrationRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<GetIntegrationRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.GetIntegrationRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetIntegrationRequest {
    return new GetIntegrationRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetIntegrationRequest {
    return new GetIntegrationRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetIntegrationRequest {
    return new GetIntegrationRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: GetIntegrationRequest | PlainMessage<GetIntegrationRequest> | undefined,
    b: GetIntegrationRequest | PlainMessage<GetIntegrationRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetIntegrationRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.GetIntegrationResponse
 */
export class GetIntegrationResponse extends Message<GetIntegrationResponse> {
  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Integration integration = 1;
   */
  integration?: Integration

  constructor(data?: PartialMessage<GetIntegrationResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.GetIntegrationResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'integration', kind: 'message', T: Integration }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetIntegrationResponse {
    return new GetIntegrationResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetIntegrationResponse {
    return new GetIntegrationResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetIntegrationResponse {
    return new GetIntegrationResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | GetIntegrationResponse
      | PlainMessage<GetIntegrationResponse>
      | undefined,
    b: GetIntegrationResponse | PlainMessage<GetIntegrationResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetIntegrationResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.UpdateIntegrationRequest
 */
export class UpdateIntegrationRequest extends Message<UpdateIntegrationRequest> {
  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Integration integration = 1;
   */
  integration?: Integration

  constructor(data?: PartialMessage<UpdateIntegrationRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.UpdateIntegrationRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'integration', kind: 'message', T: Integration }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdateIntegrationRequest {
    return new UpdateIntegrationRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdateIntegrationRequest {
    return new UpdateIntegrationRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdateIntegrationRequest {
    return new UpdateIntegrationRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | UpdateIntegrationRequest
      | PlainMessage<UpdateIntegrationRequest>
      | undefined,
    b:
      | UpdateIntegrationRequest
      | PlainMessage<UpdateIntegrationRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(UpdateIntegrationRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.UpdateIntegrationResponse
 */
export class UpdateIntegrationResponse extends Message<UpdateIntegrationResponse> {
  /**
   * @generated from field: commonfate.control.integration.v1alpha1.Integration integration = 1;
   */
  integration?: Integration

  constructor(data?: PartialMessage<UpdateIntegrationResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.UpdateIntegrationResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'integration', kind: 'message', T: Integration }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UpdateIntegrationResponse {
    return new UpdateIntegrationResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UpdateIntegrationResponse {
    return new UpdateIntegrationResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UpdateIntegrationResponse {
    return new UpdateIntegrationResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | UpdateIntegrationResponse
      | PlainMessage<UpdateIntegrationResponse>
      | undefined,
    b:
      | UpdateIntegrationResponse
      | PlainMessage<UpdateIntegrationResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(UpdateIntegrationResponse, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.DeleteIntegrationRequest
 */
export class DeleteIntegrationRequest extends Message<DeleteIntegrationRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<DeleteIntegrationRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.DeleteIntegrationRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteIntegrationRequest {
    return new DeleteIntegrationRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteIntegrationRequest {
    return new DeleteIntegrationRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteIntegrationRequest {
    return new DeleteIntegrationRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | DeleteIntegrationRequest
      | PlainMessage<DeleteIntegrationRequest>
      | undefined,
    b:
      | DeleteIntegrationRequest
      | PlainMessage<DeleteIntegrationRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(DeleteIntegrationRequest, a, b)
  }
}

/**
 * @generated from message commonfate.control.integration.v1alpha1.DeleteIntegrationResponse
 */
export class DeleteIntegrationResponse extends Message<DeleteIntegrationResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  constructor(data?: PartialMessage<DeleteIntegrationResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.control.integration.v1alpha1.DeleteIntegrationResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteIntegrationResponse {
    return new DeleteIntegrationResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteIntegrationResponse {
    return new DeleteIntegrationResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteIntegrationResponse {
    return new DeleteIntegrationResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | DeleteIntegrationResponse
      | PlainMessage<DeleteIntegrationResponse>
      | undefined,
    b:
      | DeleteIntegrationResponse
      | PlainMessage<DeleteIntegrationResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(DeleteIntegrationResponse, a, b)
  }
}
