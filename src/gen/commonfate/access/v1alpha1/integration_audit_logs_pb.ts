// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file commonfate/access/v1alpha1/integration_audit_logs.proto (package commonfate.access.v1alpha1, syntax proto3)
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
import { Message, proto3, Struct, Timestamp } from '@bufbuild/protobuf'

/**
 * @generated from message commonfate.access.v1alpha1.BatchPutAuditLogRequest
 */
export class BatchPutAuditLogRequest extends Message<BatchPutAuditLogRequest> {
  /**
   * @generated from field: string grant_id = 1;
   */
  grantId = ''

  /**
   * @generated from field: repeated commonfate.access.v1alpha1.IntegrationAuditLog audit_logs = 2;
   */
  auditLogs: IntegrationAuditLog[] = []

  constructor(data?: PartialMessage<BatchPutAuditLogRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.access.v1alpha1.BatchPutAuditLogRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'grant_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'audit_logs',
      kind: 'message',
      T: IntegrationAuditLog,
      repeated: true
    }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): BatchPutAuditLogRequest {
    return new BatchPutAuditLogRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): BatchPutAuditLogRequest {
    return new BatchPutAuditLogRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): BatchPutAuditLogRequest {
    return new BatchPutAuditLogRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | BatchPutAuditLogRequest
      | PlainMessage<BatchPutAuditLogRequest>
      | undefined,
    b:
      | BatchPutAuditLogRequest
      | PlainMessage<BatchPutAuditLogRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(BatchPutAuditLogRequest, a, b)
  }
}

/**
 * @generated from message commonfate.access.v1alpha1.BatchPutAuditLogResponse
 */
export class BatchPutAuditLogResponse extends Message<BatchPutAuditLogResponse> {
  constructor(data?: PartialMessage<BatchPutAuditLogResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    'commonfate.access.v1alpha1.BatchPutAuditLogResponse'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): BatchPutAuditLogResponse {
    return new BatchPutAuditLogResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): BatchPutAuditLogResponse {
    return new BatchPutAuditLogResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): BatchPutAuditLogResponse {
    return new BatchPutAuditLogResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | BatchPutAuditLogResponse
      | PlainMessage<BatchPutAuditLogResponse>
      | undefined,
    b:
      | BatchPutAuditLogResponse
      | PlainMessage<BatchPutAuditLogResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(BatchPutAuditLogResponse, a, b)
  }
}

/**
 * @generated from message commonfate.access.v1alpha1.IntegrationAuditLog
 */
export class IntegrationAuditLog extends Message<IntegrationAuditLog> {
  /**
   * the action which occurred
   *
   * @generated from field: string action = 1;
   */
  action = ''

  /**
   * the timestamp the action occurred at.
   *
   * @generated from field: google.protobuf.Timestamp occurred_at = 2;
   */
  occurredAt?: Timestamp

  /**
   * a human-friendly message describing the action.
   *
   * @generated from field: string message = 3;
   */
  message = ''

  /**
   * structured data details the audit log event
   *
   * @generated from field: google.protobuf.Struct details = 4;
   */
  details?: Struct

  constructor(data?: PartialMessage<IntegrationAuditLog>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'commonfate.access.v1alpha1.IntegrationAuditLog'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'action', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'occurred_at', kind: 'message', T: Timestamp },
    { no: 3, name: 'message', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'details', kind: 'message', T: Struct }
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): IntegrationAuditLog {
    return new IntegrationAuditLog().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): IntegrationAuditLog {
    return new IntegrationAuditLog().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): IntegrationAuditLog {
    return new IntegrationAuditLog().fromJsonString(jsonString, options)
  }

  static equals(
    a: IntegrationAuditLog | PlainMessage<IntegrationAuditLog> | undefined,
    b: IntegrationAuditLog | PlainMessage<IntegrationAuditLog> | undefined
  ): boolean {
    return proto3.util.equals(IntegrationAuditLog, a, b)
  }
}
