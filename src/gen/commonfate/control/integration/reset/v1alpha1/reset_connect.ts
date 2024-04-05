// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/control/integration/reset/v1alpha1/reset.proto (package commonfate.control.integration.reset.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CancelBackgroundJobRequest,
  CancelBackgroundJobResponse,
  RelinkEntraUsersRequest,
  RelinkEntraUsersResponse,
  RemoveOAuthTokenRequest,
  RemoveOAuthTokenResponse,
  ResetEntraUsersRequest,
  ResetEntraUsersResponse,
  RetryBackgroundJobRequest,
  RetryBackgroundJobResponse
} from './reset_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * @generated from service commonfate.control.integration.reset.v1alpha1.ResetService
 */
export const ResetService = {
  typeName: 'commonfate.control.integration.reset.v1alpha1.ResetService',
  methods: {
    /**
     * @generated from rpc commonfate.control.integration.reset.v1alpha1.ResetService.ResetEntraUsers
     */
    resetEntraUsers: {
      name: 'ResetEntraUsers',
      I: ResetEntraUsersRequest,
      O: ResetEntraUsersResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.integration.reset.v1alpha1.ResetService.RelinkEntraUsers
     */
    relinkEntraUsers: {
      name: 'RelinkEntraUsers',
      I: RelinkEntraUsersRequest,
      O: RelinkEntraUsersResponse,
      kind: MethodKind.Unary
    },
    /**
     * Removes an OAuth2.0 token from an installed integration from Common Fate.
     *
     * @generated from rpc commonfate.control.integration.reset.v1alpha1.ResetService.RemoveOAuthToken
     */
    removeOAuthToken: {
      name: 'RemoveOAuthToken',
      I: RemoveOAuthTokenRequest,
      O: RemoveOAuthTokenResponse,
      kind: MethodKind.Unary
    },
    /**
     * Cancels all current background tasks for a given kind.
     *
     * @generated from rpc commonfate.control.integration.reset.v1alpha1.ResetService.CancelBackgroundJob
     */
    cancelBackgroundJob: {
      name: 'CancelBackgroundJob',
      I: CancelBackgroundJobRequest,
      O: CancelBackgroundJobResponse,
      kind: MethodKind.Unary
    },
    /**
     * retries the given job ID is it is in the retryable state.
     *
     * @generated from rpc commonfate.control.integration.reset.v1alpha1.ResetService.RetryBackgroundJob
     */
    retryBackgroundJob: {
      name: 'RetryBackgroundJob',
      I: RetryBackgroundJobRequest,
      O: RetryBackgroundJobResponse,
      kind: MethodKind.Unary
    }
  }
} as const
