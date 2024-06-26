// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/access/v1alpha1/identity.proto (package commonfate.access.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  GetCallerIdentityRequest,
  GetCallerIdentityResponse
} from './identity_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * @generated from service commonfate.access.v1alpha1.IdentityService
 */
export const IdentityService = {
  typeName: 'commonfate.access.v1alpha1.IdentityService',
  methods: {
    /**
     * @generated from rpc commonfate.access.v1alpha1.IdentityService.GetCallerIdentity
     */
    getCallerIdentity: {
      name: 'GetCallerIdentity',
      I: GetCallerIdentityRequest,
      O: GetCallerIdentityResponse,
      kind: MethodKind.Unary
    }
  }
} as const
