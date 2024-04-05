// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/control/oauth/v1alpha1/oauth.proto (package commonfate.control.oauth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  GetPagerDutyIntegrationRequest,
  GetPagerDutyIntegrationResponse,
  GetSlackIntegrationRequest,
  GetSlackIntegrationResponse,
  RemovePagerDutyIntegrationRequest,
  RemovePagerDutyIntegrationResponse,
  RemoveSlackIntegrationRequest,
  RemoveSlackIntegrationResponse
} from './oauth_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * @generated from service commonfate.control.oauth.v1alpha1.OAuthService
 */
export const OAuthService = {
  typeName: 'commonfate.control.oauth.v1alpha1.OAuthService',
  methods: {
    /**
     * rpc CreatePagerDutyIntegration(CreatePagerDutyIntegrationRequest) returns (CreatePagerDutyIntegrationResponse) {}
     *
     * @generated from rpc commonfate.control.oauth.v1alpha1.OAuthService.GetPagerDutyIntegration
     */
    getPagerDutyIntegration: {
      name: 'GetPagerDutyIntegration',
      I: GetPagerDutyIntegrationRequest,
      O: GetPagerDutyIntegrationResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.oauth.v1alpha1.OAuthService.RemovePagerDutyIntegration
     */
    removePagerDutyIntegration: {
      name: 'RemovePagerDutyIntegration',
      I: RemovePagerDutyIntegrationRequest,
      O: RemovePagerDutyIntegrationResponse,
      kind: MethodKind.Unary
    },
    /**
     * rpc CreateSlackIntegration(CreateSlackIntegrationRequest) returns (CreateSlackIntegrationResponse) {}
     *
     * @generated from rpc commonfate.control.oauth.v1alpha1.OAuthService.GetSlackIntegration
     */
    getSlackIntegration: {
      name: 'GetSlackIntegration',
      I: GetSlackIntegrationRequest,
      O: GetSlackIntegrationResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.oauth.v1alpha1.OAuthService.RemoveSlackIntegration
     */
    removeSlackIntegration: {
      name: 'RemoveSlackIntegration',
      I: RemoveSlackIntegrationRequest,
      O: RemoveSlackIntegrationResponse,
      kind: MethodKind.Unary
    }
  }
} as const
