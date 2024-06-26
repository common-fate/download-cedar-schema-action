// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/authz/v1alpha1/authz.proto (package commonfate.authz.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BatchAuthorizeRequest, BatchAuthorizeResponse } from './authz_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * The API for the authz service.
 *
 * authz is a globally-distributed, highly available entity store and authorization API.
 * Entity data and policies are written to authz, and the service indexes permissions to determine
 * what resources each principal can access.
 *
 * Reads and writes to authz are eventually consistent.
 *
 * @generated from service commonfate.authz.v1alpha1.AuthzService
 */
export const AuthzService = {
  typeName: 'commonfate.authz.v1alpha1.AuthzService',
  methods: {
    /**
     * run multiple authorization evaluations and returns allow + deny for each.
     *
     * @generated from rpc commonfate.authz.v1alpha1.AuthzService.BatchAuthorize
     */
    batchAuthorize: {
      name: 'BatchAuthorize',
      I: BatchAuthorizeRequest,
      O: BatchAuthorizeResponse,
      kind: MethodKind.Unary
    }
  }
} as const
