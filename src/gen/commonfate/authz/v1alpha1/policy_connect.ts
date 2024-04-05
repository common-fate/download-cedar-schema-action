// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/authz/v1alpha1/policy.proto (package commonfate.authz.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreatePolicySetRequest,
  CreatePolicySetResponse,
  DeletePolicySetRequest,
  DeletePolicySetResponse,
  GetPolicySetRequest,
  GetPolicySetResponse,
  ListPolicySetsRequest,
  ListPolicySetsResponse,
  UpdatePolicySetRequest,
  UpdatePolicySetResponse
} from './policy_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * @generated from service commonfate.authz.v1alpha1.PolicyService
 */
export const PolicyService = {
  typeName: 'commonfate.authz.v1alpha1.PolicyService',
  methods: {
    /**
     * @generated from rpc commonfate.authz.v1alpha1.PolicyService.CreatePolicySet
     */
    createPolicySet: {
      name: 'CreatePolicySet',
      I: CreatePolicySetRequest,
      O: CreatePolicySetResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.authz.v1alpha1.PolicyService.UpdatePolicySet
     */
    updatePolicySet: {
      name: 'UpdatePolicySet',
      I: UpdatePolicySetRequest,
      O: UpdatePolicySetResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.authz.v1alpha1.PolicyService.ListPolicySets
     */
    listPolicySets: {
      name: 'ListPolicySets',
      I: ListPolicySetsRequest,
      O: ListPolicySetsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.authz.v1alpha1.PolicyService.GetPolicySet
     */
    getPolicySet: {
      name: 'GetPolicySet',
      I: GetPolicySetRequest,
      O: GetPolicySetResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.authz.v1alpha1.PolicyService.DeletePolicySet
     */
    deletePolicySet: {
      name: 'DeletePolicySet',
      I: DeletePolicySetRequest,
      O: DeletePolicySetResponse,
      kind: MethodKind.Unary
    }
  }
} as const
